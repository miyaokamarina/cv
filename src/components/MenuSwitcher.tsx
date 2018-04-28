import * as React from 'react';

import { Fab } from '../kit/Fab';
import { Menu } from './Menu';
import { Icon } from '../kit/Icon';
import { withState } from '../kit/Connect';
import { cn } from '../fn/cn';
import { toggleMenu, State } from '../store';
import { mkActionHandlers } from '../fn/mkActionHandlers';

import './MenuSwitcher.css';

const html: HTMLHtmlElement = document.querySelector('html') as any;

const handleClick = () => {
    html.classList.toggle('menu');

    toggleMenu();
};

export const MenuSwitcher = withState<State, {}>(({ state: { menu } }) => (
    <>
        <Menu />
        <Fab {...cn('no-print', 'lte-l', 'MenuSwitcher__Fab')} {...mkActionHandlers(handleClick)}>
            <Icon code={menu ? '\uF00D' : '\uF013'} />
        </Fab>
    </>
));
