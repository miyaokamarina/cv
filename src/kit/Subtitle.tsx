import * as React from 'react';
import { pure } from 'recompose';

import { cn } from '../fn/cn';
import { name } from '../hoc/name';

import './Subtitle.css';

export interface SubtitleProps extends React.HTMLProps<HTMLDivElement> {}

export const Subtitle = pure(
    name('Subtitle')(({ children, className, ...rest }: SubtitleProps) => (
        <div {...rest} {...cn('Subtitle', className)}>
            {children}
        </div>
    )),
);
