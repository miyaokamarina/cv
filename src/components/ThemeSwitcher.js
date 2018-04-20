// @flow

import * as React from 'react';

import { Theme } from '~/kit/Theme';
import { Buttons } from '~/kit/Buttons';
import { ButtonsButton } from '~/kit/ButtonsButton';
import { setTheme } from '~/store';
import { mkActionHandlers } from '~/fun/mkActionHandlers';
import { withKiririn } from '~/kiririntl';

export const ThemeSwitcher = withKiririn(({ kiririn }) => (
    <Theme>
        {th => (
            <Buttons>
                <ButtonsButton
                    active={th.theme === 'dark'}
                    {...mkActionHandlers(th.theme === 'light' ? () => setTheme('dark') : null)}
                >{kiririn`dark`}</ButtonsButton>
                <ButtonsButton
                    active={th.theme === 'light'}
                    {...mkActionHandlers(th.theme === 'dark' ? () => setTheme('light') : null)}
                >{kiririn`light`}</ButtonsButton>
            </Buttons>
        )}
    </Theme>
));
