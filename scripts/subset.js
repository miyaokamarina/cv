/*
eslint
no-magic-numbers: off,
no-await-in-loop: off,
*/

const { writeFileSync, readFileSync } = require('fs');
const cjk = require('cjk-regex')().toRegExp();
const Fontmin = require('fontmin');
const ttf2woff2 = require('ttf2woff2');
const rimraf = require('rimraf');

const chars = Object.entries(require('./chars'));

const isMain = char => !cjk.test(char);
const isJap = char => cjk.test(char);
const to = f => ([weight, chars]) => [weight, [...chars].filter(f).join('')];
const nonEmpty = ([, chars]) => chars !== '';
const toCode = char => char.codePointAt(0);
const compare = (a, b) => a - b;
const toCodes = ([weight, chars]) => [weight, [...chars].map(toCode).sort(compare)];
const addRange = ([weight, chars]) => [weight, chars, chars[0], chars[chars.length - 1]];
const fromCode = char => String.fromCodePoint(char);
const fromCodes = ([weight, chars, ...range]) => [weight, chars.map(fromCode).join(''), ...range.map(toHex)];

const toHex = char =>
    Number(char)
        .toString(16)
        .toUpperCase()
        .padStart(4, '0');

const preprocess = (font, f) =>
    font
        .map(to(f))
        .filter(nonEmpty)
        .map(toCodes)
        .map(addRange)
        .map(fromCodes);

const subset = (name, weight, chars) =>
    new Promise((resolve, reject) => {
        new Fontmin()
            .src(`scripts/noto/Noto${name}${weight}.ttf`)
            .dest('src/kit/')
            .use(
                Fontmin.glyph({
                    text: chars,
                }),
            )
            .use(
                Fontmin.ttf2woff({
                    deflate: true,
                }),
            )
            .run(error => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
    });

/* language=CSS */
const css = (name, weight, from, to) => String.raw`@font-face {
    font-family: main;
    font-weight: ${weight};
    src: url(./Noto${name}${weight}.woff2) format('woff2'), url(./Noto${name}${weight}.woff) format('woff'), url(./Noto${name}${weight}.ttf) format('truetype');
    unicode-range: U+${from}-${to};
}
`;

rimraf.sync('./src/kit/NotoJap*');
rimraf.sync('./src/kit/NotoMain*');

const process = async (font, name) => {
    console.log(`Processing font \`${name}\`...`);

    const fontFaces = [];

    for (const [weight, chars, from, to] of font) {
        console.log(`Processing weight \`${weight}\`...`);
        console.log('Characters:');
        console.log(chars);

        await subset(name, weight, chars);

        const ttf = readFileSync(`./src/kit/Noto${name}${weight}.ttf`);
        const woff2 = ttf2woff2(ttf);

        writeFileSync(`./src/kit/Noto${name}${weight}.woff2`, woff2);

        fontFaces.push(css(name, weight, from, to));
    }

    writeFileSync(`./src/kit/Noto${name}.css`, fontFaces.join('\n'));
};

const main = preprocess(chars, isMain);
const jap = preprocess(chars, isJap);

(async () => {
    await process(main, 'Main');
    await process(jap, 'Jap');
})();
