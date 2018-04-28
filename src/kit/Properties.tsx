import * as React from 'react';

import { cn } from '../fn/cn';

import './Properties.css';

export interface PropertiesType extends React.StatelessComponent<PropertiesProps> {
    Item: React.StatelessComponent<PropertiesItemProps>;
    K: React.StatelessComponent<PropertiesKProps>;
    V: React.StatelessComponent<PropertiesVProps>;
}

export interface PropertiesProps extends React.HTMLProps<HTMLDListElement> {}
export interface PropertiesItemProps extends React.HTMLProps<HTMLDivElement> {}
export interface PropertiesKProps extends React.HTMLProps<HTMLElement> {}
export interface PropertiesVProps extends React.HTMLProps<HTMLElement> {}

export const Properties: PropertiesType = (({ children, className, ...rest }: PropertiesProps) => (
    <dl {...cn('Properties', className)} {...rest}>
        {children}
    </dl>
)) as any;

Properties.Item = ({ children, className, ...rest }: PropertiesItemProps) => (
    <div {...cn('Properties__Item', className)} {...rest}>
        {children}
    </div>
);

Properties.Item.displayName = 'Properties.Item';

Properties.K = ({ children, className, ...rest }: PropertiesKProps) => (
    <dt {...cn('Properties__K', className)} {...rest}>
        {children}
    </dt>
);

Properties.K.displayName = 'Properties.K';

Properties.V = ({ children, className, ...rest }: PropertiesVProps) => (
    <dd {...cn('Properties__V', className)} {...rest}>
        {children}
    </dd>
);

Properties.V.displayName = 'Properties.V';
