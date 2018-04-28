import { Store, createStore } from 'redux';

import { Buzzword, Category, CategoryName } from './data/buzzwords';
import { Level } from './kit/Level';

import { Xp } from './data/xp';

export type State = {
    // Data
    buzzwords: Buzzword[];
    categories: Category[];
    xps: Xp[];

    // Data state
    buzzwordsLevels: { [L in Level]: boolean };

    // App state
    theme: Theme;
    menu: boolean,
};

export type Theme = 'dark' | 'light';

type Action = SetBuzzwords | SetCategories | SetXps | ToggleBuzzwordsLevel | ToggleBuzzwordsCategory | SetTheme | ToggleMenu;

type SetBuzzwords = {
    type: 'setBuzzwords';
    buzzwords: Buzzword[];
};

type SetCategories = {
    type: 'setCategories';
    categories: Category[];
};

type SetXps = {
    type: 'setXps';
    xps: Xp[];
};

type ToggleBuzzwordsLevel = {
    type: 'toggleBuzzwordsLevel';
    level: Level;
};

type ToggleBuzzwordsCategory = {
    type: 'toggleBuzzwordsCategory';
    category: CategoryName;
};

type SetTheme = {
    type: 'setTheme';
    theme: Theme;
};

type ToggleMenu = {
    type: 'toggleMenu',
};

const isNever = (x: never) => {
    void x;
};

const initialState: State = {
    buzzwords: [],
    categories: [],
    xps: [],
    buzzwordsLevels: {
        primary: true,
        secondary: true,
        ok: true,
        info: true,
        warn: true,
        error: true,
    },
    theme: 'dark',
    menu: false,
};

const reducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case 'setBuzzwords':
            action as SetBuzzwords;

            return {
                ...state,
                buzzwords: action.buzzwords,
            };
        case 'setCategories':
            action as SetCategories;

            return {
                ...state,
                categories: action.categories,
            };
        case 'setXps':
            action as SetXps;

            return {
                ...state,
                xps: action.xps,
            };
        case 'toggleBuzzwordsLevel':
            action as ToggleBuzzwordsLevel;

            return {
                ...state,
                buzzwordsLevels: {
                    ...state.buzzwordsLevels,
                    [action.level]: !state.buzzwordsLevels[action.level],
                },
            };
        case 'toggleBuzzwordsCategory':
            action as ToggleBuzzwordsCategory;

            return {
                ...state,
                categories: state.categories.map(
                    category =>
                        category.id === action.category
                            ? {
                                  ...category,
                                  visible: !category.visible,
                              }
                            : category,
                ),
            };
        case 'setTheme':
            action as SetTheme;

            return {
                ...state,
                theme: action.theme,
            };
        case 'toggleMenu':
            action as ToggleMenu;

            return {
                ...state,
                menu: !state.menu,
            };
        default:
            action as never;
            isNever(action);

            return state;
    }
};

export const store: Store<State, Action> =
    process.env.NODE_ENV === 'development' && (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? createStore(reducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__({ name: 'Application store' }))
        : createStore(reducer); // TODO

// region # Action creators

export const setBuzzwords = (buzzwords: Buzzword[]) => {
    store.dispatch({
        type: 'setBuzzwords',
        buzzwords,
    });
};

export const setCategories = (categories: Category[]) => {
    store.dispatch({
        type: 'setCategories',
        categories,
    });
};

export const setXps = (xps: Xp[]) => {
    store.dispatch({
        type: 'setXps',
        xps,
    });
};

export const toggleBuzzwordsLevel = (level: Level) => {
    store.dispatch({
        type: 'toggleBuzzwordsLevel',
        level,
    });
};

export const toggleBuzzwordsCategory = (category: CategoryName) => {
    store.dispatch({
        type: 'toggleBuzzwordsCategory',
        category,
    });
};

const html: HTMLHtmlElement = document.querySelector('html') as any;

export const setTheme = (theme: Theme) => {
    store.dispatch({
        type: 'setTheme',
        theme,
    });

    html.classList.remove('light');
    html.classList.remove('dark');

    html.classList.add(theme);
};

export const toggleMenu = () => {
    store.dispatch({
        type: 'toggleMenu',
    });
};

// endregion # Action creators
