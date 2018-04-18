// @flow

export const pick = <Key: string | number, Val, Obj: { [Key]: Val }>(props: Key[], obj: Obj) => props.reduce((result, key) => {
    if (key in obj) {
        result[key] = obj[key];
    }

    return result;
}, {});
