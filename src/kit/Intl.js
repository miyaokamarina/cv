// @flow

/*
eslint
react/no-multi-comp: off,
*/

import * as React from 'react';

import { DEFAULT_LANGUAGE as lang, FALLBACK_LANGUAGE as fallback } from '~/data/config';
import { locales } from '~/data/locales';
import { translator } from '~/fun/translator';

import type { Store } from 'redux';

import type { Locales, Translator } from '~/fun/translator';

export type IntlParams = {
    lang: string,
};

export type IntlState = {
    lang: string,
    __: Translator,
};

export type IntlProps = {
    children?: React.Node,
    store: Store<IntlParams, mixed>,
    fallback: string,
    locales: Locales,
};

const defaultValue = translator(locales, fallback, lang);

const IntlContext = (React: TODO).createContext(defaultValue);

class IntlProvider extends React.PureComponent<IntlProps, IntlState> {
    constructor(props: IntlProps) {
        super(props);

        const { store, fallback, locales } = props;
        const { lang } = store.getState();

        this.state = {
            lang,
            __: translator(locales, fallback, lang),
        };

        store.subscribe(() => {
            const { lang } = store.getState();

            if (lang !== this.state.lang) {
                this.setState({
                    lang,
                    __: translator(locales, fallback, lang),
                });
            }
        });
    }

    render() {
        return <IntlContext.Provider value={this.state.__}>{this.props.children}</IntlContext.Provider>;
    }
}

export class Intl extends React.PureComponent<{ children: Translator => React.Node }> {
    static Provider = IntlProvider;

    render() {
        return <IntlContext.Consumer {...this.props} />;
    }
}
