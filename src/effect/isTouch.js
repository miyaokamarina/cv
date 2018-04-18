// @flow

let mql: ?MediaQueryList = null;
let moz: ?MediaQueryList = null;

export const isTouch: (?(?boolean) => mixed) => boolean = setter => {
    // TODO: Detect using `TouchEvent`.

    if (!mql || !moz) {
        mql = matchMedia('(any-pointer: coarse)');
        moz = matchMedia('(-moz-touch-enabled)');

        return isTouch(setter);
    }

    if (setter) {
        mql.addListener((event: MediaQueryListEvent) => {
            setter(event.matches);
        });
    }

    return mql.matches || 'ontouchstart' in window;
};
