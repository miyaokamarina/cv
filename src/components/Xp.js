// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';

import { Intl } from '~/kit/Intl';
import { H3 } from '~/kit/H3';
import { Section } from '~/kit/Section';
import { Subtitle } from '~/kit/Subtitle';

const xpCollator = ({ since: a }, { since: b }) => b - a;

export const Xp = connect(({ xp }) => ({ xp }))(
    ({ xp }) =>
        xp && (
            <Intl>
                {__ =>
                    xp.sort(xpCollator).map(x => (
                        <Section key={x.key}>
                            <H3>
                                {x.position}
                                <Subtitle>
                                    {__(x.company, __`${x.location}`)`[[XP_AT]]`}
                                    {__(x.since, x.till)`since # till #`}
                                </Subtitle>
                            </H3>
                            <p>
                                <strong
                                    css={css`
                                        font-weight: 500;
                                    `}
                                >
                                    {__`Responsibilities:`}
                                </strong>
                                <br />
                                {x.responsibilities}
                            </p>
                        </Section>
                    ))
                }
            </Intl>
        ),
);
