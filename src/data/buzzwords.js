// @flow

import * as React from 'react';

import { setBuzzwords, setCategories } from '~/store';
import { MoneyMouth } from '~/emoji/MoneyMouth';
import { Sunglasses } from '~/emoji/Sunglasses';
import { CherryBlossom } from '~/emoji/CherryBlossom';
import { CrazyFace } from '~/emoji/CrazyFace';
import { NoMouth } from '~/emoji/NoMouth';
import { Fire } from '~/emoji/Fire';
import { YinYang } from '~/emoji/YinYang';
import { FlagJp } from '~/emoji/FlagJp';
import { FlagRu } from '~/emoji/FlagRu';
import { ExplodingHead } from '~/emoji/ExplodingHead';
import { ShintoShrine } from '~/emoji/ShintoShrine';

const categories = [
    {
        id: 'frontend',
        title: 'Frontend',
    },
    {
        id: 'backend',
        title: 'Backend',
    },
    {
        id: 'general',
        title: 'General',
    },
    {
        id: 'bestPractices',
        title: 'Best practices',
    },
    {
        id: 'personality',
        title: 'Personality',
    },
];

const buzzwords = [
    {
        title: 'ES6/7/8/9/∞',
        categories: ['general'],
        level: 'ok',
    },
    {
        title: 'Babel',
        categories: ['general'],
        level: 'ok',
    },
    {
        title: 'TypeScript',
        categories: ['general'],
        level: 'ok',
    },
    {
        title: 'Flow',
        categories: ['general'],
        level: 'ok',
    },
    {
        title: 'React',
        categories: ['frontend'],
        level: 'ok',
    },
    {
        title: 'Redux',
        categories: ['frontend'],
        level: 'ok',
    },
    {
        title: 'CSS-in-JS',
        categories: ['frontend'],
        level: 'info',
    },
    {
        title: 'styled-components',
        categories: ['frontend'],
        level: 'ok',
    },
    {
        title: 'HTML',
        categories: ['frontend'],
        level: 'info',
    },
    {
        title: 'CSS',
        categories: ['frontend'],
        level: 'info',
    },
    {
        title: 'Pug (Jade)',
        categories: ['frontend'],
        level: 'ok',
    },
    {
        title: 'LESS',
        categories: ['frontend'],
        level: 'ok',
    },
    {
        title: 'PostCSS',
        categories: ['frontend'],
        level: 'info',
    },
    {
        title: 'BEM',
        categories: ['frontend'],
        level: 'warning',
    },
    {
        title: 'SPA',
        categories: ['frontend'],
        level: 'info',
    },
    {
        title: 'PWA',
        categories: ['frontend'],
        level: 'error',
    },
    {
        title: 'Jest',
        categories: ['general'],
        level: 'info',
    },
    {
        title: 'webpack',
        categories: ['frontend'],
        level: 'ok',
    },
    {
        title: 'rollup.js',
        categories: ['general'],
        level: 'info',
    },
    {
        title: 'Socket.IO',
        categories: ['frontend', 'backend'],
        level: 'info',
    },
    {
        title: 'ESLint',
        categories: ['bestPractices'],
        level: 'ok',
    },
    {
        title: 'OOP',
        categories: ['general'],
        level: 'ok',
    },
    {
        title: 'FP',
        categories: ['general'],
        level: 'info',
    },
    {
        title: 'Haskell',
        categories: ['general'],
        level: 'warning',
    },
    {
        title: 'immutability',
        categories: ['bestPractices'],
        level: 'info',
    },
    {
        title: 'declarativity',
        categories: ['bestPractices'],
        level: 'info',
    },
    {
        title: 'i18n',
        categories: ['bestPractices', 'frontend'],
        level: 'info',
    },
    {
        title: 'a11y',
        categories: ['bestPractices', 'frontend'],
        level: 'warning',
    },
    {
        title: 'usability',
        categories: ['bestPractices'],
        level: 'info',
    },
    {
        title: 'responsive design',
        categories: ['bestPractices', 'frontend'],
        level: 'info',
    },
    {
        title: 'NodeJS',
        categories: ['backend'],
        level: 'ok',
    },
    {
        title: 'Express',
        categories: ['backend'],
        level: 'info',
    },
    {
        title: 'Koa',
        categories: ['backend'],
        level: 'warning',
    },
    {
        title: 'MongoDB',
        categories: ['backend'],
        level: 'warning',
    },
    {
        title: 'RethinkDB',
        categories: ['backend'],
        level: 'warning',
    },
    {
        title: 'Sequelize',
        categories: ['backend'],
        level: 'error',
    },
    {
        title: 'PostgreSQL',
        categories: ['backend'],
        level: 'error',
    },
    {
        title: 'Git',
        categories: ['general'],
        level: 'info',
    },
    {
        title: 'Conventional Commits',
        categories: ['bestPractices'],
        level: 'info',
    },
    {
        title: 'Linux',
        categories: ['general'],
        level: 'info',
    },
    {
        title: 'Docker',
        categories: ['backend'],
        level: 'error',
    },
    {
        title: 'OAuth',
        categories: ['frontend', 'backend'],
        level: 'info',
    },
    {
        title: (
            <>
                {'overengineering'} <ExplodingHead />
            </>
        ),
        key: 'overengineering',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: 'hetero',
        categories: ['personality'],
        level: 'primary',
        rainbow: true,
    },
    {
        title: (
            <>
                {'vodka'} <FlagRu />
            </>
        ),
        key: 'vodka',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'anime'} <CherryBlossom />
            </>
        ),
        key: 'anime',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'東方'} <YinYang />
            </>
        ),
        key: 'touhou',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'weeb'} <FlagJp />
            </>
        ),
        key: 'weeb',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'discordianism'} <ShintoShrine />
            </>
        ),
        key: 'discordianism',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'perfectionism'} <Fire />
            </>
        ),
        key: 'perfectionism',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'narcissism'} <Sunglasses />
            </>
        ),
        key: 'narcissism',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'egoism'} <MoneyMouth />
            </>
        ),
        key: 'egoism',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'pohuism'} <NoMouth />
            </>
        ),
        key: 'pohuism',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'pizdabolism'} <CrazyFace />
            </>
        ),
        key: 'pizdabolism',
        categories: ['personality'],
        level: 'primary',
    },
];

setCategories(categories);
setBuzzwords(buzzwords);
