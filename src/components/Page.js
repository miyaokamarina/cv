// @flow

import * as React from 'react';
import { css } from 'emotion';
import { connect } from 'react-redux';

import { Theme } from '~/kit/Theme';

export const Page = connect(({ menu }) => ({ menu }))(({ children, menu }) => (
    <Theme>
        {__ => (
            <div
                css={css`
                    width: 100%;
                    display: flex;
                `}
            >
                <article
                    css={css`
                        flex-grow: 1;
                        padding: ${__.cell};

                        ${__.size.S1(css`
                            padding: ${__.cellS2};
                        `)};

                        ${__.size.GteL(css`
                            width: calc(${__.cell} * 30);
                            flex-grow: 0;
                            margin: ${__.cell} auto;
                            padding: 0 ${__.cell};

                            box-shadow: inset -${__.cellS6} 0 0 ${__.color.active.background.primary},
                                inset calc(-${__.cellS6} * 2) 0 0 ${__.color.default.background},
                                inset calc(-${__.cellS6} * 3) 0 0 ${__.color.active.background.primary},
                                inset ${__.cellS6} 0 0 ${__.color.active.background.primary}, inset calc(${__.cellS6} * 2) 0 0 ${__.color.default.background},
                                inset calc(${__.cellS6} * 3) 0 0 ${__.color.active.background.primary};
                        `)};

                        ${__.size.LteL(
                            css`
                                margin-bottom: calc(${__.cellIL2} + ${__.cellS2} * 2);
                            `,
                        )};

                        ${__.print(css`
                            padding: 0;
                            margin: 20mm 20mm 20mm 25mm;
                            width: calc(100% - 45mm);
                        `)};

                        ${menu &&
                            css`
                                filter: blur(2px);
                            `};
                    `}
                >
                    {children}
                </article>
            </div>
        )}
    </Theme>
));
