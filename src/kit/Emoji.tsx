import * as React from 'react';

import { cn } from '../fn/cn';

import './Emoji.css';

export interface EmojiProps extends React.HTMLProps<HTMLImageElement> {
    code: string;
}

export const Emoji = ({ code, className, ...rest }: EmojiProps) => (
    <img aria-label={`Emoji`} draggable={false} src={`https://twemoji.maxcdn.com/2/72x72/${code}.png`} {...cn('Emoji', className)} {...rest as any} />
);
