import * as React from 'react';

import { Buttons } from '../kit/Buttons';
import { mkActionHandlers } from '../fn/mkActionHandlers';
import { withTl } from '../kiririntl';
import { withState } from '../kit/Connect';
import { State, setTheme, Theme } from '../store';
import { name } from '../hoc/name';

const mkHandler = (theme: Theme) => () => {
    setTheme(theme);
};

const mapStateToProps = ({ theme }: State) => ({ theme });

export const ThemeSwitcher = withState(mapStateToProps)(
    withTl(
        name('ThemeSwitcher')(({ tl, theme }) => (
            <Buttons>
                <Buttons.Item active={theme === 'dark'} {...mkActionHandlers(mkHandler('dark'))}>{tl`dark`}</Buttons.Item>
                <Buttons.Item active={theme === 'light'} {...mkActionHandlers(mkHandler('light'))}>{tl`light`}</Buttons.Item>
            </Buttons>
        )),
    ),
);
