import * as React from 'react';

import { withTracking } from '../hoc/withTracking';
import { WithLevel } from './Level';
import { cn } from '../fn/cn';

import './Button.css';

export interface ButtonProps extends React.HTMLProps<HTMLAnchorElement>, WithLevel {}

export const Button = withTracking(({ children, className, level = 'primary', ...rest }: ButtonProps) => (
    <a tabIndex={0} role={'button'} {...cn('Button', level, className)} {...rest}>
        {children}
    </a>
));
