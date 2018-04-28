import { Locale, addLocale, etc, cardinal, date } from '../kiririntl';

export const en: Locale = {
    tag: 'en',
    title: 'English',
    fallbacks: [],

    messages: new Map<string, any>([
        ['Yuri Zemskov, the JS magical girl', 'Yuri Zemskov, the JS magical girl'],
        ['[[age]]', cardinal`${([x], format) => format(x)}`],
        [
            'from $#',
            cardinal`from ${([x], format) =>
                format(x, {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                })}`,
        ],
        ['By category', 'By category'],
        ['By level', 'By level'],
        ['[[XP_AT]]', etc`at ${([x]) => x}, ${([, x]) => x}, `],
        [
            'since # till #',
            date`since ${([since], format) =>
                format(since, {
                    year: 'numeric',
                    month: 'long',
                })} till ${([, till], format) =>
                format(till, {
                    year: 'numeric',
                    month: 'long',
                })}`,
        ],
        ['GitHub // header', 'GitHub'],
        ['About // header', 'About'],
    ]),
};

addLocale(en);
