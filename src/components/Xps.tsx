import * as React from 'react';

import { H } from '../kit/H';
import { Section } from '../kit/Section';
import { Subtitle } from '../kit/Subtitle';
import { cn } from '../fn/cn';
import { withTl } from '../kiririntl';
import { withState } from '../kit/Connect';
import { State } from '../store';

import './Xps.css';

export const Xps = withState<State, {}>(
    withTl(({ tl, state: { xps } }) => (
        <>
            {xps.map(x => (
                <Section aria-label={tl`${x.position}` as string} key={x.key}>
                    <H level={3}>
                        {tl`${x.position}`}
                        <Subtitle>
                            {tl(tl`${x.company}`, tl`${x.location}`)`[[XP_AT]]`}
                            {tl(x.since, x.till)`since # till #`}
                        </Subtitle>
                    </H>
                    <p>
                        <strong {...cn('Xps__Strong')}>{tl`Responsibilities:`}</strong>
                        <br />
                        {x.responsibilities}
                    </p>
                </Section>
            ))}
        </>
    )),
);
