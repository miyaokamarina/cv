import * as React from 'react';
import { pure } from 'recompose';

import { cn } from '../fn/cn';
import { name } from '../hoc/name';

import './Avatar.css';

// TODO: Make responsive.

export const Avatar = pure(name('Avatar')(() => <div {...cn('Avatar')} />));
