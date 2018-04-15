// @flow

import * as React from 'react';
import { css } from 'emotion';

import { Theme } from '~/kit/Theme';
import { Split } from '~/kit/Split';
import { Center } from '~/kit/Center';
import { Media } from '~/kit/Media';
import { Print } from '~/kit/Print';
import { Properties } from '~/kit/Properties';

import { LeftTable } from '~/components/LeftTable';
import { RightTable } from '~/components/RightTable';

export const Stats = () => (
    <Theme>
        {__ => (
            <Center>
                <Media.LteS>
                    <Properties>
                        <LeftTable />
                        <RightTable />
                    </Properties>
                </Media.LteS>
                <Media.GtS>
                    <Split
                        left={
                            <Properties>
                                <LeftTable />
                            </Properties>
                        }
                        right={
                            <Properties>
                                <RightTable />
                            </Properties>
                        }
                        css={css`
                            & > *:first-child {
                                margin-right: ${__.cellS2};
                                width: 240px;
                            }

                            & > *:last-child {
                                margin-left: ${__.cellS2};
                                width: 240px;
                            }
                        `}
                    />
                </Media.GtS>
                <Print>
                    <Split
                        left={
                            <Properties>
                                <LeftTable />
                            </Properties>
                        }
                        right={
                            <Properties>
                                <RightTable />
                            </Properties>
                        }
                        css={css`
                            & > *:first-child {
                                margin-right: ${__.cellS2};
                                width: 240px;
                            }

                            & > *:last-child {
                                margin-left: ${__.cellS2};
                                width: 240px;
                            }
                        `}
                    />
                </Print>
            </Center>
        )}
    </Theme>
);
