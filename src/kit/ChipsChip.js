// @flow

import * as React from 'react';
import { css } from 'emotion';

import { Theme } from '~/kit/Theme';

import type { Level } from '~/fun/createTheme';

export type Props = {
    children?: React.Node,
    level?: Level,
    className?: ?string,
    [TODO]: TODO,
};

export const ChipsChip = ({ children, className, level = 'primary', ...rest }: Props) => (
    <Theme>
        {__ => (
            <li
                {...rest}
                css={css`
                    display: inline;

                    padding: 0 ${__.cellS2};
                    margin: ${__.cellS5};

                    background-color: ${__.color.static.background[level]};
                    color: ${__.color.static.foreground[level]};
                    box-shadow: ${__.color.static.border[level]};
                    border-radius: ${__.cellS2};

                    ${className};
                `}
            >
                {children}
            </li>
        )}
    </Theme>
);
