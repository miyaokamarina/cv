// @flow

import * as React from 'react';
import { css } from 'emotion';

import { Theme } from '~/kit/Theme';
import { withTracking } from '~/hoc/withTracking';
import { tracking } from '~/fun/tracking';

import type { Level } from '~/fun/createTheme';

export type Props = {
    children?: React.Node,
    level?: Level,
    className?: ?string,
    [TODO]: TODO,
};

// TODO: Shadow.
// TODO: Tracking.
export const Fab = withTracking(({ children, className, level = 'primary', ...rest }: Props) => (
    <Theme>
        {__ => (
            <div
                role={'button'}
                tabIndex={0}
                {...rest}
                css={css`
                    ${tracking(__.color.active.glow, __)};

                    width: ${__.cellIL2};
                    height: ${__.cellIL2};
                    position: fixed;
                    text-align: center;
                    border-radius: 50%;

                    background-color: ${__.color.active.background[level]};
                    color: ${__.color.active.foreground};
                    box-shadow: 0 1px 5px 1px #000;

                    &:focus {
                        outline: none;
                        z-index: 1;
                    }

                    & > span {
                        line-height: ${__.cellIL2};
                        font-size: ${__.font.sizeL1};
                    }

                    ${className};
                `}
            >
                {children}
            </div>
        )}
    </Theme>
));
