// @flow

import * as React from 'react';

import { Intl } from '~/kit/Intl';
import { Buttons } from '~/kit/Buttons';
import { ButtonsButton } from '~/kit/ButtonsButton';
import { locales } from '~/data/locales';
import { setLang } from '~/store';
import { mkActionHandlers } from '~/fun/mkActionHandlers';

export const LangSwitcher = () => (
    <Intl>
        {__ => (
            <Buttons>
                {Object.keys(locales).map(lang => (
                    <ButtonsButton key={lang} active={__.lang === lang} {...mkActionHandlers(() => setLang(lang))}>
                        {locales[lang].name}
                    </ButtonsButton>
                ))}
            </Buttons>
        )}
    </Intl>
);
