import * as React from 'react';
import { pure } from 'recompose';

import { cn } from '../fn/cn';
import { name } from '../hoc/name';

import './Split.css';

export interface SplitType extends React.StatelessComponent<SplitProps> {
    Item: React.ComponentType<SplitItemProps>;
}

export type SplitProps = React.HTMLProps<HTMLDivElement>;
export type SplitItemProps = React.HTMLProps<HTMLDivElement>;

export const Split = pure(
    name('Split')(({ children, className, ...rest }: SplitProps) => (
        <div {...cn('Split', className)} {...rest}>
            {children}
        </div>
    )),
) as any;

Split.Item = pure(
    name('Split.Item')(({ children, className, ...rest }: SplitItemProps) => (
        <div {...cn('Split__Item', className)} {...rest}>
            {children}
        </div>
    )),
);
