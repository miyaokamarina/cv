# Marina Miyaoka

## Font Awesome 5

You should have Font Awesome 5 Pro license or fall back to Font Awesome Free
to build the app.

## Building

Clone the repo, then:

```bash
$ yarn # install
$ yarn run watch # start development server
$ yarn run build # build
$ yarn run pdf # generate PDFs
$ yarn run deploy # `build`, `pdf`, then deploy to the `gh-pages` branch
$ yarn run subset # subset fonts (see below)
```

## Fonts subsetting

After any changes of displayable text on the page
(even hidden with initial state),
fonts should be regenerated.

To regenerate fonts:

1.  First, gather glyphs usage data from page.
    To do this:
    1.  First, `yarn run watch`.
    2.  Launch devtools.
    3.  Make sure all possible messages are shown
        (check all unchecked checkboxes).
    4.  Run `fonts.update()` in devtools console.
    5.  Repeat this for each language and other states.
    6.  Then run `fonts.json()`.
    7.  Copy contents of `main` field and paste to `scripts/chars.json`.
2.  Make minified fonts. Just run `yarn run subset`.
    Then you can stop development server and rebuild the app.

Make sure fonts are updated before each deploy.

_Of course, there is intent to automate glyph stats gathering,
maybe while running tests._

## PDF generating

If you changed list of supported languages,
you have to change PDF script (`scripts/pdf.js`)
to generate PDFs for actual languages.
Also if you removed a language,
you should remove the corresponding `.pdf` and `.d.ts` file
in `src/components/`.

_Of course, there is also intent to automate this._

## License

MIT, except select Font Awesome 5 Pro icons (`src/kit/Icon.{ttf,woff,woff2}`).
