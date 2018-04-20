// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';

import { H3 } from '~/kit/H3';
import { Section } from '~/kit/Section';
import { Subtitle } from '~/kit/Subtitle';
import { withKiririn } from '~/kiririntl';

const xpCollator = ({ since: a }, { since: b }) => b - a;

export const Xp = withKiririn(
    connect(({ xp }) => ({ xp }))(
        ({ xp, kiririn }) =>
            xp &&
            xp.sort(xpCollator).map(x => (
                <Section key={x.key}>
                    <H3>
                        {x.position}
                        <Subtitle>
                            {kiririn(x.company, kiririn`${x.location}`)`[[XP_AT]]`}
                            {kiririn(x.since, x.till)`since # till #`}
                        </Subtitle>
                    </H3>
                    <p>
                        <strong
                            css={css`
                                font-weight: 500;
                            `}
                        >
                            {kiririn`Responsibilities:`}
                        </strong>
                        <br />
                        {x.responsibilities}
                    </p>
                </Section>
            )),
    ),
);
