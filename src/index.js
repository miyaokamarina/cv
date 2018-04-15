// @flow

import { log } from './log';

const polyfills = [
    {
        test: () => Boolean(Intl.PluralRules),
        load: async () => {
            log.info('No native support for `Intl.PluralRules`. Loading polyfill…');

            try {
                await import('intl-pluralrules');
                log.ok('`Intl.PluralRules` polyfill successfully loaded.');
            } catch (e) {
                log.error('`Intl.PluralRules` data loading failed.', e);

                throw e;
            }
        },
    },
];

const data = [
    async () => {
        log.info('Loading buzzwords data…');

        try {
            import('~/data/buzzwords');
            log.ok('Buzzwords data successfully loaded.');
        } catch (e) {
            log.error('Buzzwords data loading failed.', e);

            throw e;
        }
    },
    async () => {
        log.info('Loading xp data…');

        try {
            import('~/data/xp');
            log.ok('Xp data successfully loaded.');
        } catch (e) {
            log.error('Xp data loading failed.', e);

            throw e;
        }
    },
];

const loadPolyfills = async () => {
    log.info('Detecting and loading polyfills for required features…');

    const required = polyfills.filter(({ test }) => !test());

    if (required.length === 0) {
        log.info('No polyfills required.');

        return;
    }

    try {
        await Promise.all(required).map(({ load }) => load());
        log.ok('Required polyfills successfully loaded.');
    } catch (e) {
        log.error('Polyfills loading failed.', e);

        throw e;
    }
};

const loadData = async () => {
    log.info('Loading data…');

    try {
        await Promise.all(data.map(x => x()));
        log.ok('Data successfully loaded.');
    } catch (e) {
        log.error('Data loading failed.', e);
    }
};

const load = async () => {
    log.info('Pre-initializing…');

    try {
        await loadPolyfills();
        log.ok('Pre-initializing finished.');
        log.info('Loading application…');

        try {
            await import('~/main');
            log.ok('Application successfully loaded.');
            log.info('Post-initializing…');
            await loadData();
            log.ok('Post-initializing finished.');
        } catch (e) {
            log.error('Application loading failed.', e);
        }
    } catch (e) {
        log.error('Pre-initializing failed.', e);
    }
};

load();
