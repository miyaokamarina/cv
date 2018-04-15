// @flow

import * as React from 'react';

import { Intl } from '~/kit/Intl';
import { PropertiesProperty } from '~/kit/PropertiesProperty';
import { PropertiesName } from '~/kit/PropertiesName';
import { PropertiesValue } from '~/kit/PropertiesValue';

const SALARY = 2500;

export const RightTable = () => (
    <Intl>
        {__ => (
            <>
                <PropertiesProperty>
                    <PropertiesName>{__`Level:`}</PropertiesName>
                    <PropertiesValue>{__`magical girl`}</PropertiesValue>
                </PropertiesProperty>
                <PropertiesProperty>
                    <PropertiesName>{__`Position:`}</PropertiesName>
                    <PropertiesValue>{__`React developer`}</PropertiesValue>
                </PropertiesProperty>
                <PropertiesProperty>
                    <PropertiesName>{__`Salary (monthly):`}</PropertiesName>
                    <PropertiesValue>{__(SALARY)`from $#`}</PropertiesValue>
                </PropertiesProperty>
                <PropertiesProperty>
                    <PropertiesName>{__`Employment:`}</PropertiesName>
                    <PropertiesValue>{__`full time`}</PropertiesValue>
                </PropertiesProperty>
                <PropertiesProperty>
                    <PropertiesName>{__`Work location:`}</PropertiesName>
                    <PropertiesValue>{__`office, remote`}</PropertiesValue>
                </PropertiesProperty>
                <PropertiesProperty>
                    <PropertiesName>{__`GitHub:`}</PropertiesName>
                    <PropertiesValue>
                        <a href={'https://github.com/miyaokamarina'}>{__`@miyaokamarina`}</a>
                    </PropertiesValue>
                </PropertiesProperty>
                <PropertiesProperty>
                    <PropertiesName>{__`GitHub (old):`}</PropertiesName>
                    <PropertiesValue>
                        <a href={'https://github.com/klippersubs'}>{__`@aliceklipper`}</a>
                    </PropertiesValue>
                </PropertiesProperty>
            </>
        )}
    </Intl>
);
