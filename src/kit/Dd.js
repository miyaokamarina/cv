// @flow

import * as React from 'react';
import { css } from 'emotion';

import { Theme } from '~/kit/Theme';

export type Props = {
    children?: React.Node,
    className?: ?string,
    [TODO]: TODO,
};

export const Dd = ({ children, className, ...rest }: Props) => (
    <Theme>
        {__ => (
            <div
                {...rest}
                css={css`
                    padding-left: ${__.cell};

                    &::before {
                        content: '•';
                        display: inline-block;
                        width: ${__.cell};
                        height: ${__.cell};
                        margin-left: -${__.cell};
                        text-align: center;
                    }

                    ${className};
                `}
            >
                {children}
            </div>
        )}
    </Theme>
);
