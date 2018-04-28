module.exports = {
    presets: [
        [
            '@babel/env',
            {
                useBuiltIns: 'usage',
                modules: false,
                shippedProposals: true,
            },
        ],
        '@babel/react',
        '@babel/typescript',
        [
            '@babel/stage-0',
            {
                decoratorsLegacy: true,
            },
        ],
    ],
};
