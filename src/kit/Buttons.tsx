import * as React from 'react';

import { cn } from '../fn/cn';
import { withTracking } from '../hoc/withTracking';

import { WithLevel } from './Level';

import './Buttons.css';

export interface ButtonsType extends React.StatelessComponent<ButtonsProps> {
    Item: React.StatelessComponent<ButtonsItemProps>;
}

export interface ButtonsProps extends React.HTMLProps<HTMLDivElement>, WithLevel {}
export interface ButtonsItemProps extends React.HTMLProps<HTMLDivElement> {
    active?: boolean;
}

export const Buttons: ButtonsType = (({ children, className, level = 'primary', ...rest }: ButtonsProps) => (
    <div {...cn('Buttons', level, className)} {...rest}>
        {children}
    </div>
)) as any;

Buttons.Item = withTracking(({ children, className, active = false, ...rest }: ButtonsItemProps) => (
    <span role={'button'} tabIndex={0} {...cn('Buttons__Item', active ? 'checked' : '', className)} {...rest}>
        {children}
    </span>
));
