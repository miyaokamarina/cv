const { writeFileSync } = require('fs');

const icons = require('./fa');

const keys = Object.keys(icons);

const fab = keys.filter(x => icons[x].styles.includes('brands')).map(x => [x, icons[x].unicode]);
const fa = keys.filter(x => !icons[x].styles.includes('brands')).map(x => [x, icons[x].unicode]);

// TODO: ARIA attributes.

/* language=PostCSS */
const mkCssClass = ([name, code]) => `:global(.fa):global(.${name})::before {
    content: '\\${code}';
}`;

//

/* language=PostCSS */
const css = `// Generated code

@font-face {
    font-family: 'Font Awesome 5 Pro';
    font-style: normal;
    font-weight: 300;

    src: url('../assets/fa/light/fa.eot');
    src:
        url('../assets/fa/light/fa.eot?#iefix') format('embedded-opentype'),
        url('../assets/fa/light/fa.woff2') format('woff2'),
        url('../assets/fa/light/fa.woff') format('woff'),
        url('../assets/fa/light/fa.ttf') format('truetype'),
        url('../assets/fa/light/fa.svg#fontawesome') format('svg');
}

@font-face {
    font-family: 'Font Awesome 5 Pro';
    font-style: normal;
    font-weight: 400;

    src: url('../assets/fa/regular/fa.eot');
    src:
        url('../assets/fa/regular/fa.eot?#iefix') format('embedded-opentype'),
        url('../assets/fa/regular/fa.woff2') format('woff2'),
        url('../assets/fa/regular/fa.woff') format('woff'),
        url('../assets/fa/regular/fa.ttf') format('truetype'),
        url('../assets/fa/regular/fa.svg#fontawesome') format('svg');
}

@font-face {
    font-family: 'Font Awesome 5 Pro';
    font-style: normal;
    font-weight: 900;

    src: url('../assets/fa/solid/fa.eot');
    src:
        url('../assets/fa/solid/fa.eot?#iefix') format('embedded-opentype'),
        url('../assets/fa/solid/fa.woff2') format('woff2'),
        url('../assets/fa/solid/fa.woff') format('woff'),
        url('../assets/fa/solid/fa.ttf') format('truetype'),
        url('../assets/fa/solid/fa.svg#fontawesome') format('svg');
}

@font-face {
    font-family: 'Font Awesome 5 Brands';
    font-style: normal;
    font-weight: 300;

    src: url('../assets/fa/brands/fa.eot');
    src:
        url('../assets/fa/brands/fa.eot?#iefix') format('embedded-opentype'),
        url('../assets/fa/brands/fa.woff2') format('woff2'),
        url('../assets/fa/brands/fa.woff') format('woff'),
        url('../assets/fa/brands/fa.ttf') format('truetype'),
        url('../assets/fa/brands/fa.svg#fontawesome') format('svg');
}

@font-face {
    font-family: 'Font Awesome 5 Brands';
    font-style: normal;
    font-weight: 400;

    src: url('../assets/fa/brands/fa.eot');
    src:
        url('../assets/fa/brands/fa.eot?#iefix') format('embedded-opentype'),
        url('../assets/fa/brands/fa.woff2') format('woff2'),
        url('../assets/fa/brands/fa.woff') format('woff'),
        url('../assets/fa/brands/fa.ttf') format('truetype'),
        url('../assets/fa/brands/fa.svg#fontawesome') format('svg');
}

@font-face {
    font-family: 'Font Awesome 5 Brands';
    font-style: normal;
    font-weight: 900;

    src: url('../assets/fa/brands/fa.eot');
    src:
        url('../assets/fa/brands/fa.eot?#iefix') format('embedded-opentype'),
        url('../assets/fa/brands/fa.woff2') format('woff2'),
        url('../assets/fa/brands/fa.woff') format('woff'),
        url('../assets/fa/brands/fa.ttf') format('truetype'),
        url('../assets/fa/brands/fa.svg#fontawesome') format('svg');
}

:global(.fa) {
    width: 1.25em;
    display: inline-block;
    font-family: 'Font Awesome 5 Pro', 'Font Awesome 5 Brands', sans-serif;
    font-weight: 300;

    text-align: center;
}

:global(.far) {
    font-weight: 400;
}

:global(.fas) {
    font-weight: 900;
}

${[...fa, ...fab].map(mkCssClass).join('\n\n')}
`;

//

/* language=JavaScript */
const mkType = ([name]) => `'${name}'`;

/* language=TypeScript */
const ts = `// Generated code

import * as React from 'react';

import { cn } from '../fn/cn';

import { fa, fas, far } from './Icon.css';

export type IconType =
    | ${[...fa, ...fab].map(mkType).join('\n    | ')};

export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
    icon: IconType;
    regular?: true;
    solid?: true;
}

export const Icon = ({ icon, regular, solid, className, ...rest }: IconProps) => (
    <span
        {...rest}
        {...cn(className, 'fa', solid ? 'fas' : regular ? 'far' : '', icon)}
    />
);
`;

writeFileSync('src/kit/Icon.css', css);
writeFileSync('src/kit/Icon.tsx', ts);

// brands.forEach(x => writeFileSync(`src/icon/${x[0]}.ts`, mkIcon('brands', x)));
// fa.forEach(x => writeFileSync(`src/icon/${x[0]}.ts`, mkIcon('fa', x)));
