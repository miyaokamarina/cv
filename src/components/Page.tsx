import * as React from 'react';
import { pure } from 'recompose';

import { cn } from '../fn/cn';
import { name } from '../hoc/name';

import './Page.css';

export const Page = pure(
    name('Page')(({ children }: { children?: React.ReactNode }) => (
        <div {...cn('Page')}>
            <article {...cn('Page__Article')}>{children}</article>
        </div>
    )),
);
