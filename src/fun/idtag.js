// @flow

import { zipWith } from 'ramda';

const end = Symbol('end');

export const idtag: (string[], ...mixed[]) => string = (qs, ...es) => zipWith((q, e: TODO) => `${q}${e === end ? '' : e}`, qs, [...es, end]).join('');
