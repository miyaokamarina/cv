// @flow

import * as React from 'react';
import { css } from 'emotion';

import { Section } from '~/kit/Section';
import { H2 } from '~/kit/H2';
import { Properties } from '~/kit/Properties';
import { PropertiesProperty } from '~/kit/PropertiesProperty';
import { PropertiesName } from '~/kit/PropertiesName';
import { PropertiesValue } from '~/kit/PropertiesValue';
import { withKiririn } from '~/kiririntl';

export const QuickFacts = withKiririn(({ kiririn }) => (
    <Section>
        <H2>{kiririn`Quick facts`}</H2>
        <Properties
            css={css`
                width: 100%;

                & > div > dt {
                    width: 45%;
                    text-align: right;
                }

                & > div > dd {
                    width: 55%;
                }
            `}
        >
            <PropertiesProperty>
                <PropertiesName>{kiririn`Fav editors:`}</PropertiesName>
                <PropertiesValue>{kiririn`IntelliJ IDEA, Visual Studio Code.`}</PropertiesValue>
            </PropertiesProperty>
            <PropertiesProperty>
                <PropertiesName>{kiririn`Fav distro:`}</PropertiesName>
                <PropertiesValue>{kiririn`Antergos + KDE.`}</PropertiesValue>
            </PropertiesProperty>
            <PropertiesProperty>
                <PropertiesName>{kiririn`Fav mobile OS:`}</PropertiesName>
                <PropertiesValue>{kiririn`Symbian 9.3.`}</PropertiesValue>
            </PropertiesProperty>
            <PropertiesProperty>
                <PropertiesName>{kiririn`Unrequited love:`}</PropertiesName>
                <PropertiesValue>{kiririn`Maths.`}</PropertiesValue>
            </PropertiesProperty>
            <PropertiesProperty>
                <PropertiesName>{kiririn`Currently fav artists:`}</PropertiesName>
                <PropertiesValue>{kiririn`The Enigma TNG, Zedd.`}</PropertiesValue>
            </PropertiesProperty>
        </Properties>
    </Section>
));
