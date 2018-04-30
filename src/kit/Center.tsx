import * as React from 'react';
import { pure } from 'recompose';

import { cn } from '../fn/cn';
import { name } from '../hoc/name';

import './Center.css';

export type Props = React.HTMLProps<HTMLDivElement>;

export const Center = pure(
    name('Center')(({ children, className, ...rest }: Props) => (
        <div {...cn('Center', className)} {...rest}>
            <div {...cn('Center__Inner')}>{children}</div>
        </div>
    )),
);
