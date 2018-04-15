// @flow

import * as React from 'react';

import { last } from '~/fun/last';
import { memoize } from '~/fun/memoize';

import type { Node } from 'react';

import type { FormatDate, FormatNumber, SelectOrdinal, SelectPlural } from './formatMessage.types';
import type { StrictMessage, WeakMessage } from './plural.types';

const mkDateFormatter = memoize((locale, options) => new Intl.DateTimeFormat(locale, options));
const mkNumFormatter = memoize((locale, options) => new Intl.NumberFormat(locale, options));
const mkOrdinal = memoize((locale, options) => new Intl.PluralRules(locale, { ...options, type: 'ordinal' }));
const mkCardinal = memoize((locale, options) => new Intl.PluralRules(locale, { ...options, type: 'cardinal' }));

const date: string => FormatDate = locale => (v, options) => mkDateFormatter(locale, options).format(v);
const number: string => FormatNumber = locale => (v, options) => mkNumFormatter(locale, options).format(v);

const ordinal: string => SelectOrdinal = locale => (v, options) => mkOrdinal(locale, options).select(v);
const plural: string => SelectPlural = locale => (v, options) => mkCardinal(locale, options).select(v);

export const formatMessage: (WeakMessage, mixed[]) => Node = (input, values) => {
    if (!(input: HACK) || typeof (input: HACK).message !== 'object') {
        return (input: HACK).message;
    } else if (!Array.isArray((input: HACK).message.qs)) {
        return (input: HACK).message;
    } else {
        const {
            locale: { locale },
            message,
        } = ((input: HACK): StrictMessage);
        const parts = [];

        for (let i = 0; i < message.es.length; i++) {
            parts.push(message.qs[i]);

            const v = values[i];

            const f = message.es[i];
            const pre = f(
                v,
                {
                    date: date(locale),
                    number: number(locale),
                },
                values,
            );

            if (typeof pre !== 'object' || React.isValidElement(pre) || pre === null) {
                parts.push(pre);
            } else if ((Symbol.for((v: HACK)): HACK) in pre) {
                parts.push((pre: HACK)[Symbol.for((v: HACK))]);
            } else if ((input: HACK).message.plural) {
                parts.push((pre: HACK)[plural(locale)((v: HACK))]);
            } else {
                parts.push((pre: HACK)[ordinal(locale)((v: HACK))]);
            }
        }

        parts.push(last(message.qs));

        return parts;
    }
};
