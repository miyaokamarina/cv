import * as React from 'react';

import { cn } from '../fn/cn';

import './Section.css';

export type SectionProps = React.HTMLProps<HTMLElement>;

export const Section = ({ children, className, ...rest }: SectionProps) => (
    <section {...cn('Section', className)} {...rest}>
        {children}
    </section>
);
