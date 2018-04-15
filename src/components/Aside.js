// @flow

import * as React from 'react';
import { css } from 'emotion';
import { connect } from 'react-redux';

import { Intl } from '~/kit/Intl';
import { Theme } from '~/kit/Theme';
import { Section } from '~/kit/Section';
import { H2 } from '~/kit/H2';
import { H3 } from '~/kit/H3';
import { Checkbox } from '~/kit/Checkbox';
import { LangSwitcher } from '~/components/LangSwitcher';
import { ThemeSwitcher } from '~/components/ThemeSwitcher';
import { toggleCategory, toggleLevel } from '~/store';
import { mkActionHandlers } from '~/fun/mkActionHandlers';

// eslint-disable-next-line no-unused-vars
export const Aside = connect(({ category, level }) => ({ category, level }))(({ category, level, dispatch, ...rest }) => (
    <Intl>
        {tl => (
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
                            <H2>{tl`Language`}</H2>
                            <LangSwitcher />
                        </Section>
                        <Section>
                            <H2>{tl`Theme`}</H2>
                            <ThemeSwitcher />
                        </Section>
                        <Section>
                            <H2>{tl`Buzzwords filter`}</H2>
                            <Section>
                                <H3>{tl`By category`}</H3>
                                <div
                                    css={css`
                                        display: flex;
                                        flex-direction: column;
                                    `}
                                >
                                    <Checkbox
                                        aria-label={tl`Frontend`}
                                        checked={category.frontend}
                                        {...mkActionHandlers(() => toggleCategory('frontend'))}
                                    >{tl`Frontend`}</Checkbox>
                                    <Checkbox
                                        aria-label={tl`Backend`}
                                        checked={category.backend}
                                        {...mkActionHandlers(() => toggleCategory('backend'))}
                                    >{tl`Backend`}</Checkbox>
                                    <Checkbox
                                        aria-label={tl`General`}
                                        checked={category.general}
                                        {...mkActionHandlers(() => toggleCategory('general'))}
                                    >{tl`General`}</Checkbox>
                                    <Checkbox
                                        aria-label={tl`Best practices`}
                                        checked={category.bestPractices}
                                        {...mkActionHandlers(() => toggleCategory('bestPractices'))}
                                    >{tl`Best practices`}</Checkbox>
                                    <Checkbox
                                        aria-label={tl`Personality`}
                                        checked={category.personality}
                                        {...mkActionHandlers(() => toggleCategory('personality'))}
                                    >{tl`Personality`}</Checkbox>
                                </div>
                            </Section>
                            <Section>
                                <H3>{tl`By level`}</H3>
                                <div
                                    css={css`
                                        display: flex;
                                        flex-direction: column;
                                    `}
                                >
                                    <Checkbox checked={level.ok} level={'ok'} {...mkActionHandlers(() => toggleLevel('ok'))}>{tl`Fucking great`}</Checkbox>
                                    <Checkbox checked={level.info} level={'info'} {...mkActionHandlers(() => toggleLevel('info'))}>{tl`Magical girl`}</Checkbox>
                                    <Checkbox
                                        checked={level.warning}
                                        level={'warning'}
                                        {...mkActionHandlers(() => toggleLevel('warning'))}
                                    >{tl`So-so`}</Checkbox>
                                    <Checkbox
                                        checked={level.error}
                                        level={'error'}
                                        {...mkActionHandlers(() => toggleLevel('error'))}
                                    >{tl`Fucking bad`}</Checkbox>
                                    <Checkbox
                                        checked={level.primary}
                                        level={'primary'}
                                        {...mkActionHandlers(() => toggleLevel('primary'))}
                                    >{tl`Unrelated`}</Checkbox>
                                </div>
                            </Section>
                        </Section>
                    </aside>
                )}
            </Theme>
        )}
    </Intl>
));
