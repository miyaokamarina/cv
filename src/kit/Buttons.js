// @flow

import * as React from 'react';
import { css } from 'emotion';

import { Theme } from '~/kit/Theme';

import type { Level } from '~/fun/createTheme';

export type Props = {
    children: React.Node,
    level?: Level,
    className?: ?string,
    [TODO]: TODO,
};

export const Buttons = ({ children, className, level = 'primary', ...rest }: Props) => (
    <Theme>
        {__ => (
            <div
                {...rest}
                css={css`
                    display: flex;
                    flex-direction: row;

                    background-color: ${__.color.active.background[level]};
                    border-radius: ${__.cellS4};

                    & > * {
                        flex-grow: 1;
                    }

                    ${className};
                `}
            >
                {children}
            </div>
        )}
    </Theme>
);
