// @flow

import * as React from 'react';

import { Section } from '~/kit/Section';
import { H2 } from '~/kit/H2';
import { H3 } from '~/kit/H3';
import { Ul } from '~/kit/Ul';
import { UlLi } from '~/kit/UlLi';
import { withKiririn } from '~/kiririntl';

export const Breakdowns = withKiririn(({ kiririn }) => (
    <Section>
        <H2>{kiririn`Breakdowns`}</H2>
        <Section>
            <H3>{kiririn`GitHub // header`}</H3>
            <Ul>
                <UlLi>
                    <a href={'https://github.com/https://github.com/klippersubs/xre'}>{kiririn`klippersubs/xre`}</a>
                    {kiririn`: `}
                    {kiririn`Template literal for XRegExp; mimics native regexps. `}
                    {kiririn`Now useless, and the only feature missing in native regexps may be implemented using `}
                    <a href={'https://gist.github.com/miyaokamarina/ce1c374cb505ca3786c38afaa52661d9'}>{kiririn`one-liner workaround`}</a>
                    {kiririn`.`}
                </UlLi>
                <UlLi>
                    <a href={'https://github.com/miyaokamarina/miyaokamarina.github.io/tree/source/src/prelude'}>{kiririn`prelude`}</a>
                    {kiririn`: `}
                    {kiririn`Experiments with implementing FP patterns using OOP approach. `}
                    {kiririn`Monkey-patching, magical decorators, HOFs, hacks, proxies, performance anti-patterns, ass, shit.`}
                </UlLi>
                <UlLi>
                    <a href={'https://github.com/klippersubs/bfs'}>{kiririn`klippersubs/bfs`}</a>
                    {kiririn`, `}
                    <a href={'https://github.com/klippersubs/hashtable'}>{kiririn`klippersubs/hashtable`}</a>
                    {kiririn`: `}
                    {kiririn`Naive implementations of common algos.`}
                </UlLi>
                <UlLi>
                    <a href={'https://github.com/klippersubs/less-hsluv'}>{kiririn`klippersubs/less-hsluv`}</a>
                    {kiririn`: `}
                    {kiririn`Rewritten plugin for the HSLuv color space support in LESS.`}
                </UlLi>
                <UlLi>
                    <a href={'https://github.com/klippersubs/await-loader'}>{kiririn`klippersubs/await-loader`}</a>
                    {kiririn`: `}
                    {kiririn`This loader simulates dynamic imports in webpack 1.`}
                </UlLi>
                <UlLi>
                    <a href={'https://github.com/klippersubs/dangerzone'}>{kiririn`klippersubs/dangerzone`}</a>
                    {kiririn`: `}
                    {kiririn`Useless template tag and function to insert HTML strings to React.`}
                </UlLi>
            </Ul>
        </Section>
        <Section>
            <H3>{kiririn`Possibly impossible ambitions`}</H3>
            <Ul>
                <UlLi>
                    {kiririn`Create `}
                    <a href={'https://github.com/primula-lang'}>{kiririn`the perfect language`}</a>
                    {kiririn`. `}
                    {kiririn`Functional, declarative, expressive, immutable, lazy, all we love. `}
                    {kiririn`Currently looking around to find any ideas to steal, `}
                    {kiririn`sometimes writing a parser or two, then drop it into back hole.`}
                </UlLi>
                <UlLi>
                    {kiririn`Create the perfect operating system. `}
                    {kiririn`So, currently I'm, again, looking around and watching for cool ideas in OS design. `}
                    {kiririn`Of course, unlike the language, there is no any real effort to make an OS real.`}
                </UlLi>
                <UlLi>
                    {kiririn`Develop modern smartphone with T9-like keyboard. `}
                    {kiririn`With modern hardware, modern OS, touch support and even more (even more, than a touch device can give).`}
                </UlLi>
            </Ul>
        </Section>
    </Section>
));
