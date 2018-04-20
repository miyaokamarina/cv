// @flow

const polyfills = [
    {
        test: () => Boolean(Intl.PluralRules),
        load: async () => {
            await import('intl-pluralrules');
        },
    },
];

const loadPolyfills = async () => {
    const required = polyfills.filter(({ test }) => !test());

    if (required.length > 0) {
        await Promise.all(required.map(({ load }) => load()));
    }
};

const load = async () => {
    await loadPolyfills();
    await Promise.all([import('~/locales/base-en'), import('~/locales/base-ru'), import('~/locales/base-ja')]);
    await import('~/main');
    await Promise.all([
        Promise.all([import('~/locales/en'), import('~/locales/ru'), import('~/locales/ja')]), // Locales
        Promise.all([import('~/data/buzzwords'), import('~/data/xp')]), // Data
    ]);
};

load();
