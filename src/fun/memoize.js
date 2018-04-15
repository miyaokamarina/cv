// @flow

import { equals } from '~/fun/equals';

const cache = new Map();

export const memoize: <A>(A) => A = f_ => {
    const f: HACK = f_;

    if (!cache.has(f)) {
        cache.set(f, []);
    }

    return ((...args) => {
        const entry: Array<HACK> = (cache: HACK).get(f);
        const i = entry.findIndex(x => equals(x.args, args));

        if (i === -1) {
            const r = f(...args);

            entry.push({ args, r });

            return r;
        } else {
            return entry[i].r;
        }
    }: HACK);
};
