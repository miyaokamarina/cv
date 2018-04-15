// @flow

import * as React from 'react';

import { Section } from '~/kit/Section';
import { H2 } from '~/kit/H2';
import { Intl } from '~/kit/Intl';
import { Buzzwords } from '~/components/Buzzwords';

export const BuzzwordsSection = () => (
    <Intl>
        {__ => (
            <Section>
                <H2>{__`Buzzwords`}</H2>
                <Buzzwords />
            </Section>
        )}
    </Intl>
);
