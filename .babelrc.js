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
        '@babel/flow',
        '@babel/react',
        '@babel/stage-0',
    ],
    plugins: [
        [
            'emotion',
            {
                hoist: true,
                sourceMap: true,
                autoLabel: true,
                labelFormat: '[filename]--[local]',
            },
        ],
        [
            'lodash',
            {
                id: ['recompose'],
            },
        ],
        [
            'ramda',
            {
                useES: true,
            },
        ],
    ],
};
