// @flow

import { log } from '~/log';
import { media } from '~/data/config';
import { createMediaQuery } from '~/fun/createMediaQuery';

import type { Size } from '~/data/config';

const mqls: Map<Size, MediaQueryList> = new Map();

export const sizes: (Size, ?(Size, ?boolean) => mixed) => boolean = (size, setter) => {
    if (!mqls.has(size)) {
        mqls.set(size, matchMedia(createMediaQuery(media[size])));

        return sizes(size, setter);
    }

    const mql: MediaQueryList = (mqls.get(size): HACK);

    if (setter) {
        mql.addEventListener('change', (event: MediaQueryListEvent) => {
            setter(size, event.matches);
        });
    }

    if (!setter) {
        log.silly(mql);
    }

    return mql.matches;
};
