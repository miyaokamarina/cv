import * as React from 'react';

import { State } from '../store';
import { Chips } from '../kit/Chips';
import { Level } from '../kit/Level';
import { withState } from '../kit/Connect';
import { cn } from '../fn/cn';
import { Buzzword, Category } from '../data/buzzwords';
import { name } from '../hoc/name';

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

const mapStateToProps = ({ buzzwords, categories, buzzwordsLevels }: State) => ({ buzzwords, categories, buzzwordsLevels });

export const Buzzwords = withState(mapStateToProps)(name('Buzzwords')(({ buzzwords, categories, buzzwordsLevels }) => (
    <Chips {...cn('Buzzwords')}>
        {buzzwords.filter(buzzwordsFilter(categories, buzzwordsLevels)).map(({ key, title, level, rainbow }: Buzzword) => (
            <Chips.Item key={key} level={level} {...cn(rainbow ? 'Buzzwords__Rainbow' : '')}>
                {title}
            </Chips.Item>
        ))}
    </Chips>
)));
