import * as React from 'react';
import { render } from 'react-dom';

import './locales/en';
// import './locales/ja';
import './locales/ru';
import './data/buzzwords';
import './data/xp';
import './eff/handleKeyboard';

import { setLocale, subscribe, State, LanguageTag } from './kiririntl';
import { store, setTheme } from './store';

import { App } from './App';

import './fonts';

const isEn = (x: string) => /^en/.test(x);
const isJa = (x: string) => /^ja/.test(x);
const isRu = (x: string) => /^ru/.test(x);
const isAny = (x: string) => isEn(x) || isJa(x) || isRu(x);
const toAny = (x: string): LanguageTag => isRu(x) ? 'ru' : isJa(x) ? 'ja-u-nu-fullwide' : 'en';

const detectLang = (): LanguageTag => {
    if (isAny(navigator.language)) {
        return toAny(navigator.language);
    }

    for (const lang of navigator.languages) {
        if (isAny(lang)) {
            return toAny(lang);
        }
    }

    return 'en';
};

const restoreLang = () => {
    const lang = localStorage.getItem('lang');

    switch (lang) {
        case 'ja-u-nu-fullwide':
        case 'ru':
            setLocale(lang);
            break;
        default:
            setLocale(detectLang());
    }
};

const restoreTheme = () => {
    const theme = localStorage.getItem('theme');

    if (theme === 'light') {
        setTheme('light');
    }
};

const saveLang = ({ current: lang }: State) => {
    localStorage.setItem('lang', lang);
};

const saveTheme = () => {
    const { theme } = store.getState();

    localStorage.setItem('theme', theme);
};

render(<App />, document.querySelector('#root'));

restoreLang();
restoreTheme();

subscribe(saveLang);
store.subscribe(saveTheme);
