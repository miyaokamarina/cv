// @flow

export const isTagCall: (mixed, ...mixed[]) => boolean = (qs, ...es) => Array.isArray(qs) && Array.isArray((qs: HACK).raw) && Array.isArray(es);
