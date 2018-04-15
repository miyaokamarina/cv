// @flow

import type { Node } from 'react';

import type { WeakQuasi } from './plural.types';

export type Locale = {|
    locale: string,
    name: string,
    messages: {
        [string]: WeakQuasi,
    },
    fallback: string[],
|};

export type Locales = {
    [string]: Locale,
};

type SimpleTranslator = (string[], ...mixed[]) => Node;
type ParametrizedTranslator = (...mixed[]) => SimpleTranslator;

export type Translator = SimpleTranslator & ParametrizedTranslator & { lang: string };
