(async () => {
    if (!('Intl' in window)) {
        await import('./intl');
    }

    if (!('PluralRules' in Intl)) {
        await import('intl-pluralrules');
    }

    await import('./main');
})();
