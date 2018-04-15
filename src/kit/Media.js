// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import { media } from '~/data/config';

import type { Size } from '~/data/config';

export type Props = {
    size: Size,
    children?: React.Node,
};

export type Component = {
    (Props): React.Element<React.ComponentType<Props>> | *,
    [Size]: React.ComponentType<{ children?: React.Node }>,
};

export const Media: Component = (connect(({ sizes }) => ({ sizes }))(({ size, sizes, children }) => (sizes[size] ? children : null)): HACK);

Object.keys(media).forEach(size => {
    Media[size] = (connect(({ sizes }) => ({ sizes }))(({ sizes, children }) => (sizes[size] ? children : null)): HACK);
});
