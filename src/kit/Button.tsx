import * as React from 'react';
import { pure } from 'recompose';

import { withTracking } from '../hoc/withTracking';
import { WithLevel } from './Level';
import { cn } from '../fn/cn';
import { name } from '../hoc/name';

import './Button.css';

export interface ButtonProps extends React.HTMLProps<HTMLAnchorElement>, WithLevel {}

export const Button = withTracking(
    pure(
        name('Button')(({ children, className, level = 'primary', ...rest }: ButtonProps) => (
            <a tabIndex={0} role={'button'} {...cn('Button', level, className)} {...rest}>
                {children}
            </a>
        )),
    ),
);
