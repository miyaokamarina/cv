import * as React from 'react';

import { cn } from '../fn/cn';

import './Subtitle.css';

export interface SubtitleProps extends React.HTMLProps<HTMLDivElement> {}

export const Subtitle = ({ children, className, ...rest }: SubtitleProps) => (
    <div {...rest} {...cn('Subtitle', className)}>
        {children}
    </div>
);
