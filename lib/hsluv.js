/*
eslint
no-magic-numbers: off,
*/

const Hsluv = require('hsluv');

const clamp = (f, c) => x => Math.max(f, Math.min(x, c));
const byte = x => Math.floor(x * 255 + 0.5);
const pad = x => x.padStart(2, '0');
const hex = x => pad(byte(x).toString(16));

const clamp360 = clamp(0, 360);
const clamp100 = clamp(0, 100);
const clamp1 = clamp(0, 1);

const mkConverter = (toRgb, color) => ({ value: h }, { value: s }, { value: l }, { value: a } = { value: 1 }) => {
    const rgbNum = toRgb([clamp360(h), clamp100(s), clamp100(l)]);
    const rgbHex = rgbNum.map(hex).join('');

    return color(rgbHex, clamp1(a));
};

module.exports = {
    install(less, pluginManager, functions) {
        functions.add('hsluv', mkConverter(Hsluv.hsluvToRgb, less.color));
        functions.add('hpluv', mkConverter(Hsluv.hpluvToRgb, less.color));
    },
};
