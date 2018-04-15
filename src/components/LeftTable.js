// @flow

import * as React from 'react';

import { Intl } from '~/kit/Intl';
import { PropertiesProperty } from '~/kit/PropertiesProperty';
import { PropertiesName } from '~/kit/PropertiesName';
import { PropertiesValue } from '~/kit/PropertiesValue';

const AGE = 24;

export const LeftTable = () => (
    <Intl>
        {__ => (
            <>
                <PropertiesProperty>
                    <PropertiesName>{__`Name:`}</PropertiesName>
                    <PropertiesValue>{__`Yuri Zemskov`}</PropertiesValue>
                </PropertiesProperty>
                <PropertiesProperty>
                    <PropertiesName>{__`Age:`}</PropertiesName>
                    <PropertiesValue>{__(AGE)`[[age]]`}</PropertiesValue>
                </PropertiesProperty>
                <PropertiesProperty>
                    <PropertiesName>{__`Location:`}</PropertiesName>
                    <PropertiesValue>{__`Moscow`}</PropertiesValue>
                </PropertiesProperty>
                <PropertiesProperty>
                    <PropertiesName>{__`Phone:`}</PropertiesName>
                    <PropertiesValue>{'+7 929 934‑21‑99'}</PropertiesValue>
                </PropertiesProperty>
                <PropertiesProperty>
                    <PropertiesName>{__`Mail:`}</PropertiesName>
                    <PropertiesValue>
                        <a href={'mailto:miyaokamarina@gmail.com'}>{'miyaokamarina@gmail.com'}</a>
                    </PropertiesValue>
                </PropertiesProperty>
                <PropertiesProperty>
                    <PropertiesName>{__`Telegram:`}</PropertiesName>
                    <PropertiesValue>
                        <a href={'https://t.me/miyaokamarina'}>{'@miyaokamarina'}</a>
                    </PropertiesValue>
                </PropertiesProperty>
                <PropertiesProperty>
                    <PropertiesName>{__`Twitter:`}</PropertiesName>
                    <PropertiesValue>
                        <a href={'https://twitter.com/miyaokamarina'}>{'@miyaokamarina'}</a>
                    </PropertiesValue>
                </PropertiesProperty>
            </>
        )}
    </Intl>
);
