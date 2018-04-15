// @flow

import { plural } from '~/fun/plural';

import type { Locale } from '../fun/translator';

export const en: Locale = {
    locale: 'en',
    name: 'English',
    messages: {
        Theme: 'Theme',
        dark: 'dark',
        light: 'light',

        //
        // Header
        //

        'Marina Miyaoka, the JS magical girl': 'Marina Miyaoka, the JS magical girl',

        //
        // Properties, left table
        //

        'Name:': 'Name:',
        'Age:': 'Age:',
        'Location:': 'Location:',
        'Phone:': 'Phone:',
        'Mail:': 'Mail:',
        'Telegram:': 'Telegram:',
        'Twitter:': 'Twitter:',

        'Yuri Zemskov': 'Yuri Zemskov',
        '[[age]]': plural`${(x, { number }) => number(x)}`,
        Moscow: 'Moscow',

        //
        // Properties, right table
        //

        'Level:': 'Level:',
        'Position:': 'Position:',
        'Salary (monthly):': 'Salary (monthly):',
        'Employment:': 'Employment:',
        'Work location:': 'Work location:',
        'GitHub:': 'GitHub:',
        'GitHub (old):': 'GitHub (old):',

        'magical girl': 'magical girl',
        'React developer': 'React developer',
        'from $#': plural`from ${(x, { number }) =>
            number(x, {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
            })}`,
        'full time': 'full time',
        'office, remote': 'office, remote',

        //
        // Buzzwords
        //

        Buzzwords: 'Buzzwords',

        'Buzzwords filter': 'Buzzwords filter',

        'By category': 'By category',

        Frontend: 'Frontend',
        Backend: 'Backend',
        General: 'General',
        'Best practices': 'Best practices',
        Personality: 'Personality',

        'By level': 'By level',

        'Fucking great': 'Fucking great',
        'Magical girl': 'Magical girl',
        'So-so': 'So-so',
        'Fucking bad': 'Fucking bad',
        Unrelated: 'Unrelated',

        //
        // Xp
        //

        'Work experience': 'Work experience',

        '[[XP_AT]]': plural`at ${x => x}, ${x => x}, `,
        'since # till #': plural`since ${(x, { date }) =>
            date(x, {
                year: 'numeric',
                month: 'long',
            })} till ${(x, { date }) =>
            date(x, {
                year: 'numeric',
                month: 'long',
            })}`,

        'Responsibilities:': 'Responsibilities:',

        //
        // Other
        //

        'GitHub // header': 'GitHub',
        'About // header': 'About'
    },
    fallback: [],
};
