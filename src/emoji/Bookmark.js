// @flow

import * as React from 'react';

export const Bookmark = () => (
    <img
        style={{
            width: '1.25em',
            verticalAlign: '-0.25em',
        }}
        alt={'🔖'}
        aria-label={'Emoji: Bookmark'}
        title={'Bookmark'}
        src={'https://twemoji.maxcdn.com/2/72x72/1f516.png'}
        draggable={false}
    />
);
