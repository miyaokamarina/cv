// @flow

import { addLocale } from '~/kiririntl';

import type { Locale } from '~/kiririntl';

export const ru: Locale = {
    tag: 'ru',
    title: 'Русский',
    fallbacks: ['en'],
};

addLocale(ru);
