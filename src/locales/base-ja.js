// @flow

import { addLocale } from '~/kiririntl';

import type { Locale } from '~/kiririntl';

export const ja: Locale = {
    tag: 'ja',
    title: '日本語',
    fallbacks: ['en'],
};

addLocale(ja);
