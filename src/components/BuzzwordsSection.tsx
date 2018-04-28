import * as React from 'react';

import { Section } from '../kit/Section';
import { H } from '../kit/H';
import { Buzzwords } from './Buzzwords';
import { withTl } from '../kiririntl';

export const BuzzwordsSection = withTl(({ tl }) => (
    <Section aria-label={tl`Buzzwords` as string}>
        <H level={2}>{tl`Buzzwords`}</H>
        <Buzzwords />
    </Section>
));

BuzzwordsSection.displayName = 'BuzzwordsSection';
