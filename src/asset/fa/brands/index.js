// @flow

import { css, injectGlobal } from 'styled-components';

import eot from './fa.eot';
import svg from './fa.svg';
import ttf from './fa.ttf';
import woff from './fa.woff';
import woff2 from './fa.woff2';

// eslint-disable-next-line flowtype/no-unused-expressions
injectGlobal`
    @font-face {
        font-family: 'Font Awesome 5 Brands';
        font-style: normal;
        font-weight: normal;

        src: url('${eot}');
        src:
            url('${eot}?#iefix') format('embedded-opentype'),
            url('${woff2}') format('woff2'),
            url('${woff}') format('woff'),
            url('${ttf}') format('truetype'),
            url('${svg}#fontawesome') format('svg');
    }
`;

export const styles = css`
    width: 1.25em;

    display: inline-block;

    font-family: 'Font Awesome 5 Brands', sans-serif;

    text-align: center;
`;
