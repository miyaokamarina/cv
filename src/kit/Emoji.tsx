import * as React from 'react';
import { pure } from 'recompose';

import { cn } from '../fn/cn';
import { name } from '../hoc/name';

import './Emoji.css';

export interface EmojiProps extends React.HTMLProps<HTMLImageElement> {
    code: string;
}

export const Emoji = pure(
    name('Emoji')(({ code, className, ...rest }: EmojiProps) => (
        <img aria-label={`Emoji`} draggable={false} src={`https://twemoji.maxcdn.com/2/72x72/${code}.png`} {...cn('Emoji', className)} {...rest as any} />
    )),
);
