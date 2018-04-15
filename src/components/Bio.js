// @flow

import * as React from 'react';

import { Section } from '~/kit/Section';
import { H2 } from '~/kit/H2';
import { Intl } from '~/kit/Intl';

export const Bio = () => (
    <Intl>
        {__ => (
            <Section>
                <H2>{__`Bio`}</H2>
                <p>
                    {__`Born 1993, dropped the university after the second try in early 2014; but not dropped learning (well). `}
                    {__`A toxic person with teen edgelord behaviour and highly inflated ego. `}
                    {__`NIH-syndrome sick. `}
                    {__`Hobbies, except most obvious, include maths, linguistics, hitchhiking; all at noob level. `}
                </p>
            </Section>
        )}
    </Intl>
);
