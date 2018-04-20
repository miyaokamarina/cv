// @flow

import { addLocale, cardinal, etc, date } from '~/kiririntl';

import type { Locale } from '~/kiririntl';

export const ja: Locale = {
    tag: 'ja',
    title: '日本語',
    fallbacks: ['en'],

    Theme: 'テーマ',
    dark: '暗い',
    light: '明るい',

    //
    // Header
    //

    'Marina Miyaoka, the JS magical girl': '宮岡マリナ、ＪＳの魔法少女', // TODO: Reading

    //
    // Properties, left table
    //

    'Name:': '名前：',
    'Age:': '年齢：',
    'Location:': '居住地：',
    'Phone:': 'ＴＥＬ：',
    'Mail:': 'メール：',
    'Telegram:': 'テレグラム：',
    'Twitter:': 'ツイッター：',

    'Yuri Zemskov': 'ユーリー・ゼムスコブ',
    '[[age]]': cardinal`${([x], format) => format(x)}`,
    Moscow: 'モスクワ',

    //
    // Properties, right table
    //

    'Level:': 'レベル：',
    'Position:': '仕事：',
    'Salary (monthly):': '月給：',
    'Employment:': '雇用形態：',
    'Work location:': '仕事先：',
    'GitHub:': 'ギットハブ：',
    'GitHub (old):': 'ギットハブ（旧）：',

    'magical girl': '魔法少女',
    'React developer': 'React デベロッパー',
    'from $#': cardinal`${([x], format) =>
        format(x, {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        })}から`,
    'full time': '常勤',
    'office, remote': '事務所、リモート',

    //
    // Buzzwords
    //

    Buzzwords: 'バズワード',

    'Buzzwords filter': 'バズワードのフィルター',

    'By category': 'カテゴリーで',

    Frontend: 'フロントエンド',
    Backend: 'バックエンド',
    General: '一般',
    'Best practices': '最善の措置',
    Personality: '気質',

    'By level': 'レベルで',

    'Fucking great': 'ほぼ神',
    'Magical girl': '魔法少女',
    'So-so': 'まぁまぁ',
    'Fucking bad': 'へたくそ',
    Unrelated: '関係ない',

    //
    // Xp
    //

    Belgorod: 'ベルゴロド',

    'Work experience': '職歴',
    '[[XP_AT]]': etc`${([, x]) => x}、${([x]) => x}で、`,
    'since # till #': date`${([x], format) =>
        format(x, {
            year: 'numeric',
            month: 'long',
        })}から${([, x], format) =>
        format(x, {
            year: 'numeric',
            month: 'long',
        })}まで`,

    'Responsibilities:': '職責：',
};

addLocale(ja);
