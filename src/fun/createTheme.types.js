// @flow

import type { Interpolation } from 'emotion';

import type { Sizes, Size } from '~/data/config';

export type ThemeName = 'light' | 'dark';

export type ThemeParams = {
    isPrint: boolean,
    isTouch: boolean,
    isKeyboard: boolean,
    theme: ThemeName,
    sizes: Sizes,
};

export type ThemeType = {|
    theme: ThemeName,

    cell: string,
    cellI: string,

    cellL0: string,
    cellL1: string,
    cellL2: string,
    cellL3: string,
    cellL4: string,
    cellL5: string,
    cellL6: string,

    cellS0: string,
    cellS1: string,
    cellS2: string,
    cellS3: string,
    cellS4: string,
    cellS5: string,
    cellS6: string,

    cellIL0: string,
    cellIL1: string,
    cellIL2: string,
    cellIL3: string,
    cellIL4: string,
    cellIL5: string,
    cellIL6: string,

    cellIS0: string,
    cellIS1: string,
    cellIS2: string,
    cellIS3: string,
    cellIS4: string,
    cellIS5: string,
    cellIS6: string,

    print: Interpolation => Interpolation,
    screen: Interpolation => Interpolation,

    touch: Interpolation => Interpolation,
    mouse: Interpolation => Interpolation,

    keyboard: Interpolation => Interpolation,
    pointer: Interpolation => Interpolation,

    size: {
        [Size]: (Interpolation) => Interpolation,
    },

    color: {|
        /**
         * E.g. buttons.
         */
        active: {|
            foreground: string,
            background: Levels,
            focus: Levels,
            glow: string,
            ripple: string,
        |},
        /**
         * E.g. inverted buttons.
         */
        alt: {|
            foreground: Levels,
            background: string,
            focus: Levels,
            border: Levels,
            glow: Levels,
            ripple: Levels,
        |},
        /**
         * E.g. text fields.
         */
        semiactive: {
            // TODO
            // foreground: Levels,
            // placeholder: Levels,
            // background: string,
            // focus: Levels,
            // border: Levels,
            // glow: string,
            // ripple: string,
        },
        /**
         * E.g. checkboxes or plain buttons.
         */
        plain: {
            foreground: Levels,
            background: string,
            focus: Levels,
            glow: Levels,
            ripple: Levels,
        },
        static: {|
            foreground: Levels,
            background: Levels,
            border: Levels,
        |},
        default: {|
            foreground: string,
            background: string,
        |},
        backdrop: string,
    |},

    font: {|
        family: string,
        weight: string,

        height: string,
        heightL0: string,
        heightL1: string,
        heightL2: string,

        size: string,
        sizeL0: string,
        sizeL1: string,
        sizeL2: string,
    |},

    H1: H,
    H2: H,
    H3: H,
    H4: H,
    H5: H,
    H6: H,

    Button: string,
    Checkbox: string,
|};

export type Level = 'primary' | 'secondary' | 'info' | 'ok' | 'warning' | 'error';

export type Levels = {|
    primary: string,
    secondary: string,
    info: string,
    ok: string,
    warning: string,
    error: string,
|};

type H = {|
    font: {|
        size: string,
        height: string,
        weight: string,
    |},
    padding: string,
|};
