// @flow

import * as React from 'react';
import { css } from 'emotion';

import { Theme } from '~/kit/Theme';

export type Props = {
    children: React.Node,
    className?: ?string,
    [TODO]: TODO,
};

export const Section = ({ children, className, ...rest }: Props) => (
    <Theme>
        {__ => (
            <section
                {...rest}
                css={css`
                    margin-top: ${__.cell};
                    break-inside: avoid-page;

                    &:first-child {
                        margin-top: 0;
                    }

                    & > *:first-child {
                        margin-bottom: ${__.cellS2};
                    }

                    &:first-child {
                        margin-top: 0;
                    }

                    ${className};
                `}
            >
                {children}
            </section>
        )}
    </Theme>
);
