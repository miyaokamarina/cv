import * as React from 'react';
import { pure } from 'recompose';

import { cn } from '../fn/cn';
import { name } from '../hoc/name';

import { WithLevel } from './Level';

import './Chips.css';

interface ChipsType extends React.StatelessComponent<ChipsProps> {
    Item: React.ComponentType<ChipsItemProps>;
}

export type ChipsProps = React.HTMLProps<HTMLUListElement>;
export type ChipsItemProps = React.HTMLProps<HTMLLIElement> & WithLevel;

export const Chips: ChipsType = pure(
    name('Chips')(({ children, className, ...rest }: ChipsProps) => (
        <ul {...cn('Chips', className)} {...rest}>
            {children}
        </ul>
    )),
) as any;

Chips.Item = pure(
    name('Chips.Item')(({ children, className, level = 'primary', ...rest }: ChipsItemProps) => (
        <li {...cn('static', 'Chips__Item', level, className)} {...rest}>
            {children}
        </li>
    )),
);
