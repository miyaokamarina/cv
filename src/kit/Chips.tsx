import * as React from 'react';

import { cn } from '../fn/cn';

import { WithLevel } from './Level';

import './Chips.css';

interface ChipsType extends React.StatelessComponent<ChipsProps> {
    Item: React.StatelessComponent<ChipsItemProps>;
}

export type ChipsProps = React.HTMLProps<HTMLUListElement>;
export type ChipsItemProps = React.HTMLProps<HTMLLIElement> & WithLevel;

export const Chips: ChipsType = (({ children, className, ...rest }: ChipsProps) => (
    <ul {...cn('Chips', className)} {...rest}>
        {children}
    </ul>
)) as any;

Chips.Item = ({ children, className, level = 'primary', ...rest }: ChipsItemProps) => (
    <li {...cn('static', 'Chips__Item', level, className)} {...rest}>
        {children}
    </li>
);

Chips.Item.displayName = 'Chips.Item';
