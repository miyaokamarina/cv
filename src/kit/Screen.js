// @flow

import * as React from 'react';
import { connect } from 'react-redux';

export const Screen: React.ComponentType<{ children: React.Node }> = connect(({ isPrint }) => ({ isPrint }))(
    ({ children, isPrint }) => (!isPrint ? children : null),
);