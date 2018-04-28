import * as React from 'react';

import { setBuzzwords, setCategories } from '../store';
import { Level } from '../kit/Level';
import { Emoji } from '../kit/Emoji';

export type CategoryName = 'frontend' | 'backend' | 'general' | 'bestPractices' | 'personality';

export type Category = {
    id: CategoryName;
    title: string;
    visible: boolean;
};

export type Buzzword = {
    title: React.ReactNode;
    key: string;
    categories: CategoryName[];
    level: Level;
    rainbow?: true;
};

const categories: Category[] = [
    {
        id: 'frontend',
        title: 'Frontend',
        visible: true,
    },
    {
        id: 'backend',
        title: 'Backend',
        visible: true,
    },
    {
        id: 'general',
        title: 'General',
        visible: true,
    },
    {
        id: 'bestPractices',
        title: 'Best practices',
        visible: true,
    },
    {
        id: 'personality',
        title: 'Personality',
        visible: false,
    },
];

const buzzwords: Buzzword[] = [
    {
        title: 'ES6/7/8/9/∞',
        key: 'ES6/7/8/9/∞',
        categories: ['general'],
        level: 'ok',
    },
    {
        title: 'Babel',
        key: 'Babel',
        categories: ['general'],
        level: 'ok',
    },
    {
        title: 'TypeScript',
        key: 'TypeScript',
        categories: ['general'],
        level: 'ok',
    },
    {
        title: 'Flow',
        key: 'Flow',
        categories: ['general'],
        level: 'ok',
    },
    {
        title: 'React',
        key: 'React',
        categories: ['frontend'],
        level: 'ok',
    },
    {
        title: 'Redux',
        key: 'Redux',
        categories: ['frontend'],
        level: 'ok',
    },
    {
        title: 'CSS-in-JS',
        key: 'CSS-in-JS',
        categories: ['frontend'],
        level: 'info',
    },
    {
        title: 'CSS Modules',
        key: 'CSS Modules',
        categories: ['frontend'],
        level: 'info',
    },
    {
        title: 'styled-components',
        key: 'styled-components',
        categories: ['frontend'],
        level: 'info',
    },
    {
        title: 'HTML',
        key: 'HTML',
        categories: ['frontend'],
        level: 'info',
    },
    {
        title: 'CSS',
        key: 'CSS',
        categories: ['frontend'],
        level: 'info',
    },
    {
        title: 'Pug (Jade)',
        key: 'Pug (Jade)',
        categories: ['frontend'],
        level: 'ok',
    },
    {
        title: 'LESS',
        key: 'LESS',
        categories: ['frontend'],
        level: 'ok',
    },
    {
        title: 'PostCSS',
        key: 'PostCSS',
        categories: ['frontend'],
        level: 'info',
    },
    {
        title: 'BEM',
        key: 'BEM',
        categories: ['frontend'],
        level: 'info',
    },
    {
        title: 'SPA',
        key: 'SPA',
        categories: ['frontend'],
        level: 'info',
    },
    {
        title: 'PWA',
        key: 'PWA',
        categories: ['frontend'],
        level: 'error',
    },
    {
        title: 'Jest',
        key: 'Jest',
        categories: ['general'],
        level: 'info',
    },
    {
        title: 'webpack',
        key: 'webpack',
        categories: ['frontend'],
        level: 'ok',
    },
    {
        title: 'rollup.js',
        key: 'rollup.js',
        categories: ['general'],
        level: 'info',
    },
    {
        title: 'Socket.IO',
        key: 'Socket.IO',
        categories: ['frontend', 'backend'],
        level: 'warn',
    },
    {
        title: 'ESLint',
        key: 'ESLint',
        categories: ['bestPractices'],
        level: 'ok',
    },
    {
        title: 'OOP',
        key: 'OOP',
        categories: ['general'],
        level: 'ok',
    },
    {
        title: 'FP',
        key: 'FP',
        categories: ['general'],
        level: 'info',
    },
    {
        title: 'Haskell',
        key: 'Haskell',
        categories: ['general'],
        level: 'warn',
    },
    {
        title: 'immutability',
        key: 'immutability',
        categories: ['bestPractices'],
        level: 'info',
    },
    {
        title: 'declarativity',
        key: 'declarativity',
        categories: ['bestPractices'],
        level: 'info',
    },
    {
        title: 'i18n',
        key: 'i18n',
        categories: ['bestPractices', 'frontend'],
        level: 'info',
    },
    {
        title: 'a11y',
        key: 'a11y',
        categories: ['bestPractices', 'frontend'],
        level: 'warn',
    },
    {
        title: 'usability',
        key: 'usability',
        categories: ['bestPractices'],
        level: 'warn',
    },
    {
        title: 'responsive design',
        key: 'responsive design',
        categories: ['bestPractices', 'frontend'],
        level: 'info',
    },
    {
        title: 'NodeJS',
        key: 'NodeJS',
        categories: ['backend'],
        level: 'ok',
    },
    {
        title: 'Express',
        key: 'Express',
        categories: ['backend'],
        level: 'info',
    },
    {
        title: 'Koa',
        key: 'Koa',
        categories: ['backend'],
        level: 'warn',
    },
    {
        title: 'MongoDB',
        key: 'MongoDB',
        categories: ['backend'],
        level: 'warn',
    },
    {
        title: 'RethinkDB',
        key: 'RethinkDB',
        categories: ['backend'],
        level: 'warn',
    },
    {
        title: 'Sequelize',
        key: 'Sequelize',
        categories: ['backend'],
        level: 'error',
    },
    {
        title: 'PostgreSQL',
        key: 'PostgreSQL',
        categories: ['backend'],
        level: 'error',
    },
    {
        title: 'Git',
        key: 'Git',
        categories: ['general'],
        level: 'info',
    },
    {
        title: 'Conventional Commits',
        key: 'Conventional Commits',
        categories: ['bestPractices'],
        level: 'info',
    },
    {
        title: 'Linux',
        key: 'Linux',
        categories: ['general'],
        level: 'info',
    },
    {
        title: 'Docker',
        key: 'Docker',
        categories: ['backend'],
        level: 'error',
    },
    {
        title: 'OAuth',
        key: 'OAuth',
        categories: ['frontend', 'backend'],
        level: 'info',
    },
    {
        title: (
            <>
                {'overengineering'} <Emoji code={'1f92f'} />
            </>
        ),
        key: 'overengineering',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: 'hetero',
        key: 'hetero',
        categories: ['personality'],
        level: 'primary',
        rainbow: true,
    },
    {
        title: (
            <>
                {'vodka'} <Emoji code={'1f1f7-1f1fa'} />
            </>
        ),
        key: 'vodka',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'anime'} <Emoji code={'1f338'} />
            </>
        ),
        key: 'anime',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'touhou'} <Emoji code={'262f'} />
            </>
        ),
        key: 'touhou',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'weeb'} <Emoji code={'1f1ef-1f1f5'} />
            </>
        ),
        key: 'weeb',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'discordianism'} <Emoji code={'26ea'} />
            </>
        ),
        key: 'discordianism',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'perfectionism'} <Emoji code={'1f525'} />
            </>
        ),
        key: 'perfectionism',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'narcissism'} <Emoji code={'1f60e'} />
            </>
        ),
        key: 'narcissism',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'egoism'} <Emoji code={'1f911'} />
            </>
        ),
        key: 'egoism',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'pohuism'} <Emoji code={'1f636'} />
            </>
        ),
        key: 'pohuism',
        categories: ['personality'],
        level: 'primary',
    },
    {
        title: (
            <>
                {'pizdabolism'} <Emoji code={'1f92a'} />
            </>
        ),
        key: 'pizdabolism',
        categories: ['personality'],
        level: 'primary',
    },
];

setCategories(categories);
setBuzzwords(buzzwords);
