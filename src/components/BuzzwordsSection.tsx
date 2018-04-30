import * as React from 'react';

import { Section } from '../kit/Section';
import { H } from '../kit/H';
import { Buzzwords } from './Buzzwords';
import { withTl } from '../kiririntl';
import { name } from '../hoc/name';

export const BuzzwordsSection = withTl(
    name('BuzzwordsSection')(({ tl }) => (
        <Section aria-label={tl`Buzzwords` as string}>
            <H level={2}>{tl`Buzzwords`}</H>
            <Buzzwords />
        </Section>
    )),
);
