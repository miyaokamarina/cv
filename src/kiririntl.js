// @flow

/*
eslint
max-lines: off,
react/no-multi-comp: off,
*/

import React, { PureComponent, createContext, isValidElement } from 'react';
import { createStore } from 'redux';

import type { ComponentType as ReactComponentType, Node as ReactNode } from 'react';
import type { Store as ReduxStore } from 'redux';

// region # Types

/**
 * Locales map.
 */
export type Locales = {
    [LanguageTag]: Locale,
};

/**
 * Single locale.
 */
export type Locale = {
    tag: LanguageTag,
    title: ReactNode,
    fallbacks: LanguageTag[],
    [MessageName]: ReactNode | Message,
};

type LanguageTag = 'en' | 'ru' | 'ja';
type MessageName = string;

// region ## Message

type Message = CardinalQuasi | OrdinalQuasi | DateQuasi | EtcQuasi;

type MessageTag<T, Q: Quasi<T>> = (string[], ...Interpolation<T>[]) => Q;

type Interpolation<T> = (T[], (T) => $If<$Gte<number, T>, ReactNode | PluralMap, ReactNode>) => void;

type PluralMap = {
    value: number,
    [string]: ReactNode,
};

opaque type Quasi<T> = {
    quasis: string[],
    interpolations: Interpolation<T>[],
};

opaque type CardinalQuasi = Quasi<number> & { type: 'cardinal' };
opaque type OrdinalQuasi = Quasi<number> & { type: 'ordinal' };
opaque type DateQuasi = Quasi<Date> & { type: 'date' };
opaque type EtcQuasi = Quasi<ReactNode> & { type: 'etc' };

// endregion ## Message

// region ## Kiririn

type UniversalKiririn = SimpleKiririn & ParametrizedKiririn & State;

type SimpleKiririn = (string[], ...ReactNode[]) => ReactNode;
type ParametrizedKiririn = (...mixed[]) => (string[], ...mixed[]) => ReactNode;

// endregion ## Kiririn

// region ## State

type State = {
    current: LanguageTag,
    fallbacks: LanguageTag[],
    locales: Locales,
    // TODO: Async locale loading.
};

type Action = SetLocale | AddLocale | ClearLocales | AddFallback | ClearFallbacks;

type SetLocale = {
    type: 'setLocale',
    tag: LanguageTag,
};

type AddLocale = {
    type: 'addLocale',
    locale: Locale,
};

type ClearLocales = {
    type: 'clearLocales',
};

type AddFallback = {
    type: 'addFallback',
    tag: LanguageTag,
};

type ClearFallbacks = {
    type: 'clearFallbacks',
};

// endregion ## State

// region ## Provider
type ProviderProps = {| children: ReactNode |};
type ProviderState = {| kiririn: UniversalKiririn |};
type ConsumerProps = {| children: UniversalKiririn => ReactNode |};
type HocProps = { kiririn: UniversalKiririn };
// endregion ## Provider

// endregion # Types

// region # Constants

const unresolved = Symbol('miyamarisubs/kiririntl.unresolved');
const defaultTag = 'en';

const initialState = {
    current: defaultTag,
    fallbacks: [defaultTag],
    locales: {
        en: {
            tag: 'en',
            title: 'English',
            fallbacks: [],
        },
    },
};

// endregion # Constants

// region # Caches
// endregion # Caches

// region # Functions

// region ## Utility

const identity = a => a;

const isTag = (quasis: string[], interpolations: mixed[]) => Array.isArray(quasis) && Array.isArray((quasis: HACK).raw) && Array.isArray(interpolations);

const untag = (quasis: string[], interpolations: mixed[]) => {
    const result = [];

    for (let i = 0; i < interpolations.length; i = i + 1) {
        result.push(quasis[i]);
        result.push(interpolations[i]);
    }

    result.push(quasis[quasis.length - 1]);

    return result.join('');
};

const isValidNode = x => typeof x === 'boolean' || typeof x === 'number' || typeof x === 'string' || x === null || Array.isArray(x) || isValidElement(x);

// eslint-disable-next-line no-unused-vars
const warn = (...args) => {
    if (process.env.NODE_ENV !== 'production') {
        // console.warn(...args); // eslint-disable-line no-console
    }
};

// endregion ## Utility

// region ## Format message

const formatMessage = (tag: LanguageTag, message: Message | ReactNode, params: mixed[]) => {
    if (isValidNode(message)) {
        return (message: HACK);
    }

    const m: Message = (message: HACK);
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
            (m: empty);
    }

    result.push(quasis[quasis.length - 1]);

    return result;
};

const formatPlural = (tag: LanguageTag, m: CardinalQuasi | OrdinalQuasi, params: mixed[]) => {
    const { quasis, interpolations, type } = m;
    const result = [];
    const values: number[] = (params.filter(x => typeof x === 'number'): TODO);

    for (let i = 0; i < interpolations.length; i = i + 1) {
        result.push(quasis[i]);

        // Evaluate interpolation:
        const evaluated = interpolations[i](values, mkNumberFormatter(tag));

        // Return as-is, if valid React node:
        if (isValidNode(evaluated)) {
            result.push(evaluated);
        } else {
            result.push(formatPluralInterpolation(tag, (evaluated: HACK), type));
        }
    }

    return result;
};

const formatDate = (tag: LanguageTag, m: DateQuasi, params: mixed[]) => {
    const { quasis, interpolations } = m;
    const result = [];
    const values: Date[] = (params.filter(x => x instanceof Date): TODO);

    for (let i = 0; i < interpolations.length; i = i + 1) {
        result.push(quasis[i]);
        result.push(interpolations[i](values, mkDateFormatter(tag)));
    }

    return result;
};

const formatEtc = (m: EtcQuasi, params: mixed[]) => {
    const { quasis, interpolations } = m;
    const result = [];
    const values: ReactNode[] = (params.filter(x => isValidNode(x)): TODO);

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

const mkNumberFormatter = (tag: LanguageTag) => (x: number, options?: TODO) => new Intl.NumberFormat(tag, options).format(x); // TODO: Cache.
const mkDateFormatter = (tag: LanguageTag) => (x: Date, options?: TODO) => new Intl.DateTimeFormat(tag, options).format(x); // TODO: Cache.

const mkCardinalSelector = (tag: LanguageTag) => (x: number) => new Intl.PluralRules(tag, { type: 'cardinal' }).select(x); // TODO: Cache
const mkOrdinalSelector = (tag: LanguageTag) => (x: number) => new Intl.PluralRules(tag, { type: 'ordinal' }).select(x); // TODO: Cache

// endregion ## Format message

// region ## Message tags

export const cardinal: MessageTag<number, CardinalQuasi> = (quasis, ...interpolations) => ({ quasis, interpolations, type: 'cardinal' });

export const ordinal: MessageTag<number, OrdinalQuasi> = (quasis, ...interpolations) => ({ quasis, interpolations, type: 'ordinal' });

export const date: MessageTag<Date, DateQuasi> = (quasis, ...interpolations) => ({ quasis, interpolations, type: 'date' });

export const etc: MessageTag<ReactNode, EtcQuasi> = (quasis, ...interpolations) => ({ quasis, interpolations, type: 'etc' });

// endregion ## Message tags

// region ## Kiririn

const mkKiririn = (locales: Locales, fallbacks: LanguageTag[], tag: LanguageTag): UniversalKiririn => {
    const kiririn = (quasis, ...interpolations) => {
        if (isTag((quasis: HACK), interpolations)) {
            return translate(locales, fallbacks, tag, (quasis: HACK), interpolations, []);
        } else {
            const params = [quasis, ...interpolations];

            return (quasis, ...interpolations) => translate(locales, fallbacks, tag, quasis, interpolations, params);
        }
    };

    kiririn.locales = locales;
    kiririn.current = tag;
    kiririn.fallbacks = fallbacks;

    return (kiririn: TODO);
};

// TODO: Cache.
const translate = (locales: Locales, fallbacks: LanguageTag[], tag: LanguageTag, quasis: string[], interpolations: mixed[], params: mixed[]) => {
    const name = untag(quasis, interpolations);
    const message = resolveMessage(locales, fallbacks, tag, name);

    if (message === unresolved) {
        return name;
    }

    return formatMessage(tag, (message: HACK), params);
};

// TODO: Cache.
const resolveMessage = (locales: Locales, fallbacks: LanguageTag[], tag: LanguageTag, name: MessageName) => {
    const lookupList = mkLookupList(locales, fallbacks, tag);

    if (name === 'fallbacks') {
        warn('Trying to get message with reserved key `fallbacks`.');

        return null;
    }

    for (const locale of lookupList) {
        if (name in locale) {
            return locale[name];
        }
    }

    warn(`Unresolved message \`${JSON.stringify(name)}\` in locale \`${tag}\` with fallbacks \`${[...fallbacks].join('`, `')}\`.`);

    return unresolved;
};

const mkLookupList = (locales: Locales, fallbacks: LanguageTag[], tag: LanguageTag) => {
    const queue = [locales[tag]];
    const result = new Set([locales[tag]]);

    if (tag in locales) {
        do {
            for (const locale of queue
                .shift()
                .fallbacks.map(tag => locales[tag])
                .filter(Boolean)) {
                if (!result.has(locale)) {
                    result.add(locale);
                    queue.push(locale);
                }
            }
        } while (queue.length > 0);
    }

    for (const tag of fallbacks) {
        if (tag in locales) {
            result.add(locales[tag]);
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
            (action: SetLocale);

            return {
                ...state,
                current: action.tag,
            };

        case 'addLocale':
            (action: AddLocale);

            if (action.locale.tag in state.locales) {
                return {
                    ...state,
                    locales: {
                        ...state.locales,
                        [action.locale.tag]: {
                            ...state.locales[action.locale.tag],
                            ...action.locale,
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
            (action: ClearLocales);

            return {
                ...state,
                locales: {},
            };
        case 'addFallback':
            (action: AddFallback);

            return {
                ...state,
                fallbacks: [...new Set([...state.fallbacks, action.tag])],
            };
        case 'clearFallbacks':
            (action: ClearFallbacks);

            return {
                ...state,
                fallbacks: [],
            };
        default:
            (action: empty);

            return state;
    }
};

const store: ReduxStore<State, Action> =
    process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__
        ? createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__())
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
const kiririn = mkKiririn(locales, fallbacks, current);
const Context = createContext(kiririn);

class Provider extends PureComponent<ProviderProps, ProviderState> {
    static displayName = 'Kiririn.Provider';

    state = {
        kiririn,
    };

    unsubscribe: () => mixed;

    constructor(props: ProviderProps) {
        super(props);

        this.unsubscribe = store.subscribe(() => {
            const { locales, fallbacks, current } = store.getState();
            const kiririn = mkKiririn(locales, fallbacks, current);

            this.setState({
                kiririn,
            });
        });
    }

    render() {
        return <Context.Provider value={this.state.kiririn}>{this.props.children}</Context.Provider>;
    }
}

export class Kiririn extends PureComponent<ConsumerProps> {
    static Provider = Provider;

    render() {
        return <Context.Consumer {...this.props} />;
    }
}

// endregion # Provider

// region # HOC
export const withKiririn = <Props>(Component: ReactComponentType<Props & HocProps>) => {
    const WithKiririn = (props: Props) => <Kiririn>{kiririn => <Component {...props} kiririn={kiririn} />}</Kiririn>;

    // flowlint-next-line sketchy-null-string: off
    WithKiririn.displayName = `WithKiririn(${Component.displayName || Component.name || 'Unknown'})`;

    return WithKiririn;
};
// endregion # HOC
