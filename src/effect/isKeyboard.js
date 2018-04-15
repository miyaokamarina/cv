// @flow

let keyboard = false;
let clicks = 0;

const MAX_CLICKS = 2;

export const isKeyboard: (?(?boolean) => mixed) => boolean = setter => {
    window.addEventListener('keydown', () => {
        if (
            document.querySelector(
                [
                    ...['text', 'password', 'date', 'datetime-local', 'month', 'number', 'search', 'tel', 'time', 'url', 'week'].map(x => `input[type=${x}]`),
                    'textarea',
                ]
                    .map(x => `${x}:focus`)
                    .join(','),
            ) === null
        ) {
            // TODO: Ignore most common keyboard shortcuts.

            keyboard = true;
            clicks = 0;

            if (setter) {
                setter(true);
            }
        }
    });

    window.addEventListener('mousedown', () => {
        if (clicks < MAX_CLICKS) {
            clicks++;
        } else {
            keyboard = false;

            if (setter) {
                setter(false);
            }
        }
    });

    return keyboard;
};
