// @flow

import * as React from 'react';
import { css } from 'emotion';

import { Theme } from '~/kit/Theme';

export type Props = {
    children: React.Node,
    className?: ?string,
    [TODO]: TODO,
};

export const H2 = ({ children, className, ...rest }: Props) => (
    <Theme>
        {__ => (
            <h2
                {...rest}
                css={css`
                    padding: ${__.H2.padding};

                    box-shadow: inset calc(${__.cellS6} * 3) 0 0 calc(-${__.cellS6} * 2) ${__.color.active.background.primary};

                    font-size: ${__.H2.font.size};
                    font-weight: ${__.H2.font.weight};
                    line-height: ${__.H2.font.height};

                    ${className};
                `}
            >
                {children}
            </h2>
        )}
    </Theme>
);
