// @flow

import * as React from 'react';
import { css } from 'emotion';

import { styles } from '~/asset/fa/fa';

export const Download = ({ className, solid, regular, ...rest }: { className?: ?string, solid?: ?boolean, regular?: ?boolean, [TODO]: TODO }) => (
    <span
        aria-hidden={'true'}
        {...rest}
        css={css`
            ${styles};

            font-weight: ${solid ? '900' : regular ? '400' : '300'};

            &:before {
                content: '\f019';
            }

            ${className};
        `}
    />
);
