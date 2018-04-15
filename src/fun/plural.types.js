// @flow

import type { Node } from 'react';

import type { FormatDate, FormatNumber } from './formatMessage.types';
import type { Locale } from './translator.types';

export type WeakQuasi = Node | Quasi;

export type Interpolation = (mixed, {| number: FormatNumber, date: FormatDate |}, mixed[]) => Node;

export type Quasi = {|
    qs: string[],
    es: Interpolation[],
    plural?: ?boolean,
|};

export type Message = {|
    locale: Locale,
    message: WeakQuasi,
|};

export type StrictMessage = {|
    locale: Locale,
    message: Quasi,
|};

export type WeakMessage = Node | Message;
