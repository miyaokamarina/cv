// @flow

import * as React from 'react';
import { css } from 'emotion';

import { styles } from '~/asset/fa/brands';

export const Instagram = ({ className, ...rest }: { className?: ?string, [TODO]: TODO }) => (
    <span
        aria-hidden={'true'}
        {...rest}
        css={css`
            ${styles};

            &:before {
                content: '\f16d';
            }

            ${className};
        `}
    />
);
