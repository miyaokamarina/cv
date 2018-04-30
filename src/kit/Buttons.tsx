import * as React from 'react';
import { pure } from 'recompose';

import { cn } from '../fn/cn';
import { withTracking } from '../hoc/withTracking';
import { name } from '../hoc/name';

import { WithLevel } from './Level';

import './Buttons.css';

export interface ButtonsType extends React.StatelessComponent<ButtonsProps> {
    Item: React.ComponentType<ButtonsItemProps>;
}

export interface ButtonsProps extends React.HTMLProps<HTMLDivElement>, WithLevel {}
export interface ButtonsItemProps extends React.HTMLProps<HTMLDivElement> {
    active?: boolean;
}

export const Buttons: ButtonsType = pure(
    name('Buttons')(({ children, className, level = 'primary', ...rest }: ButtonsProps) => (
        <div {...cn('Buttons', level, className)} {...rest}>
            {children}
        </div>
    )),
) as any;

Buttons.Item = withTracking(
    pure(
        name('Buttons.Item')(({ children, className, active = false, ...rest }: ButtonsItemProps) => (
            <span role={'button'} tabIndex={0} {...cn('Buttons__Item', active ? 'checked' : '', className)} {...rest}>
                {children}
            </span>
        )),
    ),
);
