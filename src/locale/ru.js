// @flow

import { plural } from '../fun/plural';

import type { Locale } from '../fun/translator';

export const ru: Locale = {
    locale: 'ru',
    name: 'Русский',
    messages: {
        Theme: 'Оформление',
        dark: 'тёмное',
        light: 'светлое',

        //
        // Header
        //

        'Marina Miyaoka, the JS magical girl': 'Марина Мияока, JS‑волшебница',

        //
        // Properties, left table
        //

        'Name:': 'Имя:',
        'Age:': 'Возраст:',
        'Location:': 'Город:',
        'Phone:': 'Телефон:',
        'Mail:': 'Почта:',
        'Telegram:': 'Телеграм:',
        'Twitter:': 'Твиттер:',

        'Yuri Zemskov': 'Юрий Земсков',
        '[[age]]': plural`${(x, { number }) => number(x)}`,
        Moscow: 'Москва',

        //
        // Properties, right table
        //

        'Level:': 'Левел:',
        'Position:': 'Позиция:',
        'Salary (monthly):': 'Зарплата (мес.):',
        'Employment:': 'Занятость:',
        'Work location:': 'Локация работы:',
        'GitHub:': 'Жыдхаб:',
        'GitHub (old):': 'Жыдхаб (старый):',

        'magical girl': 'волшебница',
        'React developer': 'Реакт‑разработчик',
        'from $#': plural`от ${(x, { number }) =>
            number(x, {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
            })}`,
        'full time': 'полная',
        'office, remote': 'офис, удалёнка',

        //
        // Buzzwords
        //

        Buzzwords: 'Баззворды',

        'Buzzwords filter': 'Фильтр баззвордов',

        'By category': 'По категориям',

        Frontend: 'Фронтенд',
        Backend: 'Бекенд',
        General: 'Общее',
        'Best practices': 'Лучшие практики',
        Personality: 'Особенности',

        'By level': 'По уровню',

        'Fucking great': 'Почти совсем идеально',
        'Magical girl': 'Волшебница',
        'So-so': 'Так себе',
        'Fucking bad': 'Откровенно плохо',
        Unrelated: 'Не имеет отношения к работе',

        //
        // Xp
        //

        Belgorod: 'Белгород',

        'Work experience': 'Опыт работы',

        '[[XP_AT]]': plural`${x => x}, ${x => x}, `,
        'since # till #': plural`${(x, { date }) =>
            date(x, {
                year: 'numeric',
                month: 'long',
            })} – ${(x, { date }) =>
            date(x, {
                year: 'numeric',
                month: 'long',
            })}`,

        'Responsibilities:': 'Обязанности:',
    },
    fallback: ['en'],
};
