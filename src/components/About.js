// @flow

import * as React from 'react';

import { Section } from '~/kit/Section';
import { H2 } from '~/kit/H2';
import { Intl } from '~/kit/Intl';

export const About = () => (
    <Intl>
        {__ => (
            <Section>
                <H2>{__`About // header`}</H2>
                <p>
                    {__`Built with React, Redux, Flow, Emotion, Ramda, `}
                    {__`webpack, ESLint (custom config), Prettier, `}
                    {__`Twemoji, EmojiOne, Font Awesome 5 Pro.`}
                </p>
            </Section>
        )}
    </Intl>
);
