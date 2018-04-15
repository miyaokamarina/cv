// @flow

import * as React from 'react';
import { css } from 'emotion';

import { styles } from '~/asset/fa/brands';

export const Untappd = ({ className, ...rest }: { className?: ?string, [TODO]: TODO }) => (
    <span
        aria-hidden={'true'}
        {...rest}
        css={css`
            ${styles};

            &:before {
                content: '\f405';
            }

            ${className};
        `}
    />
);
