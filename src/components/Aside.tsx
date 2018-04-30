import * as React from 'react';

import { Section } from '../kit/Section';
import { H } from '../kit/H';
import { Checkbox } from '../kit/Checkbox';
import { State, toggleBuzzwordsCategory, toggleBuzzwordsLevel } from '../store';
import { mkActionHandlers } from '../fn/mkActionHandlers';
import { withTl } from '../kiririntl';
import { cn } from '../fn/cn';
import { withState } from '../kit/Connect';
import { name } from '../hoc/name';
import { Category } from '../data/buzzwords';

import { LangSwitcher } from './LangSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Download } from './Download';

import './Aside.css';

// TODO: ARIA attributes for level checkboxes.

const mapStateToProps = ({ categories, buzzwordsLevels }: State) => ({ categories, buzzwordsLevels });

export const Aside = withState<State, { categories: State['categories']; buzzwordsLevels: State['buzzwordsLevels'] }, { className?: string }>(mapStateToProps)(
    withTl(
        name('Aside')(({ tl, className, categories, buzzwordsLevels }) => (
            <aside {...cn('Aside', className)}>
                <Section aria-label={tl`Language` as string}>
                    <H level={2}>{tl`Language`}</H>
                    <LangSwitcher />
                </Section>
                <Section aria-label={tl`Theme` as string}>
                    <H level={2}>{tl`Theme`}</H>
                    <ThemeSwitcher />
                </Section>
                <Section aria-label={tl`Buzzwords filter` as string}>
                    <H level={2}>{tl`Buzzwords filter`}</H>
                    <Section aria-label={tl`By category` as string}>
                        <H level={3}>{tl`By category`}</H>
                        <div {...cn('Aside__Filters')}>
                            {categories.map((category: Category) => (
                                <Checkbox
                                    key={category.id}
                                    aria-label={tl`${category.title}` as string}
                                    checked={category.visible}
                                    {...mkActionHandlers(() => toggleBuzzwordsCategory(category.id))}
                                >{tl`${category.title}`}</Checkbox>
                            ))}
                        </div>
                    </Section>
                    <Section aria-label={tl`By level` as string}>
                        <H level={3}>{tl`By level`}</H>
                        <div {...cn('Aside__Filters')}>
                            <Checkbox
                                checked={buzzwordsLevels.ok}
                                level={'ok'}
                                {...mkActionHandlers(() => toggleBuzzwordsLevel('ok'))}
                            >{tl`Fucking great`}</Checkbox>
                            <Checkbox
                                checked={buzzwordsLevels.info}
                                level={'info'}
                                {...mkActionHandlers(() => toggleBuzzwordsLevel('info'))}
                            >{tl`Magical girl`}</Checkbox>
                            <Checkbox
                                checked={buzzwordsLevels.warn}
                                level={'warn'}
                                {...mkActionHandlers(() => toggleBuzzwordsLevel('warn'))}
                            >{tl`So-so`}</Checkbox>
                            <Checkbox
                                checked={buzzwordsLevels.error}
                                level={'error'}
                                {...mkActionHandlers(() => toggleBuzzwordsLevel('error'))}
                            >{tl`Fucking bad`}</Checkbox>
                        </div>
                    </Section>
                </Section>
                <Section aria-label={tl`Download PDF` as string}>
                    <Download />
                </Section>
            </aside>
        )),
    ),
);
