// @flow

import * as React from 'react';

import { setXp } from '~/store';

const xp = [
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
    {
        key: 'ratengoods',
        company: (
            <a key={'ratengoods'} href={'https://ratengoods.com/'}>
                {'Rate&Goods'}
            </a>
        ),
        location: 'Moscow',
        position: 'Frontend developer',
        since: new Date('2017-06-01T00:00:00.000Z'),
        till: new Date('2017-06-01T00:00:00.000Z'),
        responsibilities: <>{'Website/webapp development, refactoring, fixing bugs, delivering new features. Etc.'}</>,
    },
    {
        key: 'itsph',
        company: (
            <a key={'itsph'} href={'https://itsph.ru/'}>
                {'IT Sphere'}
            </a>
        ),
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
        key: 'quokka',
        company: (
            <a key={'quokka'} href={'http://quokka.pub/'}>
                {'Quokka'}
            </a>
        ),
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
];

setXp(xp);
