import * as React from 'react';
import { pure } from 'recompose';

import { withTracking } from '../hoc/withTracking';
import { WithLevel } from './Level';
import { cn } from '../fn/cn';
import { Icon } from './Icon';
import { name } from '../hoc/name';

import './Checkbox.css';

export interface CheckboxProps extends React.HTMLProps<HTMLLabelElement>, WithLevel {
    checked?: boolean;
}

export const Checkbox: React.ComponentType<CheckboxProps> = withTracking(
    pure(
        name('Checkbox')(({ children, className, checked = false, level = 'primary', ...rest }: CheckboxProps) => (
            <label role={'checkbox'} aria-checked={checked} tabIndex={0} {...cn('Checkbox', level, className)} {...rest}>
                <Icon code={checked ? '\uF14A' : '\uF04D'} />
                {children}
            </label>
        )),
    ),
);
