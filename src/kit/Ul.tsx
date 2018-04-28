import * as React from 'react';

import { cn } from '../fn/cn';

import './Ul.css';

interface UlType extends React.StatelessComponent<UlProps> {
    Item: React.StatelessComponent<UlItemProps>;
}

export type UlProps = React.HTMLProps<HTMLUListElement>;
export type UlItemProps = React.HTMLProps<HTMLLIElement>;

export const Ul: UlType = (({ children, className, ...rest }: UlProps) => (
    <ul {...cn('Ul', className)} {...rest}>
        {children}
    </ul>
)) as any;

Ul.Item = ({ children, className, ...rest }: UlItemProps) => (
    <li {...cn('Ul__Item', className)} {...rest}>
        {children}
    </li>
);

Ul.Item.displayName = 'Ul.Item';
