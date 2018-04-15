// @flow

/*
eslint
max-statements: off,
no-magic-numbers: off,
*/

import { memoize } from 'ramda';

import { hsl } from '~/fun/hsl';
import { media } from '~/data/config';

import type { ThemeParams, ThemeType } from './createTheme.types';

export { ThemeType, ThemeName, ThemeParams, Level } from './createTheme.types';

const primary = 180;
const secondary = 230;
const info = 260;
const ok = 140;
const warning = 70;
const error = 10;

const noBorder = {
    primary: '0 0 0 transparent',
    secondary: '0 0 0 transparent',
    info: '0 0 0 transparent',
    ok: '0 0 0 transparent',
    warning: '0 0 0 transparent',
    error: '0 0 0 transparent',
};

const levels: number => * = memoize(l => ({
    primary: hsl(primary, 100, l),
    secondary: hsl(secondary, 100, l),
    info: hsl(info, 100, l),
    ok: hsl(ok, 100, l),
    warning: hsl(warning, 100, l),
    error: hsl(error, 100, l),
}));

const mkFocus = memoize((isKeyboard, l: number) => {
    if (!isKeyboard) {
        return noBorder;
    } else {
        const levels_ = levels(l);

        return {
            primary: `0 0 0 2px ${levels_.primary}`,
            secondary: `0 0 0 2px ${levels_.secondary}`,
            info: `0 0 0 2px ${levels_.info}`,
            ok: `0 0 0 2px ${levels_.ok}`,
            warning: `0 0 0 2px ${levels_.warning}`,
            error: `0 0 0 2px ${levels_.error}`,
        };
    }
});

const mkBorder = memoize((l: number) => {
    const levels_ = levels(l);

    return {
        primary: `inset 0 0 0 1px ${levels_.primary}`,
        secondary: `inset 0 0 0 1px ${levels_.secondary}`,
        info: `inset 0 0 0 1px ${levels_.info}`,
        ok: `inset 0 0 0 1px ${levels_.ok}`,
        warning: `inset 0 0 0 1px ${levels_.warning}`,
        error: `inset 0 0 0 1px ${levels_.error}`,
    };
});

const createMediaHelper = x => styles => (x ? styles : null);

const colors_ = memoize((isKeyboard, isPrint, theme) => {
    const isPointer = !isKeyboard;
    const light = theme === 'light' || isPrint;

    return {
        // region Media functions
        keyboard: createMediaHelper(isKeyboard),
        pointer: createMediaHelper(isPointer),
        // endregion Media functions

        color: {
            active: {
                foreground: hsl(0, 0, 100),
                background: levels(50),
                focus: mkFocus(isKeyboard, light ? 66.67 : 33.33),
                glow: hsl(0, 0, 100, 50),
                ripple: hsl(0, 0, 100, 50),
            },
            alt: {
                foreground: levels(light ? 33.33 : 66.67),
                background: hsl(0, 0, light ? 100 : 16.67),
                focus: mkFocus(isKeyboard, light ? 66.67 : 33.33),
                border: mkBorder(50),
                glow: levels(light ? 93.33 : 33.33),
                ripple: levels(light ? 93.33 : 33.33),
            },
            semiactive: {
                // foreground: {},
                // placeholder: {},
                // background: {},
                // focus: {},
                // border: {},
                // glow: '',
                // ripple: '',
            },
            plain: {
                foreground: levels(light ? 33.33 : 66.67),
                background: hsl(0, 0, light ? 100 : 16.67),
                focus: mkFocus(isKeyboard, light ? 66.67 : 33.33),
                glow: levels(light ? 80 : 33.33),
                ripple: levels(light ? 80 : 33.33),
            },
            static: {
                foreground: levels(light ? 33.33 : 75),
                background: levels(light ? 95 : 16.67),
                border: mkBorder(50),
            },
            default: {
                foreground: hsl(0, 0, light ? 0 : 100),
                background: hsl(0, 0, light ? 100 : 16.67),
            },
            backdrop: light ? hsl(0, 0, 100, 66.67) : hsl(0, 0, 0, 66.67),
            // TODO: Disabled elements lightness.
        },
    };
});

const sizes_ = memoize((isTouch, isPrint, sizes) => {
    const isScreen = !isPrint;
    const isMouse = !isTouch;

    const cell = 20;
    const cellI = isTouch && !isPrint ? 30 : 20;

    // region Grid cell sizes
    const cellL0 = cell;
    const cellL1 = cell * (1 + 1 / 3); // 30
    const cellL2 = cell * 2; // 40
    const cellL3 = cell * 3; // 60
    const cellL4 = cell * 4; // 80
    const cellL5 = cell * 5; // 100
    const cellL6 = cell * 6; // 120

    const cellS0 = cell;
    const cellS1 = cell * 0.8; // 16
    const cellS2 = cell * 0.5; // 10
    const cellS3 = cell * 0.25; // 5
    const cellS4 = cell * 0.15; // 3
    const cellS5 = cell * 0.1; // 2
    const cellS6 = cell * 0.05; // 1

    const cellIL0 = cellI;
    const cellIL1 = cellI * (1 + 1 / 3);
    const cellIL2 = cellI * 2;
    const cellIL3 = cellI * 3;
    const cellIL4 = cellI * 4;
    const cellIL5 = cellI * 5;
    const cellIL6 = cellI * 6;

    const cellIS0 = cellI;
    const cellIS1 = cellI * 0.8;
    const cellIS2 = cellI * 0.5;
    const cellIS3 = cellI * 0.25;
    const cellIS4 = cellI * 0.15;
    const cellIS5 = cellI * 0.1;
    const cellIS6 = cellI * 0.05;
    // endregion Grid cell sizes

    // region Typography
    const fontSize = cell * 0.6;

    const fontSizeL0 = fontSize;
    const fontSizeL1 = fontSize * 1.5;
    const fontSizeL2 = fontSize * 2;
    // endregion Typography

    return {
        // region Cell sizes
        cell: `${cell}px`,
        cellI: `${cellI}px`,

        cellL0: `${cellL0}px`,
        cellL1: `${cellL1}px`,
        cellL2: `${cellL2}px`,
        cellL3: `${cellL3}px`,
        cellL4: `${cellL4}px`,
        cellL5: `${cellL5}px`,
        cellL6: `${cellL6}px`,

        cellS0: `${cellS0}px`,
        cellS1: `${cellS1}px`,
        cellS2: `${cellS2}px`,
        cellS3: `${cellS3}px`,
        cellS4: `${cellS4}px`,
        cellS5: `${cellS5}px`,
        cellS6: `${cellS6}px`,

        cellIL0: `${cellIL0}px`,
        cellIL1: `${cellIL1}px`,
        cellIL2: `${cellIL2}px`,
        cellIL3: `${cellIL3}px`,
        cellIL4: `${cellIL4}px`,
        cellIL5: `${cellIL5}px`,
        cellIL6: `${cellIL6}px`,

        cellIS0: `${cellIS0}px`,
        cellIS1: `${cellIS1}px`,
        cellIS2: `${cellIS2}px`,
        cellIS3: `${cellIS3}px`,
        cellIS4: `${cellIS4}px`,
        cellIS5: `${cellIS5}px`,
        cellIS6: `${cellIS6}px`,
        // endregion Cell sizes

        // region Media functions
        print: createMediaHelper(isPrint),
        screen: createMediaHelper(isScreen),

        touch: createMediaHelper(isTouch),
        mouse: createMediaHelper(isMouse),

        size: Object.keys(media).reduce((r, size) => ({ ...r, [size]: createMediaHelper(sizes[size]) }), {}),
        // endregion Media functions

        font: {
            family: `
                'Roboto', 'Noto Sans',
                'Noto Sans CJK JP', 'Noto Sans CJK', 'Noto Sans JP',
                'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN',
                '游ゴシック', '游ゴシック体', 'YuGothic', 'Yu Gothic',
                sans-serif`,
            weight: '300',

            height: `${cell}px`,
            size: `${fontSize}px`,

            heightL0: `${cellL0}px`,
            heightL1: `${cellL1}px`,
            heightL2: `${cellL2}px`,

            sizeL0: `${fontSizeL0}px`,
            sizeL1: `${fontSizeL1}px`,
            sizeL2: `${fontSizeL2}px`,
        },

        // region Headers
        // TODO: Remove right padding.
        H1: {
            font: {
                size: `${fontSize * 2}px`,
                height: `${cell * 2}px`,
                weight: '100',
            },
            padding: `0 ${cellS2}px`,
        },

        H2: {
            font: {
                size: `${fontSize * 1.5}px`,
                height: `${cell * 1.5}px`,
                weight: '100',
            },
            padding: `0 ${cellS2}px`,
        },

        H3: {
            font: {
                size: `${fontSize * 1.25}px`,
                height: `${cell * 1.25}px`,
                weight: '100',
            },
            padding: `0 ${cellS2}px`,
        },

        H4: {
            font: {
                size: `${fontSize * 1.25}px`,
                height: `${cell * 1.25}px`,
                weight: '400',
            },
            padding: `0 ${cellS2}px`,
        },

        H5: {
            font: {
                size: `${fontSize * 1.25}px`,
                height: `${cell * 1.25}px`,
                weight: '700',
            },
            padding: `0 ${cellS2}px`,
        },

        H6: {
            font: {
                size: `${fontSize}px`,
                height: `${cell}px`,
                weight: '900',
            },
            padding: `0 ${cellS2}px`,
        },
        // endregion Headers

        Button: `${isTouch ? cellS3 : cellS5}px ${cellIS2}px`,
        Checkbox: `${isTouch ? cellS3 : 0}px ${cellIS3}px`,
    };
});

export const createTheme: ThemeParams => ThemeType = params => {
    const { isTouch, isPrint, isKeyboard, theme, sizes } = params;

    return {
        theme,

        ...(colors_(isKeyboard, isPrint, theme): HACK),
        ...(sizes_(isTouch, isPrint, sizes): HACK),
    };
};
