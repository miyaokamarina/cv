// @flow

import * as React from 'react';
import { css } from 'emotion';

type WithCss = {
    node: React.Node,
    css: string,
};

export type Props = {
    left?: React.Node | WithCss,
    right?: React.Node | WithCss,
    className?: ?string,
    [TODO]: TODO,
};

const isWithCss = x => !React.isValidElement(x);

export const Split = ({ left, right, className, ...rest }: Props) => (
    <div
        {...rest}
        css={css`
            display: flex;

            ${className};
        `}
    >
        <div
            css={css`
                ${isWithCss(left) ? (left: HACK).css : null};
            `}
        >
            {isWithCss(left) ? (left: HACK).node : (left: HACK)}
        </div>
        <div
            css={css`
                ${isWithCss(right) ? (right: HACK).css : null};
            `}
        >
            {isWithCss(right) ? (right: HACK).node : (right: HACK)}
        </div>
    </div>
);
