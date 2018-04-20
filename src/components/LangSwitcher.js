// @flow

import * as React from 'react';

import { Buttons } from '~/kit/Buttons';
import { ButtonsButton } from '~/kit/ButtonsButton';
import { mkActionHandlers } from '~/fun/mkActionHandlers';
import { withKiririn, setLocale } from '~/kiririntl';

export const LangSwitcher = withKiririn(({ kiririn }) => (
    <Buttons>
        {Object.keys(kiririn.locales).map(lang => (
            <ButtonsButton key={lang} active={kiririn.current === lang} {...mkActionHandlers(() => setLocale(lang))}>
                {kiririn.locales[lang].title}
            </ButtonsButton>
        ))}
    </Buttons>
));
