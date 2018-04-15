// @flow

import * as React from 'react';
import { css } from 'emotion';

import { Theme } from '~/kit/Theme';

export type Props = {
    children: React.Node,
    className?: ?string,
    [TODO]: TODO,
};

export const H3 = ({ children, className, ...rest }: Props) => (
    <Theme>
        {__ => (
            <h3
                {...rest}
                css={css`
                    padding: ${__.H3.padding};

                    box-shadow: inset calc(${__.cellS6} * 3) 0 0 calc(-${__.cellS6} * 2) ${__.color.active.background.primary};

                    font-size: ${__.H3.font.size};
                    font-weight: ${__.H3.font.weight};
                    line-height: ${__.H3.font.height};

                    ${className};
                `}
            >
                {children}
            </h3>
        )}
    </Theme>
);
