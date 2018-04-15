// @flow

import * as React from 'react';

import { Intl } from '~/kit/Intl';
import { Theme } from '~/kit/Theme';
import { Buttons } from '~/kit/Buttons';
import { ButtonsButton } from '~/kit/ButtonsButton';
import { setTheme } from '~/store';
import { mkActionHandlers } from '~/fun/mkActionHandlers';

export const ThemeSwitcher = () => (
    <Intl>
        {tl => (
            <Theme>
                {th => (
                    <Buttons>
                        <ButtonsButton
                            active={th.theme === 'dark'}
                            {...mkActionHandlers(th.theme === 'light' ? () => setTheme('dark') : null)}
                        >{tl`dark`}</ButtonsButton>
                        <ButtonsButton
                            active={th.theme === 'light'}
                            {...mkActionHandlers(th.theme === 'dark' ? () => setTheme('light') : null)}
                        >{tl`light`}</ButtonsButton>
                    </Buttons>
                )}
            </Theme>
        )}
    </Intl>
);
