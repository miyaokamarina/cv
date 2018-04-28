import * as React from 'react';

import { Buttons } from '../kit/Buttons';
import { mkActionHandlers } from '../fn/mkActionHandlers';
import { withTl, setLocale, LanguageTag, Locale } from '../kiririntl';
import { cn } from '../fn/cn';

export const LangSwitcher = withTl(({ tl }) => (
    <Buttons>
        {(Object.keys(tl.locales) as LanguageTag[]).map(lang => (
            <Buttons.Item key={lang} active={tl.current === lang} {...cn(`LangSwitcher__Item_lang_${lang}`)} {...mkActionHandlers(() => setLocale(lang))}>
                {(tl.locales[lang] as Locale).title}
            </Buttons.Item>
        ))}
    </Buttons>
));
