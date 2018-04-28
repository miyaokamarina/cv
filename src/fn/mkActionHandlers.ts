import * as React from 'react';

export const mkActionHandlers = (f?: void | null | (() => any)) => ({
    onClick: () => {
        if (f) {
            setTimeout(f);
        }
    },
    onKeyPress: (event: React.SyntheticEvent<HTMLElement>) => {
        if (f && ((event.nativeEvent as KeyboardEvent).code === 'Space' || (event.nativeEvent as KeyboardEvent).code === 'Enter')) {
            event.preventDefault();
            setTimeout(f);
        }
    },
});
