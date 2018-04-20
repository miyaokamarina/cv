// @flow

import * as React from 'react';
import { css } from 'emotion';
import { connect } from 'react-redux';

import { Theme } from '~/kit/Theme';
import { Section } from '~/kit/Section';
import { H2 } from '~/kit/H2';
import { H3 } from '~/kit/H3';
import { Checkbox } from '~/kit/Checkbox';
import { LangSwitcher } from '~/components/LangSwitcher';
import { ThemeSwitcher } from '~/components/ThemeSwitcher';
import { toggleCategory, toggleLevel } from '~/store';
import { mkActionHandlers } from '~/fun/mkActionHandlers';
import { withKiririn } from '~/kiririntl';

export const Aside = withKiririn(
    // eslint-disable-next-line no-unused-vars
    connect(({ category, level }) => ({ category, level }))(({ category, level, kiririn, dispatch, ...rest }) => (
        <Theme>
            {th => (
                <aside
                    {...rest}
                    css={css`
                        ${th.size.GteL1(css`
                            position: fixed;
                            left: calc((100% + ${th.cell} * 30 + ${th.cell}) / 2);
                            top: ${th.cellS2};
                            bottom: ${th.cellS2};
                            overflow-y: auto;
                            overflow-x: visible;
                            width: calc(${th.cell} * 13.5);
                            padding: ${th.cellS2} ${th.cell} ${th.cellS2} ${th.cellS2};
                        `)};

                        ${th.size.LteL(css`
                            margin-bottom: calc(${th.cellIL2} + ${th.cellS2} * 2);

                            width: calc(${th.cell} * 13);
                        `)};
                    `}
                >
                    <Section>
                        <H2>{kiririn`Language`}</H2>
                        <LangSwitcher />
                    </Section>
                    <Section>
                        <H2>{kiririn`Theme`}</H2>
                        <ThemeSwitcher />
                    </Section>
                    <Section>
                        <H2>{kiririn`Buzzwords filter`}</H2>
                        <Section>
                            <H3>{kiririn`By category`}</H3>
                            <div
                                css={css`
                                    display: flex;
                                    flex-direction: column;
                                `}
                            >
                                <Checkbox
                                    aria-label={kiririn`Frontend`}
                                    checked={category.frontend}
                                    {...mkActionHandlers(() => toggleCategory('frontend'))}
                                >{kiririn`Frontend`}</Checkbox>
                                <Checkbox
                                    aria-label={kiririn`Backend`}
                                    checked={category.backend}
                                    {...mkActionHandlers(() => toggleCategory('backend'))}
                                >{kiririn`Backend`}</Checkbox>
                                <Checkbox
                                    aria-label={kiririn`General`}
                                    checked={category.general}
                                    {...mkActionHandlers(() => toggleCategory('general'))}
                                >{kiririn`General`}</Checkbox>
                                <Checkbox
                                    aria-label={kiririn`Best practices`}
                                    checked={category.bestPractices}
                                    {...mkActionHandlers(() => toggleCategory('bestPractices'))}
                                >{kiririn`Best practices`}</Checkbox>
                                <Checkbox
                                    aria-label={kiririn`Personality`}
                                    checked={category.personality}
                                    {...mkActionHandlers(() => toggleCategory('personality'))}
                                >{kiririn`Personality`}</Checkbox>
                            </div>
                        </Section>
                        <Section>
                            <H3>{kiririn`By level`}</H3>
                            <div
                                css={css`
                                    display: flex;
                                    flex-direction: column;
                                `}
                            >
                                <Checkbox checked={level.ok} level={'ok'} {...mkActionHandlers(() => toggleLevel('ok'))}>{kiririn`Fucking great`}</Checkbox>
                                <Checkbox
                                    checked={level.info}
                                    level={'info'}
                                    {...mkActionHandlers(() => toggleLevel('info'))}
                                >{kiririn`Magical girl`}</Checkbox>
                                <Checkbox
                                    checked={level.warning}
                                    level={'warning'}
                                    {...mkActionHandlers(() => toggleLevel('warning'))}
                                >{kiririn`So-so`}</Checkbox>
                                <Checkbox
                                    checked={level.error}
                                    level={'error'}
                                    {...mkActionHandlers(() => toggleLevel('error'))}
                                >{kiririn`Fucking bad`}</Checkbox>
                                <Checkbox
                                    checked={level.primary}
                                    level={'primary'}
                                    {...mkActionHandlers(() => toggleLevel('primary'))}
                                >{kiririn`Unrelated`}</Checkbox>
                            </div>
                        </Section>
                    </Section>
                </aside>
            )}
        </Theme>
    )),
);
