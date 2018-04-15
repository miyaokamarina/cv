// @flow

import * as React from 'react';
import { render } from 'react-dom';

import { globalCss } from '~/effect/globalCss';
import { store } from '~/store';
import { App } from './App';

store.subscribe(globalCss);
globalCss();
render(<App />, (document.querySelector('#root'): HACK));
