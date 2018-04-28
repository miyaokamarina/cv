import * as React from 'react';

import { Connect } from './kit/Connect';
import { Page } from './components/Page';
import { Bio } from './components/Bio';
import { About } from './components/About';
import { Breakdowns } from './components/Breakdowns';
import { UselessFacts } from './components/UselessFacts';
import { Aside } from './components/Aside';
import { BuzzwordsSection } from './components/BuzzwordsSection';
import { XpSection } from './components/XpSection';
import { MenuSwitcher } from './components/MenuSwitcher';
import { HeadingSection } from './components/HeadingSection';
import { Kiririn } from './kiririntl';

import { cn } from './fn/cn';

import { store } from './store';

export const App = () => (
    <Connect.Provider store={store}>
        <Kiririn.Provider>
            <Page>
                <HeadingSection />
                <BuzzwordsSection />
                <XpSection />
                <Bio />
                <Breakdowns />
                <UselessFacts />
                <About />
            </Page>
            <Aside {...cn('no-print', 'gte-l1')} />
            <MenuSwitcher />
        </Kiririn.Provider>
    </Connect.Provider>
);
