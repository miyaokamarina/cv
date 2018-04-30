import * as React from 'react';

import { Section } from '../kit/Section';
import { H } from '../kit/H';
import { withTl } from '../kiririntl';
import { name } from '../hoc/name';

export const About = withTl(name('About')(({ tl }) => (
    <Section aria-label={tl`About // header` as string}>
        <H level={2}>{tl`About // header`}</H>
        <p>
            {tl`Built with React, Redux, TypeScript, LESS, PostCSS, HSLuv color space, `}
            {tl`webpack, ESLint, Prettier, `}
            {tl`Twemoji, Font Awesome 5 Pro.`}
        </p>
    </Section>
)));
