// @flow

import * as React from 'react';

import { PropertiesProperty } from '~/kit/PropertiesProperty';
import { PropertiesName } from '~/kit/PropertiesName';
import { PropertiesValue } from '~/kit/PropertiesValue';
import { withKiririn } from '~/kiririntl';

const AGE = 24;

export const LeftTable = withKiririn(({ kiririn }) => (
    <>
        <PropertiesProperty>
            <PropertiesName>{kiririn`Name:`}</PropertiesName>
            <PropertiesValue>{kiririn`Yuri Zemskov`}</PropertiesValue>
        </PropertiesProperty>
        <PropertiesProperty>
            <PropertiesName>{kiririn`Age:`}</PropertiesName>
            <PropertiesValue>{kiririn(AGE)`[[age]]`}</PropertiesValue>
        </PropertiesProperty>
        <PropertiesProperty>
            <PropertiesName>{kiririn`Location:`}</PropertiesName>
            <PropertiesValue>{kiririn`Moscow`}</PropertiesValue>
        </PropertiesProperty>
        <PropertiesProperty>
            <PropertiesName>{kiririn`Phone:`}</PropertiesName>
            <PropertiesValue>{'+7 929 934‑21‑99'}</PropertiesValue>
        </PropertiesProperty>
        <PropertiesProperty>
            <PropertiesName>{kiririn`Mail:`}</PropertiesName>
            <PropertiesValue>
                <a href={'mailto:miyaokamarina@gmail.com'}>{'miyaokamarina@gmail.com'}</a>
            </PropertiesValue>
        </PropertiesProperty>
        <PropertiesProperty>
            <PropertiesName>{kiririn`Telegram:`}</PropertiesName>
            <PropertiesValue>
                <a href={'https://t.me/miyaokamarina'}>{'@miyaokamarina'}</a>
            </PropertiesValue>
        </PropertiesProperty>
        <PropertiesProperty>
            <PropertiesName>{kiririn`Twitter:`}</PropertiesName>
            <PropertiesValue>
                <a href={'https://twitter.com/miyaokamarina'}>{'@miyaokamarina'}</a>
            </PropertiesValue>
        </PropertiesProperty>
    </>
));
