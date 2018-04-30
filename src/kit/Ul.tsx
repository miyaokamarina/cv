import * as React from 'react';
import { pure } from 'recompose';

import { cn } from '../fn/cn';
import { name } from '../hoc/name';

import './Ul.css';

interface UlType extends React.StatelessComponent<UlProps> {
    Item: React.ComponentType<UlItemProps>;
}

export type UlProps = React.HTMLProps<HTMLUListElement>;
export type UlItemProps = React.HTMLProps<HTMLLIElement>;

export const Ul: UlType = pure(
    name('Ul')(({ children, className, ...rest }: UlProps) => (
        <ul {...cn('Ul', className)} {...rest}>
            {children}
        </ul>
    )),
) as any;

Ul.Item = pure(
    name('Ul.Item')(({ children, className, ...rest }: UlItemProps) => (
        <li {...cn('Ul__Item', className)} {...rest}>
            {children}
        </li>
    )),
);
