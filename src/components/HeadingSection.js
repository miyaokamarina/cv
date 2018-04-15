// @flow

import * as React from 'react';
import { css } from 'emotion';

import { Intl } from '~/kit/Intl';
import { Theme } from '~/kit/Theme';
import { Section } from '~/kit/Section';
import { H1 } from '~/kit/H1';
import { Center } from '~/kit/Center';
import { Split } from '~/kit/Split';
import { Print } from '~/kit/Print';
import { Screen } from '~/kit/Screen';

import { Stats } from '~/components/Stats';

import avatar from './avatar.jpeg';

export const HeadingSection = () => (
    <Intl>
        {tl => (
            <Theme>
                {th => (
                    <Section>
                        <H1>{tl`Marina Miyaoka, the JS magical girl`}</H1>
                        <Screen>
                            <Center
                                css={css`
                                    margin-top: ${th.cell};
                                    margin-bottom: ${th.cellL1};
                                `}
                            >
                                <div
                                    css={css`
                                        box-shadow: inset 1px 2px 10px -2px #000f;
                                        border-radius: 50%;
                                        width: 140px;
                                        height: 140px;

                                        background-image: url('${avatar}');
                                        background-size: cover;
                                    `}
                                />
                            </Center>
                            <Stats />
                        </Screen>
                        <Print>
                            <Split
                                left={{
                                    node: (
                                        <div
                                            css={css`
                                                box-shadow: inset 1px 2px 10px -2px #000f;
                                                border-radius: 50%;
                                                width: 140px;
                                                height: 140px;

                                                background-image: url('${avatar}');
                                                background-size: cover;
                                            `}
                                        />
                                    ),
                                    css: css`
                                        margin-right: ${th.cell};
                                    `,
                                }}
                                right={<Stats />}
                            />
                        </Print>
                    </Section>
                )}
            </Theme>
        )}
    </Intl>
);
