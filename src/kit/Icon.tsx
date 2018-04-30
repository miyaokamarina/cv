import * as React from 'react';
import { pure } from 'recompose';

import { cn } from '../fn/cn';
import { name } from '../hoc/name';

import './Icon.css';

export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
    code: string;
}

export const Icon = pure(
    name('Icon')(({ code, className, ...rest }: IconProps) => (
        <span aria-label={`Icon`} aria-hidden {...cn('Icon', className)} {...rest}>
            {code}
        </span>
    )),
);
