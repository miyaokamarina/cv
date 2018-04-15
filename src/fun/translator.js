// @flow

import type { Node } from 'react';

import { uniq } from '~/fun/uniq';
import { bfs } from '~/fun/bfs';
import { idtag } from '~/fun/idtag';
import { isTagCall } from '~/fun/isTagCall';
import { formatMessage } from '~/fun/formatMessage';

import type { WeakMessage } from '~/fun/plural';

import type { Locale, Locales, Translator } from './translator.types';

export { Locale, Locales, Translator } from './translator.types';

export const resolveMessage: (Locales, string, string, string) => ?WeakMessage = (locales, fallback, lang, name) => {
    const lookupList: Locale[] = uniq([
        ...bfs(x => x.fallback.map(y => locales[y]), locales[lang]), // TODO: Handle nonexistent locales.
        locales[fallback],
    ]);

    for (const locale of lookupList) {
        if (name in locale.messages) {
            return {
                locale,
                message: locale.messages[name],
            };
        }
    }

    // TODO: Warn.
    return null;
};

const translate: (Locales, string, string, string[], mixed[], ?(mixed[])) => Node = (locales, fallback, lang, qs, es, vs = []) => {
    const name = idtag(qs, ...es);
    const input = resolveMessage(locales, fallback, lang, name);

    if (input === null) {
        // TODO: Warn.
        return name;
    } else {
        return formatMessage(input, (vs: HACK));
    }
};

export const translator: (Locales, string, string) => Translator = (locales, fallback, lang) => {
    const translator_ = (qs, ...es) => {
        if (isTagCall(qs, ...es)) {
            return (translate(locales, fallback, lang, (qs: HACK), es): HACK);
        } else {
            const vs = [qs, ...es];

            return ((qs, ...es) => translate(locales, fallback, lang, qs, es, vs): HACK);
        }
    };

    translator_.lang = lang;

    return translator_;
};
