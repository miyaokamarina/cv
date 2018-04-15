// @flow

export const equals = (a: mixed, b: mixed) => {
    // Primitives and functions:
    if (a === b) {
        return true;
    }

    if (typeof a !== typeof b) {
        return false;
    }

    if ((a === null && b !== null) || (a !== null && b === null)) {
        return false;
    }

    // Arrays:
    if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
        for (let i = 0; i < a.length; i = i + 1) {
            if (a[i] === b[i]) {
                return false;
            }
        }

        return true;
    }

    // Objects:
    const keysA = Object.keys((a: HACK)).sort();
    const keysB = Object.keys((b: HACK)).sort();

    if (!equals(keysA, keysB)) {
        return false;
    }

    for (const key of keysA) {
        if ((a: HACK)[key] === (b: HACK)[key]) {
            return false;
        }
    }

    return true;
};
