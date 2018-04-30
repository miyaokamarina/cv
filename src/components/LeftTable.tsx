import * as React from 'react';

import { Properties } from '../kit/Properties';
import { withTl } from '../kiririntl';
import { name } from '../hoc/name';

const AGE = 24;

export const LeftTable = withTl(
    name('LeftTable')(({ tl }) => (
        <>
            <Properties.Item>
                <Properties.K>{tl`Name:`}</Properties.K>
                <Properties.V>{tl`Yuri Zemskov`}</Properties.V>
            </Properties.Item>
            <Properties.Item>
                <Properties.K>{tl`Age:`}</Properties.K>
                <Properties.V>{tl(AGE)`[[age]]`}</Properties.V>
            </Properties.Item>
            <Properties.Item>
                <Properties.K>{tl`Location:`}</Properties.K>
                <Properties.V>{tl`Moscow`}</Properties.V>
            </Properties.Item>
            <Properties.Item>
                <Properties.K>{tl`Phone:`}</Properties.K>
                <Properties.V>{'+7 929 934‑21‑99'}</Properties.V>
            </Properties.Item>
            <Properties.Item>
                <Properties.K>{tl`Mail:`}</Properties.K>
                <Properties.V>
                    <a href={'mailto:miyaokamarina@gmail.com'}>{'miyaokamarina@gmail.com'}</a>
                </Properties.V>
            </Properties.Item>
            <Properties.Item>
                <Properties.K>{tl`Telegram:`}</Properties.K>
                <Properties.V>
                    <a href={'https://t.me/miyaokamarina'}>{'@miyaokamarina'}</a>
                </Properties.V>
            </Properties.Item>
            <Properties.Item>
                <Properties.K>{tl`Twitter:`}</Properties.K>
                <Properties.V>
                    <a href={'https://twitter.com/miyaokamarina'}>{'@miyaokamarina'}</a>
                </Properties.V>
            </Properties.Item>
        </>
    )),
);
