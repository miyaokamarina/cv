import * as React from 'react';
import { pure } from 'recompose';

import { cn } from '../fn/cn';
import { name } from '../hoc/name';

import './Section.css';

export type SectionProps = React.HTMLProps<HTMLElement>;

export const Section = pure(
    name('Section')(({ children, className, ...rest }: SectionProps) => (
        <section {...cn('Section', className)} {...rest}>
            {children}
        </section>
    )),
);
