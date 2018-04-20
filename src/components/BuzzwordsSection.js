// @flow

import * as React from 'react';

import { Section } from '~/kit/Section';
import { H2 } from '~/kit/H2';
import { Buzzwords } from '~/components/Buzzwords';
import { withKiririn } from '~/kiririntl';

export const BuzzwordsSection = withKiririn(({ kiririn }) => (
    <Section>
        <H2>{kiririn`Buzzwords`}</H2>
        <Buzzwords />
    </Section>
));
