// @flow

/*
eslint
react/no-multi-comp: off,
*/

import * as React from 'react';

import { equals } from '~/fun/equals';
import { createTheme } from '~/fun/createTheme';
import { media } from '~/data/config';
import { pickThemeParams } from '~/fun/pickThemeParams';

import type { ThemeType, ThemeParams, ThemeName } from '~/fun/createTheme';

import type { Store } from 'redux';

export type ThemeProviderProps = {
    children?: React.Node,
    theme: ThemeName,
    store: Store<ThemeParams, mixed>,
};

const defaultParams = {
    isTouch: true,
    isPrint: false,
    isKeyboard: false,
    theme: 'dark',
    sizes: Object.keys(media).reduce((r, size) => ({ ...r, [size]: false }), {}),
};

const defaultValue = createTheme(defaultParams);

const ThemeContext = (React: TODO).createContext(defaultValue);

class ThemeProvider extends React.PureComponent<ThemeProviderProps, { params: ThemeParams, theme: ThemeType }> {
    constructor(props: ThemeProviderProps) {
        super(props);

        const { store } = props;

        const state = store.getState();
        const params = pickThemeParams(state);

        this.state = {
            params: (params: HACK),
            theme: createTheme(state),
        };

        store.subscribe(() => {
            const state = store.getState();
            const params = pickThemeParams(state);

            if (!equals(params, this.state.params)) {
                this.setState({
                    params: (params: HACK),
                    theme: createTheme(state),
                });
            }
        });
    }

    render() {
        return <ThemeContext.Provider value={this.state.theme}>{this.props.children}</ThemeContext.Provider>;
    }
}

export class Theme extends React.PureComponent<{ children: ThemeType => React.Node }> {
    static Provider = ThemeProvider;

    render() {
        return <ThemeContext.Consumer {...this.props} />;
    }
}
