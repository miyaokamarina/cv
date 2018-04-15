// @flow

import * as React from 'react';
import { css } from 'emotion';

export type Props = {
    children?: React.Node,
    inner?: string,
    className?: ?string,
    [TODO]: TODO,
};

export const Center = ({ children, className, inner, ...rest }: Props) => (
    <div
        {...rest}
        css={css`
            display: flex;
            ${className};
        `}
    >
        <div
            css={css`
                margin: auto;
                ${inner};
            `}
        >
            {children}
        </div>
    </div>
);
