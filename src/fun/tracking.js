// @flow

import { css } from 'emotion';

import type { Interpolation } from 'emotion';

import type { ThemeType } from '~/fun/createTheme';

export const tracking: (string, ThemeType) => Interpolation = (color, __) => css`
    --size: 0;

    --x: 50%;
    --y: 50%;

    background-image: radial-gradient(var(--size) calc(var(--size) * 0.67) at var(--x) var(--y), ${color}, transparent);

    &:hover {
        --size: ${__.cellIL3};
    }

    ${__.touch(css`
        &:hover {
            --size: 0;
        }
    `)};
`;
