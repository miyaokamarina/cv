const postcssCssnext = require('postcss-cssnext');

module.exports = {
    plugins: [
        postcssCssnext({
            features: {
                applyRule: false,
                nesting: false,
            },
        }),
    ],
};
