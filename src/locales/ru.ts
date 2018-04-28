import { Locale, addLocale, cardinal, date, etc } from '../kiririntl';

export const ru: Locale = {
    tag: 'ru',
    title: 'Русский',
    fallbacks: ['en'],

    messages: new Map<string, any>([
        ['Theme', 'Оформление'],
        ['dark', 'тёмное'],
        ['light', 'светлое'],

        //
        // Header
        //

        ['Marina Miyaoka, the JS magical girl', 'Юрий Земсков, JS‑волшебница'],

        //
        // Properties, left table
        //

        ['Name:', 'Имя:'],
        ['Age:', 'Возраст:'],
        ['Location:', 'Город:'],
        ['Phone:', 'Телефон:'],
        ['Mail:', 'Почта:'],
        ['Telegram:', 'Телеграм:'],
        ['Twitter:', 'Твиттер:'],

        ['Yuri Zemskov', 'Юрий Земсков'],
        ['[[age]]', cardinal`${([x], format) => format(x)}`],
        ['Moscow', 'Москва'],

        //
        // Properties, right table
        //

        ['Level:', 'Левел:'],
        ['Position:', 'Позиция:'],
        ['Salary (monthly):', 'Зарплата (мес.):'],
        ['Employment:', 'Занятость:'],
        ['Work location:', 'Локация работы:'],
        ['GitHub:', 'Жыдхаб:'],
        ['GitHub (old):', 'Жыдхаб (старый):'],

        ['magical girl', 'волшебница'],
        ['React developer', 'Реакт‑разработчик'],
        [
            'from $#',
            cardinal`от ${([x], format) =>
                format(x, {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                })}`,
        ],
        ['full time', 'полная'],
        ['on-site, remote', 'офис, удалёнка'],

        //
        // Buzzwords
        //

        ['Buzzwords', 'Баззворды'],

        ['Buzzwords filter', 'Фильтр баззвордов'],

        ['By category', 'По категориям'],

        ['Frontend', 'Фронтенд'],
        ['Backend', 'Бекенд'],
        ['General', 'Общее'],
        ['Best practices', 'Лучшие практики'],
        ['Personality', 'Особенности'],

        ['By level', 'По уровню'],

        ['Fucking great', 'Почти совсем идеально'],
        ['Magical girl', 'Волшебница'],
        ['So-so', 'Так себе'],
        ['Fucking bad', 'Откровенно плохо'],
        ['Unrelated', 'Не имеет отношения к работе'],

        //
        // Xps
        //

        ['Belgorod', 'Белгород'],

        ['Work experience', 'Опыт работы'],

        ['[[XP_AT]]', etc`${([company]) => company}, ${([, location]) => location}, `],
        [
            'since # till #',
            date`${([since], format) =>
                format(since, {
                    year: 'numeric',
                    month: 'long',
                })} – ${([, till], format) =>
                format(till, {
                    year: 'numeric',
                    month: 'long',
                })}`,
        ],

        ['Responsibilities:', 'Обязанности:'],

        //
        // Useless facts
        //

        ['Useless facts', 'Бесполезные факты'],
        ['Fav editors:', 'Любимые редакторы:'],
        ['Fav distro:', 'Любимый дистр:'],
        ['Fav mobile OS:', 'Любимая мобильная OS:'],
        ['Unrequited love:', 'Безответная любовь:'],
        ['Maths', 'Математика'],
        ['Currently fav artists:', 'Любимые артисты:'],

        //
        // Other
        //

        ['Bio', 'Био'],
        ['Breakdowns', 'Разборы'],
        ['GitHub // header', 'Жыдхаб'],
        ['Possibly impossible ambitions', 'Возможно невозможные амбиции'],
        ['About // header', 'О приложении'],
        ['Download PDF', 'Скачать PDF'],
        ['Yuri Zemskov (JS, React).pdf', 'Юрий Земсков (JS, React).pdf'],
    ]),
};

addLocale(ru);
