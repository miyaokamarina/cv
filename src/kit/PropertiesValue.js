// @flow

import * as React from 'react';
import { css } from 'emotion';

export type Props = {
    children?: React.Node,
    className?: ?string,
    [TODO]: TODO,
};

export const PropertiesValue = ({ children, className, ...rest }: Props) => (
    <dd
        {...rest}
        css={css`
            display: table-cell;

            ${className};
        `}
    >
        {children}
    </dd>
);
