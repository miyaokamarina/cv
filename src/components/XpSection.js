// @flow

import * as React from 'react';

import { Section } from '~/kit/Section';
import { H2 } from '~/kit/H2';
import { Intl } from '~/kit/Intl';
import { Xp } from '~/components/Xp';

export const XpSection = () => (
    <Intl>
        {__ => (
            <Section>
                <H2>{__`Work experience`}</H2>
                <Xp />
            </Section>
        )}
    </Intl>
);
