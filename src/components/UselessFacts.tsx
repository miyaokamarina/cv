import * as React from 'react';

import { Section } from '../kit/Section';
import { H } from '../kit/H';
import { Properties } from '../kit/Properties';
import { withTl } from '../kiririntl';
import { cn } from '../fn/cn';
import { name } from '../hoc/name';

import './UselessFacts.css';

export const UselessFacts = withTl(
    name('UselessFacts')(({ tl }) => (
        <Section aria-label={tl`Useless facts` as string} {...cn('UselessFacts')}>
            <H level={2}>{tl`Useless facts`}</H>
            <Properties>
                <Properties.Item>
                    <Properties.K>{tl`Fav editors:`}</Properties.K>
                    <Properties.V>{tl`IntelliJ IDEA, Visual Studio Code`}</Properties.V>
                </Properties.Item>
                <Properties.Item>
                    <Properties.K>{tl`Fav distro:`}</Properties.K>
                    <Properties.V>{tl`Antergos + KDE`}</Properties.V>
                </Properties.Item>
                <Properties.Item>
                    <Properties.K>{tl`Fav mobile OS:`}</Properties.K>
                    <Properties.V>{tl`Symbian 9.3`}</Properties.V>
                </Properties.Item>
                <Properties.Item>
                    <Properties.K>{tl`Unrequited love:`}</Properties.K>
                    <Properties.V>{tl`Maths`}</Properties.V>
                </Properties.Item>
                <Properties.Item>
                    <Properties.K>{tl`Currently fav artists:`}</Properties.K>
                    <Properties.V>{tl`The Enigma TNG, Zedd`}</Properties.V>
                </Properties.Item>
            </Properties>
        </Section>
    )),
);
