// @flow

import { injectGlobal } from 'emotion';

import eot from './fa.eot';
import svg from './fa.svg';
import ttf from './fa.ttf';
import woff from './fa.woff';
import woff2 from './fa.woff2';

// eslint-disable-next-line flowtype/no-unused-expressions
injectGlobal`
    @font-face {
        font-family: 'Font Awesome 5 Pro';
        font-style: normal;
        font-weight: 300;

        src: url('${eot}');
        src:
            url('${eot}?#iefix') format('embedded-opentype'),
            url('${woff2}') format('woff2'),
            url('${woff}') format('woff'),
            url('${ttf}') format('truetype'),
            url('${svg}#fontawesome') format('svg');
    }
`;
