// @flow

import { pick } from '~/fun/pick';

import type { ThemeParams } from '~/fun/createTheme';

export const pickThemeParams: ThemeParams => ThemeParams = x => (pick(['isPrint', 'isTouch', 'isKeyboard', 'theme', 'sizes'], x): HACK);
