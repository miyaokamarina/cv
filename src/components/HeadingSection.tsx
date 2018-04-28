import * as React from 'react';

import { Properties } from '../kit/Properties';
import { Section } from '../kit/Section';
import { H } from '../kit/H';
import { Center } from '../kit/Center';
import { Split } from '../kit/Split';
import { Avatar } from './Avatar';
import { withTl } from '../kiririntl';
import { cn } from '../fn/cn';
import { LeftTable } from './LeftTable';
import { RightTable } from './RightTable';

import './HeadingSection.css';

export const HeadingSection = withTl(({ tl }) => (
    <Section aria-label={tl`Yuri Zemskov, the JS magical girl` as string} {...cn('HeadingSection')}>
        <H level={1}>{tl`Yuri Zemskov, the JS magical girl`}</H>
        <div {...cn('print')}>
            <Split>
                <Split.Item>
                    <Avatar />
                </Split.Item>
                <Split.Item>
                    <Properties>
                        <LeftTable />
                    </Properties>
                </Split.Item>
                <Split.Item>
                    <Properties>
                        <RightTable />
                    </Properties>
                </Split.Item>
            </Split>
        </div>
        <div {...cn('no-print', 'lte-s')}>
            <Center>
                <Avatar />
            </Center>
            <Center>
                <Properties>
                    <LeftTable />
                    <RightTable />
                </Properties>
            </Center>
        </div>
        <div {...cn('no-print', 'gte-m')}>
            <Center>
                <Avatar />
            </Center>
            <Center>
                <Split>
                    <Split.Item>
                        <Properties>
                            <LeftTable />
                        </Properties>
                    </Split.Item>
                    <Split.Item>
                        <Properties>
                            <RightTable />
                        </Properties>
                    </Split.Item>
                </Split>
            </Center>
        </div>
    </Section>
));
