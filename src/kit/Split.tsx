import * as React from 'react';

import { cn } from '../fn/cn';

import './Split.css';

export interface SplitType extends React.StatelessComponent<SplitProps> {
    Item: React.StatelessComponent<SplitItemProps>;
}

export type SplitProps = React.HTMLProps<HTMLDivElement>;
export type SplitItemProps = React.HTMLProps<HTMLDivElement>;

export const Split = (({ children, className, ...rest }: SplitProps) => (
    <div {...cn('Split', className)} {...rest}>
        {children}
    </div>
)) as any;

Split.Item = ({ children, className, ...rest }: SplitItemProps) => (
    <div {...cn('Split__Item', className)} {...rest}>
        {children}
    </div>
);

Split.Item.displayName = 'Split.Item';
