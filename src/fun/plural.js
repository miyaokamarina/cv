// @flow

import type { Interpolation, WeakQuasi } from './plural.types';

export const plural: (string[], ...Interpolation[]) => WeakQuasi = (qs, ...es) => ({ qs, es, plural: true });
