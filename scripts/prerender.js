/*
eslint
max-statements: off,
*/

const { writeFileSync } = require('fs');
const serve = require('webpack-serve');
const puppeteer = require('puppeteer');
const rimraf = require('rimraf');

const config = require('../serve.config');

const timeout = 1000;

const rm = glob =>
    new Promise((resolve, reject) => {
        rimraf(glob, error => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });

const wait = time =>
    new Promise(resolve => {
        const timer = setTimeout(() => {
            resolve();
            clearTimeout(timer);
        }, time);
    });

const start = () =>
    new Promise(async resolve => {
        const server = await serve({
            ...config,
            port: 43210,
            mode: 'production',
            hot: {
                ...config.hot,
                port: 54321,
            },
        });

        server.on('listening', () => {
            resolve(server);
        });
    });

(async () => {
    console.log('Cleaning output directory…');
    await rm('./dist/*');

    console.log('Starting server…');
    const server = await start();

    console.log('Launching browser…');
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    console.log('Opening page…');
    const page = await browser.newPage();

    console.log('Setting viewport…');
    await page.setViewport({
        width: 1920,
        height: 1080,
        isLandscape: true,
    });

    console.log('Navigating…');
    await page.goto('http://localhost:43210/cv/', { waitUntil: 'load' });

    console.log('Waiting…');
    await wait(timeout);

    const html = await page.content();

    console.log(`Creating index.html`);
    writeFileSync(`./dist/index.html`, html);

    console.log(`Creating 404.html`);
    writeFileSync(`./dist/404.html`, html);

    console.log('Closing browser…');
    await browser.close();

    console.log('Stopping server…');
    server.close();
})();
