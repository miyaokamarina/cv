import * as React from 'react';

import { cn } from '../fn/cn';
import { withState } from '../kit/Connect';
import { State } from '../store';

import { Aside } from './Aside';

import './Menu.css';

export const Menu = withState<State, {}>(({ state: { menu } }) => {
    if (menu) {
        return (
            <div {...cn('no-print', 'lte-l', 'Menu')}>
                <div {...cn('Menu__Inner')}>
                    <Aside />
                </div>
            </div>
        );
    } else {
        return null;
    }
});
