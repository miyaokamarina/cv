// @flow

import * as React from 'react';
import { css } from 'emotion';

import { Theme } from '~/kit/Theme';

export type Props = {
    children?: React.Node,
    className?: ?string,
    [TODO]: TODO,
};

export const Subtitle = ({ children, className, ...rest }: Props) => (
    <Theme>
        {__ => (
            <div
                {...rest}
                css={css`
                    line-height: ${__.font.height};
                    font-size: ${__.font.size};
                    font-weight: ${__.font.weight};

                    ${className};
                `}
            >
                {children}
            </div>
        )}
    </Theme>
);
