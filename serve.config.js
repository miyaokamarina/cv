const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

const config = require('./webpack.config');

const MODE = process.env.WEBPACK_MODE;

const mode = typeof MODE !== 'string' || /^d/.test(MODE) ? 'development' : 'production';

module.exports = {
    config: {
        ...config,
        mode,
    },
    dev: {
        publicPath: '/cv/',
        stats: 'minimal',
        logTime: true,
    },
    port: 1488,
    host: '0.0.0.0',
    hot: {
        port: 1337,
        hot: false,
        reload: true,
        logTime: true,
    },
    content: './dist/',
    logTime: true,
    clipboard: false,
    add: app => {
        app.use(
            convert(
                history({
                    index: '/cv/',
                }),
            ),
        );
    },
};
