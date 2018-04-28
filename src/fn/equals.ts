export const equals = (a: any, b: any): boolean => {
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
    const keysA = Object.keys(a).sort();
    const keysB = Object.keys(b).sort();

    if (!equals(keysA, keysB)) {
        return false;
    }

    for (const key of keysA) {
        if (a[key] === b[key]) {
            return false;
        }
    }

    return true;
};
