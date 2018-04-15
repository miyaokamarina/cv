// @flow

import * as React from 'react';
import { css } from 'emotion';

import { withTracking } from '~/hoc/withTracking';
import { Theme } from '~/kit/Theme';
import { Square } from '~/icon/Square';
import { CheckSquare } from '~/icon/CheckSquare';
import { tracking } from '~/fun/tracking';

import type { Level } from '~/fun/createTheme';

export type Props = {
    children: React.Node,
    level?: Level,
    checked?: boolean,
    className?: ?string,
    [TODO]: TODO,
};

export const Checkbox: React.ComponentType<Props> = withTracking(({ children, className, checked = false, level = 'primary', ...rest }: Props) => (
    <Theme>
        {__ => (
            <label
                role={'checkbox'}
                aria-checked={checked.toString()}
                tabIndex={0}
                css={css`
                    ${tracking(__.color.plain.glow[level], __)};

                    display: inline-block;

                    padding: ${__.Checkbox};

                    border-radius: ${__.cellS4};

                    background-color: transparent;
                    color: ${__.color.plain.foreground[level]};

                    &:focus {
                        outline: none;
                        box-shadow: ${__.color.plain.focus[level]};
                        z-index: 1;
                    }

                    ${className};
                `}
                {...rest}
            >
                {checked ? (
                    <CheckSquare
                        css={css`
                            margin-right: ${__.cellS4};
                        `}
                    />
                ) : (
                    <Square
                        css={css`
                            margin-right: ${__.cellS4};
                        `}
                    />
                )}
                {children}
            </label>
        )}
    </Theme>
));
