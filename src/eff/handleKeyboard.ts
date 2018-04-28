let keyboard = false;
let clicks = 0;

const MAX_CLICKS = 2;

const html: HTMLHtmlElement = document.querySelector('html') as any;

const setKeyboard = (keyboard: boolean) => {
    if (keyboard) {
        html.classList.add('keyboard');
    } else {
        html.classList.remove('keyboard');
    }
};

export const handleKeyboard = () => {
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

            setKeyboard(keyboard);
        }
    });

    window.addEventListener('mousedown', () => {
        if (clicks < MAX_CLICKS) {
            clicks++;
        } else {
            keyboard = false;

            setKeyboard(keyboard);
        }
    });

    return keyboard;
};

handleKeyboard();
