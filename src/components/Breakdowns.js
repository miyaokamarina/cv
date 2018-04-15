// @flow

import * as React from 'react';

import { Section } from '~/kit/Section';
import { H2 } from '~/kit/H2';
import { H3 } from '~/kit/H3';
import { Ul } from '~/kit/Ul';
import { UlLi } from '~/kit/UlLi';
import { Intl } from '~/kit/Intl';

export const Breakdowns = () => (
    <Intl>
        {__ => (
            <Section>
                <H2>{__`Breakdowns`}</H2>
                <Section>
                    <H3>{__`GitHub // header`}</H3>
                    <Ul>
                        <UlLi>
                            <a href={'https://github.com/https://github.com/klippersubs/xre'}>{__`klippersubs/xre`}</a>
                            {__`: `}
                            {__`Template literal for XRegExp; mimics native regexps. `}
                            {__`Now useless, and the only feature missing in native regexps may be implemented using `}
                            <a href={'https://gist.github.com/miyaokamarina/ce1c374cb505ca3786c38afaa52661d9'}>{__`one-liner workaround`}</a>
                            {__`.`}
                        </UlLi>
                        <UlLi>
                            <a href={'https://github.com/miyaokamarina/miyaokamarina.github.io/tree/source/src/prelude'}>{__`prelude`}</a>
                            {__`: `}
                            {__`Experiments with implementing FP patterns using OOP approach. `}
                            {__`Monkey-patching, magical decorators, HOFs, hacks, proxies, performance anti-patterns, ass, shit.`}
                        </UlLi>
                        <UlLi>
                            <a href={'https://github.com/klippersubs/bfs'}>{__`klippersubs/bfs`}</a>
                            {__`, `}
                            <a href={'https://github.com/klippersubs/hashtable'}>{__`klippersubs/hashtable`}</a>
                            {__`: `}
                            {__`Naive implementations of common algos.`}
                        </UlLi>
                        <UlLi>
                            <a href={'https://github.com/klippersubs/less-hsluv'}>{__`klippersubs/less-hsluv`}</a>
                            {__`: `}
                            {__`Rewritten plugin for the HSLuv color space support in LESS.`}
                        </UlLi>
                        <UlLi>
                            <a href={'https://github.com/klippersubs/await-loader'}>{__`klippersubs/await-loader`}</a>
                            {__`: `}
                            {__`This loader simulates dynamic imports in webpack 1.`}
                        </UlLi>
                        <UlLi>
                            <a href={'https://github.com/klippersubs/dangerzone'}>{__`klippersubs/dangerzone`}</a>
                            {__`: `}
                            {__`Useless template tag and function to insert HTML strings to React.`}
                        </UlLi>
                    </Ul>
                </Section>
                <Section>
                    <H3>{__`Possibly impossible ambitions`}</H3>
                    <Ul>
                        <UlLi>
                            {__`Create `}
                            <a href={'https://github.com/primula-lang'}>{__`the perfect language`}</a>
                            {__`. `}
                            {__`Functional, declarative, expressive, immutable, lazy, all we love. `}
                            {__`Currently looking around to find any ideas to steal, `}
                            {__`sometimes writing a parser or two, then drop it into back hole.`}
                        </UlLi>
                        <UlLi>
                            {__`Create the perfect operating system. `}
                            {__`So, currently I'm, again, looking around and watching for cool ideas in OS design. `}
                            {__`Of course, unlike the language, there is no any real effort to make an OS real.`}
                        </UlLi>
                        <UlLi>
                            {__`Develop modern smartphone with T9-like keyboard. `}
                            {__`With modern hardware, modern OS, touch support and even more (even more, than a touch device can give).`}
                        </UlLi>
                    </Ul>
                </Section>
            </Section>
        )}
    </Intl>
);
