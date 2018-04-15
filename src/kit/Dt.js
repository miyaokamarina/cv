// @flow

import * as React from 'react';

export type Props = {
    children?: React.Node,
    className?: ?string,
    [TODO]: TODO,
};

export const Dt = ({ children, ...rest }: Props) => <dt {...rest}>{children}</dt>;
