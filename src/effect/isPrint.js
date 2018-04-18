// @flow

let mql: ?MediaQueryList = null;

export const isPrint: (?(?boolean) => mixed) => boolean = setter => {
    if (!mql) {
        mql = matchMedia('print');

        return isPrint(setter);
    }

    if (setter) {
        mql.addListener((event: MediaQueryListEvent) => {
            setter(event.matches);
        });
    }

    return mql.matches;
};
