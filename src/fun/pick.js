// @flow

export const pick = <Key: string | number, Value, Object: { [Key]: Value }>(props: Key[], obj: Object) => props.reduce((result, key) => {
    if (key in obj) {
        result[key] = obj[key];
    }

    return result;
}, {});
