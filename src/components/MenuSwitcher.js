// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';

import { Fab } from '~/kit/Fab';
import { Theme } from '~/kit/Theme';
import { Menu } from '~/components/Menu';
import { SlidersH } from '~/icon/SlidersH';
import { Times } from '~/icon/Times';
import { toggleMenu } from '~/store';

export const MenuSwitcher = (() => {
    const MenuSwitcher = ({ menu }) => (
        <Theme>
            {__ => (
                <>
                    <Menu />
                    <Fab
                        css={css`
                            right: ${__.cellS2};
                            bottom: ${__.cellS2};
                        `}
                        onClick={() => toggleMenu()}
                    >
                        {menu ? <Times /> : <SlidersH />}
                    </Fab>
                </>
            )}
        </Theme>
    );

    return connect(({ menu }) => ({ menu }))(MenuSwitcher);
})();
