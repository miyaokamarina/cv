// @flow

import { addLocale, cardinal, date, etc } from '~/kiririntl';

import type { Locale } from '~/kiririntl';

export const en: Locale = {
    tag: 'en',
    title: 'English',
    fallbacks: [],

    'Marina Miyaoka, the JS magical girl': 'Marina Miyaoka, the JS magical girl',
    '[[age]]': cardinal`${([x], format) => format(x)}`,
    'from $#': cardinal`from ${([x], format) =>
        format(x, {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        })}`,
    'By category': 'By category',
    'By level': 'By level',
    '[[XP_AT]]': etc`at ${([x]) => x}, ${([, x]) => x}, `,
    'since # till #': date`since ${([since], format) =>
        format(since, {
            year: 'numeric',
            month: 'long',
        })} till ${([, till], format) =>
        format(till, {
            year: 'numeric',
            month: 'long',
        })}`,
    'GitHub // header': 'GitHub',
    'About // header': 'About',
};

addLocale(en);
