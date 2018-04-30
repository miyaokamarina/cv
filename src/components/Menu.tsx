import * as React from 'react';

import { cn } from '../fn/cn';
import { withState } from '../kit/Connect';
import { State } from '../store';
import { name } from '../hoc/name';

import { Aside } from './Aside';

import './Menu.css';

const mapStateToProps = ({ menu }: State) => ({ menu });

export const Menu = withState(mapStateToProps)(
    name('Menu')(({ menu }) => {
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
    }),
);
