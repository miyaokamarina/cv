// @flow

import * as React from 'react';
import { css } from 'emotion';

export type Props = {
    children: React.Node,
    className?: ?string,
    [TODO]: TODO,
};

export const PropertiesProperty = ({ children, className, ...rest }: Props) => (
    <div
        {...rest}
        css={css`
            display: table-row;

            ${className};
        `}
    >
        {children}
    </div>
);
