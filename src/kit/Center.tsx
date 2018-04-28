import * as React from 'react';

import { cn } from '../fn/cn';

import './Center.css';

export type Props = React.HTMLProps<HTMLDivElement>;

export const Center = ({ children, className, ...rest }: Props) => (
    <div {...cn('Center', className)} {...rest}>
        <div {...cn('Center__Inner')}>{children}</div>
    </div>
);
