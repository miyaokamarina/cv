import * as React from 'react';
import { pure } from 'recompose';

import { cn } from '../fn/cn';
import { name } from '../hoc/name';

import './Properties.css';

export interface PropertiesType extends React.StatelessComponent<PropertiesProps> {
    Item: React.ComponentType<PropertiesItemProps>;
    K: React.ComponentType<PropertiesKProps>;
    V: React.ComponentType<PropertiesVProps>;
}

export interface PropertiesProps extends React.HTMLProps<HTMLDListElement> {}
export interface PropertiesItemProps extends React.HTMLProps<HTMLDivElement> {}
export interface PropertiesKProps extends React.HTMLProps<HTMLElement> {}
export interface PropertiesVProps extends React.HTMLProps<HTMLElement> {}

export const Properties: PropertiesType = pure(
    name('Properties')(({ children, className, ...rest }: PropertiesProps) => (
        <dl {...cn('Properties', className)} {...rest}>
            {children}
        </dl>
    )),
) as any;

Properties.Item = pure(
    name('Properties.Item')(({ children, className, ...rest }: PropertiesItemProps) => (
        <div {...cn('Properties__Item', className)} {...rest}>
            {children}
        </div>
    )),
);

Properties.K = pure(
    name('Properties.K')(({ children, className, ...rest }: PropertiesKProps) => (
        <dt {...cn('Properties__K', className)} {...rest}>
            {children}
        </dt>
    )),
);

Properties.V = pure(
    name('Properties.V')(({ children, className, ...rest }: PropertiesVProps) => (
        <dd {...cn('Properties__V', className)} {...rest}>
            {children}
        </dd>
    )),
);
