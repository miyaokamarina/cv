// @flow

export const mkActionHandlers: (?() => mixed) => { onClick: ?() => mixed, onKeyPress: ?() => mixed } = f => ({
    onClick: () => {
        if (f) {
            setTimeout(f);
        }
    },
    onKeyPress: ({ nativeEvent }: HACK) => {
        if (f && (nativeEvent.code === 'Space' || nativeEvent.code === 'Enter')) {
            nativeEvent.preventDefault();
            setTimeout(f);
        }
    },
});
