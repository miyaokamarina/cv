// @flow

import * as React from 'react';

import { PropertiesProperty } from '~/kit/PropertiesProperty';
import { PropertiesName } from '~/kit/PropertiesName';
import { PropertiesValue } from '~/kit/PropertiesValue';
import { withKiririn } from '~/kiririntl';

const SALARY = 2500;

export const RightTable = withKiririn(({ kiririn }) => (
    <>
        <PropertiesProperty>
            <PropertiesName>{kiririn`Level:`}</PropertiesName>
            <PropertiesValue>{kiririn`magical girl`}</PropertiesValue>
        </PropertiesProperty>
        <PropertiesProperty>
            <PropertiesName>{kiririn`Position:`}</PropertiesName>
            <PropertiesValue>{kiririn`React developer`}</PropertiesValue>
        </PropertiesProperty>
        <PropertiesProperty>
            <PropertiesName>{kiririn`Salary (monthly):`}</PropertiesName>
            <PropertiesValue>{kiririn(SALARY)`from $#`}</PropertiesValue>
        </PropertiesProperty>
        <PropertiesProperty>
            <PropertiesName>{kiririn`Employment:`}</PropertiesName>
            <PropertiesValue>{kiririn`full time`}</PropertiesValue>
        </PropertiesProperty>
        <PropertiesProperty>
            <PropertiesName>{kiririn`Work location:`}</PropertiesName>
            <PropertiesValue>{kiririn`office, remote`}</PropertiesValue>
        </PropertiesProperty>
        <PropertiesProperty>
            <PropertiesName>{kiririn`GitHub:`}</PropertiesName>
            <PropertiesValue>
                <a href={'https://github.com/miyaokamarina'}>{kiririn`@miyaokamarina`}</a>
            </PropertiesValue>
        </PropertiesProperty>
        <PropertiesProperty>
            <PropertiesName>{kiririn`GitHub (old):`}</PropertiesName>
            <PropertiesValue>
                <a href={'https://github.com/klippersubs'}>{kiririn`@aliceklipper`}</a>
            </PropertiesValue>
        </PropertiesProperty>
    </>
));
