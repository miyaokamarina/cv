import * as React from 'react';
import { pure } from 'recompose';

import { withTracking } from '../hoc/withTracking';
import { cn } from '../fn/cn';
import { name } from '../hoc/name';

import { WithLevel } from './Level';

import './Fab.css';

export interface FabProps extends React.HTMLProps<HTMLDivElement>, WithLevel {}

export const Fab = withTracking(
    pure(
        name('Fab')(({ children, className, level = 'primary', ...rest }: FabProps) => (
            <div role={'button'} tabIndex={0} {...cn('Fab', level, className)} {...rest}>
                {children}
            </div>
        )),
    ),
);
