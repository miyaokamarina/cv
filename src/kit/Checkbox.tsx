import * as React from 'react';

import { withTracking } from '../hoc/withTracking';
import { WithLevel } from './Level';
import { cn } from '../fn/cn';
import { Icon } from './Icon';

import './Checkbox.css';

export interface CheckboxProps extends React.HTMLProps<HTMLLabelElement>, WithLevel {
    checked?: boolean;
}

export const Checkbox: React.ComponentType<CheckboxProps> = withTracking(
    ({ children, className, checked = false, level = 'primary', ...rest }: CheckboxProps) => (
        <label role={'checkbox'} aria-checked={checked} tabIndex={0} {...cn('Checkbox', level, className)} {...rest}>
            <Icon code={checked ? '\uF14A' : '\uF04D'} />
            {children}
        </label>
    ),
);
