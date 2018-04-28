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

    for (const lang of [
        'en',
        // 'ja-u-nu-fullwide',
        'ru',
    ]) {
        console.log(`Switching to ${lang}`);
        await page.click(`.LangSwitcher__Item_lang_${lang}`);

        console.log(`Removing ./src/components/Download.${lang}.pdf…`);
        await rm(`./src/components/Download.${lang}.pdf`);

        console.log(`Printing ${lang}…`);
        await page.pdf({
            path: `./src/components/Download.${lang}.pdf`,
            printBackground: true,
            format: 'A4',
            margin: {
                top: '20mm',
                right: '20mm',
                bottom: '20mm',
                left: '25mm',
            },
        });

        console.log(`Creating Download.${lang}.pdf.d.ts`);
        writeFileSync(`./src/components/Download.${lang}.pdf.d.ts`, 'declare const path: string;\nexport default path;\n');
    }

    console.log('Closing browser…');
    await browser.close();

    console.log('Stopping server…');
    server.close();
})();
