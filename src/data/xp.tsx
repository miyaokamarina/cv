import * as React from 'react';

import { setXps } from '../store';
import { addLocale, Locale } from '../kiririntl';

export type Xp = {
    key: string;
    company: string;
    location: string;
    position: string;
    since: Date;
    till: Date;
    responsibilities: React.ReactNode;
};

const xp: Xp[] = [
    {
        key: 'quokka',
        company: 'Quokka',
        position: 'JavaScript developer',
        location: 'Moscow',
        since: new Date('2017-10-01T00:00:00.000Z'),
        till: new Date('2018-02-01T00:00:00.000Z'),
        responsibilities: (
            <>
                {`Parser and compiler internals development (for our reactive framework's DSL; also nearly system language for our OS), `}
                {'some tasks on the framework core itself and on the our quasi-OS.'}
            </>
        ),
    },
    {
        key: 'itsph',
        company: 'IT Sphere',
        position: 'NodeJS developer',
        location: 'Moscow',
        since: new Date('2017-07-01T00:00:00.000Z'),
        till: new Date('2017-10-01T00:00:00.000Z'),
        responsibilities: (
            <>
                {'Microservices development (NodeJS), fuckery with poorly documented chinese hardware. '}
                {`Sometimes solving React tasks for next door dept's customers.`}
            </>
        ),
    },
    {
        key: 'ratengoods',
        company: 'Rate&Goods',
        location: 'Moscow',
        position: 'Frontend developer',
        since: new Date('2017-06-01T00:00:00.000Z'),
        till: new Date('2017-06-01T00:00:00.000Z'),
        responsibilities: <>{'Website/webapp development, refactoring, fixing bugs, delivering new features. Etc.'}</>,
    },
    {
        key: 'no-name startup',
        company: 'no-name startup',
        location: 'Belgorod',
        position: '“Full-stack developer”',
        since: new Date('2016-07-01T00:00:00.000Z'),
        till: new Date('2016-11-01T00:00:00.000Z'),
        responsibilities: (
            <>
                {'Planning, prototyping and implementing any crazy ideas. '}
                {'Development of a service with NodeJS (Express, MongoDB; experimenting with Koa and RethinkDB), '}
                {'design of basic concepts of recommender system, '}
                {'planning and basic design of social AR application. '}
                {'Epic fail at all.'}
            </>
        ),
    },
];

const en: Locale = {
    tag: 'en',
    title: 'English',
    fallbacks: [],
    messages: new Map<string, any>([
        ['Quokka', <a key={3} href={'http://quokka.pub/'}>{'Quokka'}</a>],
        ['IT Sphere', <a key={2} href={'https://itsph.ru/'}>{'IT Sphere Corp.'}</a>],
        ['Rate&Goods', <a key={1} href={'https://ratengoods.com/'}>{'Rate&Goods'}</a>],
        ['no-name startup', 'student startup'],

        ['JavaScript developer', 'JavaScript developer'],
        ['NodeJS developer', 'NodeJS developer'],
        ['Frontend developer', 'Frontend developer'],
        ['“Full-stack developer”', '“Full-stack developer”'],
    ]),
};

// const ja: Locale = {
//     tag: 'ja-u-nu-fullwide',
//     title: '日本語',
//     fallbacks: ['en'],
//     messages: new Map<string, any>([
//         ['Quokka', <a key={3} href={'http://quokka.pub/'}>{'Quokka'}</a>],
//         ['IT Sphere', <a key={2} href={'https://itsph.ru/'}>{'IT Sphere Corp.'}</a>],
//         ['Rate&Goods', <a key={1} href={'https://ratengoods.com/'}>{'Rate&Goods'}</a>],
//         ['no-name startup', '大学のスタートアップ'],
//
//         ['JavaScript developer', 'JavaScript デベロッパー'],
//         ['NodeJS developer', 'NodeJS デベロッパー'],
//         ['Frontend developer', 'フロントエンドデベロッパー'],
//         ['“Full-stack developer”', '「フルスタックエンジニア」'],
//     ]),
// };

const ru: Locale = {
    tag: 'ru',
    title: 'Русский',
    fallbacks: ['en'],
    messages: new Map<string, any>([
        ['Quokka', <a key={3} href={'http://quokka.pub/'}>{'Quokka'}</a>],
        ['IT Sphere', <a key={2} href={'https://itsph.ru/'}>{'АО «АйТи Сфера»'}</a>],
        ['Rate&Goods', <a key={1} href={'https://ratengoods.com/'}>{'Rate&Goods'}</a>],
        ['no-name startup', 'студенческий стартап'],

        ['JavaScript developer', 'JavaScript-разработчик'],
        ['NodeJS developer', 'NodeJS-разработчик'],
        ['Frontend developer', 'Фронтенд-разработчик'],
        ['“Full-stack developer”', '«Фуллстек-разработчик»'],
    ]),
};

setXps(xp);
addLocale(en);
// addLocale(ja);
addLocale(ru);
