import * as React from 'react';

import { Section } from '../kit/Section';
import { H } from '../kit/H';
import { Ul } from '../kit/Ul';
import { withTl } from '../kiririntl';

export const Breakdowns = withTl(({ tl }) => (
    <Section aria-label={tl`Breakdowns` as string}>
        <H level={2}>{tl`Breakdowns`}</H>
        <Section>
            <H level={3}>{tl`GitHub // header`}</H>
            <Ul>
                <Ul.Item>
                    <a href={'https://github.com/https://github.com/klippersubs/xre'}>{tl`klippersubs/xre`}</a>
                    {tl`: `}
                    {tl`Template literal for XRegExp; mimics native regexps. `}
                    {tl`Now useless, and the only feature missing in native regexps may be implemented using `}
                    <a href={'https://gist.github.com/miyaokamarina/ce1c374cb505ca3786c38afaa52661d9'}>{tl`one-liner workaround`}</a>
                    {tl`.`}
                </Ul.Item>
                <Ul.Item>
                    <a href={'https://github.com/miyaokamarina/miyaokamarina.github.io/tree/source/src/prelude'}>{tl`prelude`}</a>
                    {tl`: `}
                    {tl`Experiments with implementing FP patterns using OOP approach. `}
                    {tl`Monkey-patching, magical decorators, HOFs, hacks, proxies, performance anti-patterns, ass, shit.`}
                </Ul.Item>
                <Ul.Item>
                    <a href={'https://github.com/klippersubs/bfs'}>{tl`klippersubs/bfs`}</a>
                    {tl`, `}
                    <a href={'https://github.com/klippersubs/hashtable'}>{tl`klippersubs/hashtable`}</a>
                    {tl`: `}
                    {tl`Naive implementations of common algos.`}
                </Ul.Item>
                <Ul.Item>
                    <a href={'https://github.com/klippersubs/less-hsluv'}>{tl`klippersubs/less-hsluv`}</a>
                    {tl`: `}
                    {tl`Rewritten plugin for the HSLuv color space support in LESS.`}
                </Ul.Item>
                <Ul.Item>
                    <a href={'https://github.com/klippersubs/await-loader'}>{tl`klippersubs/await-loader`}</a>
                    {tl`: `}
                    {tl`This loader simulates dynamic imports in webpack 1.`}
                </Ul.Item>
                <Ul.Item>
                    <a href={'https://github.com/klippersubs/dangerzone'}>{tl`klippersubs/dangerzone`}</a>
                    {tl`: `}
                    {tl`Useless template tag and function to insert HTML strings to React.`}
                </Ul.Item>
            </Ul>
        </Section>
        <Section>
            <H level={3}>{tl`Possibly impossible ambitions`}</H>
            <Ul>
                <Ul.Item>
                    {tl`Create `}
                    <a href={'https://github.com/primula-lang'}>{tl`the perfect language`}</a>
                    {tl`. `}
                    {tl`Functional, declarative, expressive, immutable, lazy, all we love. `}
                    {tl`Currently looking around to find any ideas to steal, `}
                    {tl`sometimes writing a parser or two, then drop it into back hole.`}
                </Ul.Item>
                <Ul.Item>
                    {tl`Create the perfect operating system. `}
                    {tl`So, currently I'm, again, looking around and watching for cool ideas in OS design. `}
                    {tl`Of course, unlike the language, there is no any real effort to make an OS real.`}
                </Ul.Item>
                <Ul.Item>
                    {tl`Develop modern smartphone with T9-like keyboard. `}
                    {tl`With modern hardware, modern OS, touch support and even more (even more, than a touch device can give).`}
                </Ul.Item>
            </Ul>
        </Section>
    </Section>
));
