// @flow

import * as React from 'react';

import { Section } from '~/kit/Section';
import { H2 } from '~/kit/H2';
import { Xp } from '~/components/Xp';
import { withKiririn } from '~/kiririntl';

export const XpSection = withKiririn(({ kiririn }) => (
    <Section>
        <H2>{kiririn`Work experience`}</H2>
        <Xp />
    </Section>
));
