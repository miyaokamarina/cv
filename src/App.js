// @flow

import * as React from 'react';
import { Provider } from 'react-redux';

import { FALLBACK_LANGUAGE as fallback } from '~/data/config';
import { locales } from '~/data/locales';

import { Intl } from '~/kit/Intl';
import { Theme } from '~/kit/Theme';
import { Media } from '~/kit/Media';
import { Screen } from '~/kit/Screen';
import { Page } from '~/components/Page';
import { Bio } from '~/components/Bio';
import { About } from '~/components/About';
import { Breakdowns } from '~/components/Breakdowns';
import { QuickFacts } from '~/components/QuickFacts';
import { Aside } from '~/components/Aside';
import { BuzzwordsSection } from '~/components/BuzzwordsSection';
import { XpSection } from '~/components/XpSection';
import { MenuSwitcher } from '~/components/MenuSwitcher';
import { HeadingSection } from '~/components/HeadingSection';

import { store } from '~/store';

export const App = () => (
    <Provider {...{ store }}>
        <Intl.Provider {...{ store, fallback, locales }}>
            <Theme.Provider {...{ store, theme: 'dark' }}>
                <Page>
                    <HeadingSection />
                    <BuzzwordsSection />
                    <XpSection />
                    <QuickFacts />
                    <Bio />
                    <Breakdowns />
                    <About />
                </Page>
                <Screen>
                    <Media.GteL1>
                        <Aside />
                    </Media.GteL1>
                    <Media.LteL>
                        <MenuSwitcher />
                    </Media.LteL>
                </Screen>
            </Theme.Provider>
        </Intl.Provider>
    </Provider>
);
