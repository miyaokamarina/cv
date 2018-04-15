// @flow

import * as React from 'react';
import { css } from 'emotion';
import { connect } from 'react-redux';

import { Aside } from '~/components/Aside';
import { Theme } from '~/kit/Theme';

export const Menu = (() => {
    const Menu = ({ menu }) => (
        <Theme>
            {__ => (
                <div
                    css={css`
                        display: ${menu ? 'flex' : 'none'};
                        position: fixed;
                        right: 0;
                        bottom: 0;
                        top: 0;
                        left: 0;
                        overflow-y: scroll;
                        padding: ${__.cellS2} ${__.cellS2} calc(${__.cellIL2} + ${__.cellS2} * 2) ${__.cellS2};

                        background-color: ${__.color.backdrop};

                        & > div {
                            margin-left: auto;
                            margin-right: auto;
                        }
                    `}
                >
                    <div>
                        <Aside />
                    </div>
                </div>
            )}
        </Theme>
    );

    return connect(({ menu }) => ({ menu }))(Menu);
})();
