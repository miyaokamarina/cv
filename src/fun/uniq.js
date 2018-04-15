// @flow

export const uniq = <A>(arr: A[]): A[] => [...new Set(arr)];
