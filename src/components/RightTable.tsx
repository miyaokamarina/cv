import * as React from 'react';

import { Properties } from '../kit/Properties';
import { withTl } from '../kiririntl';
import { name } from '../hoc/name';

const SALARY = 2500;

export const RightTable = withTl(
    name('RightTable')(({ tl }) => (
        <>
            <Properties.Item>
                <Properties.K>{tl`Level:`}</Properties.K>
                <Properties.V>{tl`magical girl`}</Properties.V>
            </Properties.Item>
            <Properties.Item>
                <Properties.K>{tl`Position:`}</Properties.K>
                <Properties.V>{tl`React developer`}</Properties.V>
            </Properties.Item>
            <Properties.Item>
                <Properties.K>{tl`Salary (monthly):`}</Properties.K>
                <Properties.V>{tl(SALARY)`from $#`}</Properties.V>
            </Properties.Item>
            <Properties.Item>
                <Properties.K>{tl`Employment:`}</Properties.K>
                <Properties.V>{tl`full time`}</Properties.V>
            </Properties.Item>
            <Properties.Item>
                <Properties.K>{tl`Work location:`}</Properties.K>
                <Properties.V>{tl`on-site, remote`}</Properties.V>
            </Properties.Item>
            <Properties.Item>
                <Properties.K>{tl`GitHub:`}</Properties.K>
                <Properties.V>
                    <a href={'https://github.com/miyaokamarina'}>{tl`@miyaokamarina`}</a>
                </Properties.V>
            </Properties.Item>
            <Properties.Item>
                <Properties.K>{tl`GitHub (old):`}</Properties.K>
                <Properties.V>
                    <a href={'https://github.com/klippersubs'}>{tl`@klippersubs`}</a>
                </Properties.V>
            </Properties.Item>
        </>
    )),
);
