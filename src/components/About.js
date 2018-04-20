// @flow

import * as React from 'react';

import { Section } from '~/kit/Section';
import { H2 } from '~/kit/H2';
import { withKiririn } from '~/kiririntl';

export const About = withKiririn(({ kiririn }) => (
    <Section>
        <H2>{kiririn`About // header`}</H2>
        <p>
            {kiririn`Built with React, Redux, Flow, Emotion, Ramda, `}
            {kiririn`webpack, ESLint (custom config), Prettier, `}
            {kiririn`Twemoji, EmojiOne, Font Awesome 5 Pro.`}
        </p>
    </Section>
));
