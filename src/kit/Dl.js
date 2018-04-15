// @flow

import * as React from 'react';

export type Props = {
    children?: React.Node,
    className?: ?string,
    [TODO]: TODO,
};

export const Dl = ({ children, ...rest }: Props) => <dl {...rest}>{children}</dl>;
