// @flow

import * as React from 'react';
import { css } from 'emotion';

export type Props = {
    children?: React.Node,
    className?: ?string,
    [TODO]: TODO,
};

export const Chips = ({ children, className, ...rest }: Props) => (
    <ul
        {...rest}
        css={css`
            display: flex;
            flex-wrap: wrap;

            ${className};
        `}
    >
        {children}
    </ul>
);
