import * as React from 'react';

import { State } from '../store';
import { Chips } from '../kit/Chips';
import { Level } from '../kit/Level';
import { withState } from '../kit/Connect';
import { cn } from '../fn/cn';
import { Buzzword, Category } from '../data/buzzwords';

import './Buzzwords.css';

const buzzwordsFilter = (categories: Category[], buzzwordsLevels: { [P in Level]: boolean }) => (buzzword: Buzzword) => {
    if (!buzzwordsLevels[buzzword.level]) {
        return false;
    }

    const enabledCategories = categories.filter(({ visible }) => visible);

    for (const { id } of enabledCategories) {
        if (buzzword.categories.find(x => x === id)) {
            return true;
        }
    }

    return false;
};

export const Buzzwords = withState<State, {}>(({ state: { buzzwords, categories, buzzwordsLevels } }) => (
    <Chips {...cn('Buzzwords')}>
        {buzzwords.filter(buzzwordsFilter(categories, buzzwordsLevels)).map(({ key, title, level, rainbow }) => (
            <Chips.Item key={key} level={level} {...cn(rainbow ? 'Buzzwords__Rainbow' : '')}>
                {title}
            </Chips.Item>
        ))}
    </Chips>
));
