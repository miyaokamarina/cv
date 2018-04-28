import * as React from 'react';

import { cn } from '../fn/cn';

import './Icon.css';

export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
    code: string;
}

export const Icon = ({ code, className, ...rest }: IconProps) => (
    <span aria-label={`Icon`} aria-hidden {...cn('Icon', className)} {...rest}>
        {code}
    </span>
);
