import * as React from 'react';

import { Section } from '../kit/Section';
import { H } from '../kit/H';
import { Xps } from './Xps';
import { withTl } from '../kiririntl';
import { name } from '../hoc/name';

export const XpSection = withTl(
    name('XpSection')(({ tl }) => (
        <Section aria-label={tl`Work experience` as string}>
            <H level={2}>{tl`Work experience`}</H>
            <Xps />
        </Section>
    )),
);
