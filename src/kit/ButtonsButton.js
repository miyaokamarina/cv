// @flow

import * as React from 'react';
import { css } from 'emotion';

import { withTracking } from '~/hoc/withTracking';
import { Theme } from '~/kit/Theme';
import { tracking } from '~/fun/tracking';

import type { Level } from '~/fun/createTheme';

export type Props = {
    children: React.Node,
    level?: Level,
    active?: boolean,
    className?: string,
    [TODO]: TODO,
};

export const ButtonsButton: React.ComponentType<Props> = withTracking(({ children, className, level = 'primary', active = false, ...rest }: Props) => (
    <Theme>
        {__ => (
            <span
                role={'button'}
                tabIndex={0}
                {...rest}
                css={css`
                    ${tracking(active ? __.color.alt.glow[level] : __.color.active.glow, __)};

                    display: inline-block;
                    text-align: center;

                    cursor: default;

                    padding: ${__.Button};
                    background-color: ${active ? __.color.alt.background : __.color.active.background[level]};
                    color: ${active ? __.color.alt.foreground[level] : __.color.active.foreground};
                    box-shadow: ${active ? __.color.alt.border[level] : '0 0 0 transparent'};

                    &:focus {
                        outline: none;
                        z-index: 1;
                    }

                    &:first-child {
                        border-top-left-radius: ${__.cellS4};
                        border-bottom-left-radius: ${__.cellS4};
                    }

                    &:last-child {
                        border-top-right-radius: ${__.cellS4};
                        border-bottom-right-radius: ${__.cellS4};
                    }

                    &:first-child {
                        border-top-left-radius: ${__.cellS4};
                        border-bottom-left-radius: ${__.cellS4};
                    }

                    &:last-child {
                        border-top-right-radius: ${__.cellS4};
                        border-bottom-right-radius: ${__.cellS4};
                    }

                    ${__.keyboard(css`
                        &:focus {
                            border-radius: ${__.cellS4};

                            box-shadow: ${__.color.active.focus[level]};
                        }
                    `)};

                    ${__.mouse(css``)};

                    ${className};
                `}
            >
                {children}
            </span>
        )}
    </Theme>
));
