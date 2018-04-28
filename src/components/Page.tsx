import * as React from 'react';

import { cn } from '../fn/cn';

import './Page.css';

export const Page = ({ children }: { children?: React.ReactNode }) => (
    <div {...cn('Page')}>
        <article {...cn('Page__Article')}>{children}</article>
    </div>
);
