/*
eslint
max-lines: off,
*/

// TODO: Get rid of Redux.

import * as React from 'react';
import { createStore, Store } from 'redux';
import { pure } from 'recompose';

// region # Types

/**
 * Locales map.
 */
export type Locales = { [Tag in LanguageTag]?: Locale };

/**
 * Single locale.
 */
export type Locale = {
    tag: LanguageTag;
    title: React.ReactNode;
    fallbacks: LanguageTag[];
    messages: Map<string, React.ReactNode | Message>;
};

export type LanguageTag = 'en' | 'ru' | 'ja-u-nu-fullwide';
type MessageName = string;

// region ## Message

type Message = CardinalQuasi | OrdinalQuasi | DateQuasi | EtcQuasi;

type MessageTag<T, Q extends Quasi<T>> = (quasis: TemplateStringsArray, ...interpolations: Interpolation<T>[]) => Q;

type Interpolation<T> = (
    params: T[],
    formatter: (
        param: T,
        options?: T extends number ? Intl.NumberFormatOptions : T extends Date ? Intl.DateTimeFormatOptions : never,
    ) => T extends number ? React.ReactNode | PluralMap : React.ReactNode,
) => void;

type PluralMap = {
    value: number;
    [key: string]: React.ReactNode;
};

type Quasi<T> = {
    quasis: TemplateStringsArray;
    interpolations: Interpolation<T>[];
};

type CardinalQuasi = Quasi<number> & { type: 'cardinal' };
type OrdinalQuasi = Quasi<number> & { type: 'ordinal' };
type DateQuasi = Quasi<Date> & { type: 'date' };
type EtcQuasi = Quasi<React.ReactNode> & { type: 'etc' };

// endregion ## Message

// region ## Kiririn

export type Tl = SimpleTl & ParametrizedTl & State;

type SimpleTl = (quasis: TemplateStringsArray, ...interpolations: React.ReactNode[]) => React.ReactNode;
type ParametrizedTl = (...params: any[]) => (quasis: TemplateStringsArray, ...interpolations: any[]) => React.ReactNode;

// endregion ## Kiririn

// region ## State

export type State = {
    current: LanguageTag;
    fallbacks: LanguageTag[];
    locales: Locales;
};

type Action = SetLocale | AddLocale | ClearLocales | AddFallback | ClearFallbacks;

type SetLocale = {
    type: 'setLocale';
    tag: LanguageTag;
};

type AddLocale = {
    type: 'addLocale';
    locale: Locale;
};

type ClearLocales = {
    type: 'clearLocales';
};

type AddFallback = {
    type: 'addFallback';
    tag: LanguageTag;
};

type ClearFallbacks = {
    type: 'clearFallbacks';
};

// endregion ## State

// region ## Provider
type ProviderProps = { children?: React.ReactNode };
type ProviderState = { tl: Tl };
type ConsumerProps = { children: (callbackfn: Tl) => React.ReactNode };
type KiririntlInjectedProps = { tl: Tl };
// endregion ## Provider

// endregion # Types

// region # Constants

const unresolved = Symbol('miyamarisubs/kiririntl.unresolved');
const defaultTag: LanguageTag = 'en';

const initialState = {
    current: defaultTag,
    fallbacks: [defaultTag],
    locales: {
        en: {
            tag: 'en' as LanguageTag,
            title: 'English',
            fallbacks: [],
            messages: new Map(),
        },
    },
};

// endregion # Constants

// region # Caches
// endregion # Caches

// region # Functions

// region ## Utility

const identity = <A extends any>(a: A) => a;

const isTag = (quasis: TemplateStringsArray, interpolations: any[]) => Array.isArray(quasis) && Array.isArray(quasis.raw) && Array.isArray(interpolations);

const untag = ({ raw }: TemplateStringsArray, interpolations: any[]) => {
    const result = [];

    for (let i = 0; i < interpolations.length; i = i + 1) {
        result.push(raw[i]);
        result.push(interpolations[i]);
    }

    result.push(raw[raw.length - 1]);

    return result.join('');
};

const isValidNode = (x: any): x is React.ReactNode =>
    typeof x === 'boolean' || typeof x === 'number' || typeof x === 'string' || x === null || Array.isArray(x) || React.isValidElement(x);

const warn = (...args: any[]) => {
    if (process.env.NODE_ENV === 'never') {
        console.warn(...args); // eslint-disable-line no-console
    }
};

// endregion ## Utility

// region ## Format message

const formatMessage = (tag: LanguageTag, message: Message | React.ReactNode, params: any[]) => {
    if (isValidNode(message)) {
        return message;
    }

    const m: Message = message as any;
    const { quasis } = m;
    const result = [];

    switch (m.type) {
        case 'cardinal':
        case 'ordinal':
            result.push(...formatPlural(tag, m, params));
            break;
        case 'date':
            result.push(...formatDate(tag, m, params));
            break;
        case 'etc':
            result.push(...formatEtc(m, params));
            break;
        default:
            m as never;
    }

    result.push(quasis[quasis.length - 1]);

    return result;
};

const formatPlural = (tag: LanguageTag, m: CardinalQuasi | OrdinalQuasi, params: any[]) => {
    const { quasis, interpolations, type } = m;
    const result = [];
    const values: number[] = params.filter(x => typeof x === 'number');

    for (let i = 0; i < interpolations.length; i = i + 1) {
        result.push(quasis[i]);

        // Evaluate interpolation:
        const evaluated = interpolations[i](values, mkNumberFormatter(tag));

        // Return as-is, if valid React node:
        if (isValidNode(evaluated)) {
            result.push(evaluated);
        } else {
            result.push(formatPluralInterpolation(tag, evaluated as any, type));
        }
    }

    return result;
};

const formatDate = (tag: LanguageTag, m: DateQuasi, params: any[]) => {
    const { quasis, interpolations } = m;
    const result = [];
    const values: Date[] = params.filter(x => x instanceof Date);

    for (let i = 0; i < interpolations.length; i = i + 1) {
        result.push(quasis[i]);
        result.push(interpolations[i](values, mkDateFormatter(tag)));
    }

    return result;
};

const formatEtc = (m: EtcQuasi, params: any[]) => {
    const { quasis, interpolations } = m;
    const result = [];
    const values: React.ReactNode[] = params.filter(x => isValidNode(x));

    for (let i = 0; i < interpolations.length; i = i + 1) {
        result.push(quasis[i]);
        result.push(interpolations[i](values, identity));
    }

    return result;
};

const formatPluralInterpolation = (tag: LanguageTag, pluralMap: PluralMap, type: 'cardinal' | 'ordinal') => {
    const { value } = pluralMap;
    const exact = `=${value}`;

    // Handle exact variant:
    if (exact in pluralMap) {
        return pluralMap[exact];
    }

    // Select variant using `PluralRules`:
    const selector = type === 'cardinal' ? mkCardinalSelector(tag) : mkOrdinalSelector(tag);
    const selected = selector(pluralMap.value);

    // Handle existent variant:
    if (selected in pluralMap) {
        return selected;
    }

    // Handle non-existent variant:
    return pluralMap.other;
};

const mkNumberFormatter = (tag: LanguageTag) => (x: number, options?: Intl.NumberFormatOptions) => new Intl.NumberFormat(tag, options).format(x); // TODO: Cache.
const mkDateFormatter = (tag: LanguageTag) => (x: Date, options?: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat(tag, options).format(x); // TODO: Cache.

const mkCardinalSelector = (tag: LanguageTag) => (x: number) => new (Intl as any).PluralRules(tag, { type: 'cardinal' }).select(x); // TODO: Cache
const mkOrdinalSelector = (tag: LanguageTag) => (x: number) => new (Intl as any).PluralRules(tag, { type: 'ordinal' }).select(x); // TODO: Cache

// endregion ## Format message

// region ## Message tags

export const cardinal: MessageTag<number, CardinalQuasi> = (quasis, ...interpolations) => ({ quasis, interpolations, type: 'cardinal' });

export const ordinal: MessageTag<number, OrdinalQuasi> = (quasis, ...interpolations) => ({ quasis, interpolations, type: 'ordinal' });

export const date: MessageTag<Date, DateQuasi> = (quasis, ...interpolations) => ({ quasis, interpolations, type: 'date' });

export const etc: MessageTag<React.ReactNode, EtcQuasi> = (quasis, ...interpolations) => ({ quasis, interpolations, type: 'etc' });

// endregion ## Message tags

// region ## Kiririn

const mkKiririn = (locales: Locales, fallbacks: LanguageTag[], tag: LanguageTag): Tl => {
    const kiririn: any = (quasis: TemplateStringsArray, ...interpolations: React.ReactNode[]) => {
        if (isTag(quasis, interpolations)) {
            return translate(locales, fallbacks, tag, quasis, interpolations, []);
        } else {
            const params = [quasis, ...interpolations];

            return (quasis: TemplateStringsArray, ...interpolations: React.ReactNode[]) => translate(locales, fallbacks, tag, quasis, interpolations, params);
        }
    };

    kiririn.locales = locales;
    kiririn.current = tag;
    kiririn.fallbacks = fallbacks;

    return kiririn;
};

// TODO: Cache.
const translate = (
    locales: Locales,
    fallbacks: LanguageTag[],
    tag: LanguageTag,
    quasis: TemplateStringsArray,
    interpolations: React.ReactNode[],
    params: any[],
) => {
    const name = untag(quasis, interpolations);
    const message = resolveMessage(locales, fallbacks, tag, name);

    if (message === unresolved) {
        return name;
    }

    return formatMessage(tag, message, params);
};

// TODO: Cache.
const resolveMessage = (locales: Locales, fallbacks: LanguageTag[], tag: LanguageTag, name: MessageName) => {
    const lookupList = mkLookupList(locales, fallbacks, tag);

    for (const locale of lookupList) {
        if (locale.messages.has(name)) {
            return locale.messages.get(name) as React.ReactNode | Message;
        }
    }

    warn(`Unresolved message \`${JSON.stringify(name)}\` in locale \`${tag}\` with fallbacks \`${[...fallbacks].join('`, `')}\`.`);

    return unresolved;
};

const mkLookupList = (locales: Locales, fallbacks: LanguageTag[], tag: LanguageTag): Locale[] => {
    const queue: Locale[] = tag in locales ? [locales[tag] as Locale] : [];
    const result: Set<Locale> = new Set(queue);

    if (tag in locales) {
        do {
            for (const locale of (queue.shift() as Locale).fallbacks.map((tag: LanguageTag) => locales[tag]).filter(Boolean) as Locale[]) {
                if (!result.has(locale)) {
                    result.add(locale);
                    queue.push(locale);
                }
            }
        } while (queue.length > 0);
    }

    for (const tag of fallbacks) {
        if (tag in locales) {
            result.add(locales[tag] as Locale);
        }
    }

    return [...result];
};

// endregion ## Kiririn

// endregion # Functions

// region # Store

const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case 'setLocale':
            action as SetLocale;

            return {
                ...state,
                current: action.tag,
            };

        case 'addLocale':
            action as AddLocale;

            if (action.locale.tag in state.locales) {
                return {
                    ...state,
                    locales: {
                        ...state.locales,
                        [action.locale.tag]: {
                            ...state.locales[action.locale.tag],
                            ...action.locale,
                            messages: new Map([...(state.locales[action.locale.tag] as Locale).messages, ...action.locale.messages]),
                        },
                    },
                };
            } else {
                return {
                    ...state,
                    locales: {
                        ...state.locales,
                        [action.locale.tag]: action.locale,
                    },
                };
            }

        case 'clearLocales':
            action as ClearLocales;

            return {
                ...state,
                locales: {},
            };
        case 'addFallback':
            action as AddFallback;

            return {
                ...state,
                fallbacks: [...new Set([...state.fallbacks, action.tag])],
            };
        case 'clearFallbacks':
            action as ClearFallbacks;

            return {
                ...state,
                fallbacks: [],
            };
        default:
            action as never;

            return state;
    }
};

const store: Store<State, Action> =
    process.env.NODE_ENV === 'development' && (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? createStore(reducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__({ name: 'Kiririn store' }))
        : createStore(reducer);

export const setLocale = (tag: LanguageTag) => {
    store.dispatch({
        type: 'setLocale',
        tag,
    });
};

export const addLocale = (locale: Locale) => {
    store.dispatch({
        type: 'addLocale',
        locale,
    });
};

export const clearLocales = () => {
    store.dispatch({
        type: 'clearLocales',
    });
};

export const addFallback = (tag: LanguageTag) => {
    store.dispatch({
        type: 'addFallback',
        tag,
    });
};

export const clearFallbacks = () => {
    store.dispatch({
        type: 'clearFallbacks',
    });
};

// endregion # Store

// region # Provider

const { locales, fallbacks, current } = store.getState();
const tl = mkKiririn(locales, fallbacks, current);
const Context = React.createContext(tl);

class Provider extends React.PureComponent<ProviderProps, ProviderState> {
    static displayName = 'Kiririn.Provider';

    state = {
        tl,
    };

    unsubscribe: () => any; // TODO: Unsubscribe on unmount.

    constructor(props: ProviderProps) {
        super(props);

        this.unsubscribe = store.subscribe(() => {
            const { locales, fallbacks, current } = store.getState();
            const tl = mkKiririn(locales, fallbacks, current);

            this.setState({
                tl,
            });
        });
    }

    render() {
        return <Context.Provider value={this.state.tl}>{this.props.children}</Context.Provider>;
    }
}

export class Kiririn extends React.PureComponent<ConsumerProps> {
    static Provider = Provider;

    render() {
        return <Context.Consumer {...this.props} />;
    }
}

export const subscribe = (f: (state: State) => any) =>
    store.subscribe(() => {
        f(store.getState());
    });

// endregion # Provider

// region # HOC
export const withTl = <OriginalProps extends {}>(
    Component: React.ComponentType<OriginalProps & KiririntlInjectedProps>,
): React.ComponentType<OriginalProps> => {
    const WithTl = (props: OriginalProps) => <Kiririn>{tl => <Component {...props} tl={tl} />}</Kiririn>;

    (WithTl as any).displayName = `withTl(${Component.displayName || Component.name || 'Unknown'})`;

    return pure(WithTl);
};
// endregion # HOC
