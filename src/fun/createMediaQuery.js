// @flow

export const createMediaQuery: ([number, number]) => string = ([min, max]) => {
    if (max === Infinity) {
        return `only screen and (min-width: ${min}px)`;
    } else {
        return `only screen and (min-width: ${min}px) and (max-width: ${max}px)`;
    }
};
