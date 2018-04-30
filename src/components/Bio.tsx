import * as React from 'react';

import { Section } from '../kit/Section';
import { H } from '../kit/H';
import { withTl } from '../kiririntl';
import { name } from '../hoc/name';

export const Bio = withTl(
    name('Bio')(({ tl }) => (
        <Section aria-label={tl`Bio` as string}>
            <H level={2}>{tl`Bio`}</H>
            <p>
                {tl`Born 1993, dropped the university after the second try in early 2014; but not dropped learning (well). `}
                {tl`A toxic person with teen edgelord behaviour and highly inflated ego. `}
                {tl`NIH-syndrome sick. `}
                {tl`Hobbies, except most obvious, include maths, linguistics, hitchhiking; all at noob level. `}
            </p>
        </Section>
    )),
);
