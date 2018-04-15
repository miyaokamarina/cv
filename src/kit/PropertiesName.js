// @flow

import * as React from 'react';
import { css } from 'emotion';

import { Theme } from '~/kit/Theme';

export type Props = {
    children?: React.Node,
    className?: ?string,
    [TODO]: TODO,
};

export const PropertiesName = ({ children, className, ...rest }: Props) => (
    <Theme>
        {__ => (
            <dt
                {...rest}
                css={css`
                    display: table-cell;
                    padding-right: ${__.cellS2};
                    font-weight: 400;

                    ${className};
                `}
            >
                {children}
            </dt>
        )}
    </Theme>
);
