// @flow

import { equals } from '~/fun/equals';
import { createTheme } from '~/fun/createTheme';
import { store } from '~/store';
import { pickThemeParams } from '~/fun/pickThemeParams';
import type { ThemeParams } from '~/fun/createTheme';

const style = document.createElement('style');

(document.querySelector('head'): HACK).appendChild(style);

let old: ?ThemeParams = null;
let oldMenu: ?boolean = null;

export const globalCss = () => {
    const state = store.getState();
    const params = pickThemeParams(state);

    if (!equals(old, params) || oldMenu !== state.menu) {
        const __ = createTheme(state);

        // language=CSS
        const main = (String: HACK).raw`
            @import url(//fonts.googleapis.com/css?family=Roboto:100,300,400&subset=cyrillic);

            @font-face {
                font-family: 'Noto Sans JP';
                font-style: normal;
                font-weight: 100;
                src: local('Noto Sans CJK JP Thin'), local('Noto Sans JP Thin'), local('Noto-Sans-CJK-JP-Thin'), local('Noto-Sans-JP-Thin'),
                    url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Thin.woff2) format('woff2'),
                    url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Thin.woff) format('woff'),
                    url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Thin.otf) format('opentype');
            }

            @font-face {
                font-family: 'Noto Sans JP';
                font-style: normal;
                font-weight: 300;
                src: local('Noto Sans CJK JP Light'), local('Noto Sans JP Light'), local('Noto-Sans-CJK-JP-Light'), local('Noto-Sans-JP-Light'),
                    url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Light.woff2) format('woff2'),
                    url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Light.woff) format('woff'),
                    url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Light.otf) format('opentype');
            }

            @font-face {
                font-family: 'Noto Sans JP';
                font-style: normal;
                font-weight: 400;
                src: local('Noto Sans CJK JP'), local('Noto Sans JP'), local('Noto-Sans-CJK-JP'), local('Noto-Sans-JP'),
                    local('Noto Sans CJK JP Regular'), local('Noto Sans JP Regular'), local('Noto-Sans-CJK-JP-Regular'), local('Noto-Sans-JP-Regular'),
                    url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.woff2) format('woff2'),
                    url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.woff) format('woff'),
                    url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.otf) format('opentype');
            }

            * {
                margin: 0;
                padding: 0;
                border: none;

                box-sizing: border-box;

                font-family: ${__.font.family};
                font-size: ${__.font.size};
                font-weight: ${__.font.weight};
                line-height: ${__.font.height};
            }

            html,
            body,
            #root {
                width: 100%;
            }

            #root {
                width: 100%;
            }

            body {
                background-color: ${__.color.default.background};
                color: ${__.color.default.foreground};
            }

            a {
                color: ${__.color.static.foreground.primary};
            }

            @page {
                size: A4 portrait;
            }
            
            @page:right{
  @bottom-right {
    content: counter(page);
  }
}

@page:left{
  @bottom-left {
    content: counter(page);
  }
}

            @viewport {
                max-zoom: 1;
                min-zoom: 1;
            }
        `;

        // language=CSS
        const menu = (String: HACK).raw`
            body {
                overflow-y: hidden;
            }
        `;

        // language=CSS
        const scrollbar = (String: HACK).raw`
            *::-webkit-scrollbar {
                    width: ${__.cellS2};
                }

            *::-webkit-scrollbar-thumb {
                border-radius: 5px;
                background-color: ${__.color.active.background.primary};
            }
        `;

        while (style.firstChild) {
            style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(main));

        if (state.menu) {
            style.appendChild(document.createTextNode(menu));
        }

        if (!state.isTouch) {
            style.appendChild(document.createTextNode(scrollbar));
        }
    }

    old = params;
    oldMenu = state.menu;
};
