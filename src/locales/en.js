// @flow

import { addLocale } from '~/kiririntl';

import type { Locale } from '~/kiririntl';

export const en: Locale = {
    tag: 'en',
    title: 'English',
    fallbacks: [],
};

addLocale(en);
