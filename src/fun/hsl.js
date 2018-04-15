// @flow

import { hsluvToHex } from 'hsluv';

export const hsl: (number, number, number, ?number) => string = (h, s, l, a) =>
    `${hsluvToHex([h, s, l])}${typeof a === 'number' ? ((a / 100 * 255) & 0xff).toString(16).padStart(2, '0') : ''}`; // eslint-disable-line no-magic-numbers
