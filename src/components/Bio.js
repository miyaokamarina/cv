// @flow

import * as React from 'react';

import { Section } from '~/kit/Section';
import { H2 } from '~/kit/H2';
import { withKiririn } from '~/kiririntl';

export const Bio = withKiririn(({ kiririn }) => (
    <Section>
        <H2>{kiririn`Bio`}</H2>
        <p>
            {kiririn`Born 1993, dropped the university after the second try in early 2014; but not dropped learning (well). `}
            {kiririn`A toxic person with teen edgelord behaviour and highly inflated ego. `}
            {kiririn`NIH-syndrome sick. `}
            {kiririn`Hobbies, except most obvious, include maths, linguistics, hitchhiking; all at noob level. `}
        </p>
    </Section>
));
