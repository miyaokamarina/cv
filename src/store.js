// @flow

import { createAction, createReducer } from 'redux-act';
import { createStore } from 'redux';
import { lensProp, over } from 'ramda';

import { DEFAULT_LANGUAGE, media } from './data/config';
import { isPrint } from './effect/isPrint';
import { isTouch } from './effect/isTouch';
import { isKeyboard } from './effect/isKeyboard';
import { sizes } from './effect/sizes';

export const setLang = createAction('set `lang`');
export const setIsTouch = createAction('set `isTouch`');
export const setIsKeyboard = createAction('set `isKeyboard`');
export const setIsPrint = createAction('set `isPrint`');
export const setTheme = createAction('set `theme`');
export const setBuzzwords = createAction('set `buzzwords`');
export const setXp = createAction('set `xp`');
export const setCategories = createAction('set `categories`');
export const setJobsRaw = createAction('set `jobsRaw`');
export const setSizes = createAction('set `sizes`', (size, value) => [size, value]);
export const toggleMenu = createAction('toggle `menu`');
export const toggleCategory = createAction('toggle `category[x]`');
export const toggleLevel = createAction('toggle `level[x]`');
export const toggleAz = createAction('toggle `az`');

const lensLang = lensProp('lang');
const lensIsTouch = lensProp('isTouch');
const lensIsKeyboard = lensProp('isKeyboard');
const lensIsPrint = lensProp('isPrint');
const lensTheme = lensProp('theme');
const lensBuzzwords = lensProp('buzzwords');
const lensXp = lensProp('xp');
const lensCategories = lensProp('categories');
const lensJobsRaw = lensProp('jobsRaw');
const lensSizes = lensProp('sizes');
const lensMenu = lensProp('menu');
const lensCategory = lensProp('category');
const lensLevel = lensProp('level');
const lensAz = lensProp('az');

const reducer = createReducer(
    {
        [setLang]: (state, payload) => over(lensLang, () => payload, state),
        [setIsTouch]: (state, payload) => over(lensIsTouch, () => payload, state),
        [setIsKeyboard]: (state, payload) => over(lensIsKeyboard, () => payload, state),
        [setIsPrint]: (state, payload) => over(lensIsPrint, () => payload, state),
        [setTheme]: (state, payload) => over(lensTheme, () => payload, state),
        [setBuzzwords]: (state, payload) => over(lensBuzzwords, () => payload, state),
        [setXp]: (state, payload) => over(lensXp, () => payload, state),
        [setCategories]: (state, payload) => over(lensCategories, () => payload, state),
        [setJobsRaw]: (state, payload) => over(lensJobsRaw, () => payload, state),
        [toggleMenu]: state => over(lensMenu, () => !state.menu, state),
        [toggleAz]: state => over(lensAz, () => !state.az, state),
        [toggleCategory]: (state, payload) => over(lensCategory, category => over(lensProp(payload), x => !x, category), state),
        [toggleLevel]: (state, payload) => over(lensLevel, level => over(lensProp(payload), x => !x, level), state),
        [setSizes]: (state, [size, value]) => {
            const lensSize = lensProp(size);

            return over(lensSizes, old => over(lensSize, () => value, old), state);
        },
    },
    {
        lang: DEFAULT_LANGUAGE,
        isTouch: isTouch(setIsTouch),
        isKeyboard: isKeyboard(setIsKeyboard),
        isPrint: isPrint(setIsPrint),
        theme: 'dark',
        buzzwordsRaw: null,
        buzzwords: [],
        categories: null,
        jobsRaw: null,
        sizes: Object.keys(media).reduce((r, size) => ({ ...r, [size]: sizes(size, setSizes) }), {}),
        menu: false,
        category: {
            frontend: true,
            backend: true,
            general: true,
            bestPractices: true,
            personality: true,
        },
        level: {
            ok: true,
            info: true,
            warning: true,
            error: true,
            primary: true,
            secondary: true,
        },
        xp: null,
        az: false,
    },
);

export const store =
    process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__
        ? createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__())
        : createStore(reducer);

[
    setLang,
    setIsTouch,
    setIsKeyboard,
    setIsPrint,
    setTheme,
    setBuzzwords,
    setXp,
    setCategories,
    setJobsRaw,
    setSizes,
    toggleMenu,
    toggleCategory,
    toggleLevel,
    toggleAz,
].forEach(x => x.assignTo(store));
