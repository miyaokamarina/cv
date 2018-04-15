const { writeFileSync } = require('fs');

const icons = require('./fa');

const camelCase = x => x.replace(/(?:^|-)(.)/g, (_, y) => y.toUpperCase()).replace(/^(?=\d)/, '$');

const keys = Object.keys(icons);

const brands = keys.filter(x => icons[x].styles.includes('brands')).map(x => [camelCase(x), icons[x].unicode]);
const fa = keys.filter(x => !icons[x].styles.includes('brands')).map(x => [camelCase(x), icons[x].unicode]);

// TODO: ARIA attributes.

const mkIcon = (font, [name, code]) => `// @flow

import * as React from 'react';
import { css } from 'emotion';

import { styles } from '~/asset/fa/${font}';

export const ${name} = ({ className, ${font === 'brands' ? '' : 'solid, regular, '}...rest }: { className?: ?string, ${
    font === 'brands' ? '' : 'solid?: ?boolean, regular?: ?boolean, '
}[TODO]: TODO }) => (
    <span
        aria-hidden={'true'}
        {...rest}
        css={css\`
            \${styles};
${font === 'brands' ? '' : `\n            font-weight: \${solid ? '900' : regular ? '400' : '300'};\n`}
            &:before {
                content: '\\${code}';
            }

            \${className};
        \`}
    />
);
`;

brands.forEach(x => writeFileSync(`src/icon/${x[0]}.js`, mkIcon('brands', x)));
fa.forEach(x => writeFileSync(`src/icon/${x[0]}.js`, mkIcon('fa', x)));
