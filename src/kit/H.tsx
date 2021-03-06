import * as React from 'react';
import { pure } from 'recompose';

import { cn } from '../fn/cn';
import { name } from '../hoc/name';

import './H.css';

export type HProps = React.HTMLProps<HTMLHeadingElement> & {
    level: 1 | 2 | 3 | 4 | 5 | 6;
};

export const H = pure(
    name('H')(({ children, className, level, ...rest }: HProps) =>
        React.createElement(
            `h${level}`,
            {
                ...cn('H', `H_level_${level}`, className),
                ...rest,
            },
            children,
        ),
    ),
);
