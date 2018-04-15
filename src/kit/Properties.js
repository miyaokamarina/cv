// @flow

import * as React from 'react';
import { css } from 'emotion';

import { PropertiesProperty } from '~/kit/PropertiesProperty';

export type Props = {
    children?: React.ChildrenArray<React.Element<React.Fragment | typeof PropertiesProperty>>,
    className?: ?string,
    [TODO]: TODO,
};

export const Properties = ({ children, className, ...rest }: Props) => (
    <dl
        {...rest}
        css={css`
            display: table;

            ${className};
        `}
    >
        {children}
    </dl>
);
