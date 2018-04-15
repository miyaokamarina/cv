// @flow

import * as React from 'react';
import { css } from 'emotion';

import { Theme } from '~/kit/Theme';

export const UlLi = ({ children }: { children: React.Node }) => (
    <Theme>
        {__ => (
            <li
                css={css`
                    display: block;
                    padding-left: ${__.cell};

                    &::before {
                        content: '•';
                        display: inline-block;
                        width: ${__.cell};
                        height: ${__.cell};
                        margin-left: -${__.cell};
                        text-align: center;
                    }
                `}
            >
                {children}
            </li>
        )}
    </Theme>
);
