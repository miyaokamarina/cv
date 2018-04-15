// @flow

import * as React from 'react';
import { css } from 'emotion';

import { Section } from '~/kit/Section';
import { H2 } from '~/kit/H2';
import { Intl } from '~/kit/Intl';
import { Properties } from '~/kit/Properties';
import { PropertiesProperty } from '~/kit/PropertiesProperty';
import { PropertiesName } from '~/kit/PropertiesName';
import { PropertiesValue } from '~/kit/PropertiesValue';

export const QuickFacts = () => (
    <Intl>
        {__ => (
            <Section>
                <H2>{__`Quick facts`}</H2>
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
                        <PropertiesName>{__`Fav editors:`}</PropertiesName>
                        <PropertiesValue>{__`IntelliJ IDEA, Visual Studio Code.`}</PropertiesValue>
                    </PropertiesProperty>
                    <PropertiesProperty>
                        <PropertiesName>{__`Fav distro:`}</PropertiesName>
                        <PropertiesValue>{__`Antergos + KDE.`}</PropertiesValue>
                    </PropertiesProperty>
                    <PropertiesProperty>
                        <PropertiesName>{__`Fav mobile OS:`}</PropertiesName>
                        <PropertiesValue>{__`Symbian 9.3.`}</PropertiesValue>
                    </PropertiesProperty>
                    <PropertiesProperty>
                        <PropertiesName>{__`Unrequited love:`}</PropertiesName>
                        <PropertiesValue>{__`Maths.`}</PropertiesValue>
                    </PropertiesProperty>
                    <PropertiesProperty>
                        <PropertiesName>{__`Currently fav artists:`}</PropertiesName>
                        <PropertiesValue>{__`The Enigma TNG, Zedd.`}</PropertiesValue>
                    </PropertiesProperty>
                </Properties>
            </Section>
        )}
    </Intl>
);
