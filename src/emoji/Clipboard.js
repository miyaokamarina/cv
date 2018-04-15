// @flow

import * as React from 'react';

export const Clipboard = () => (
    <img
        style={{
            width: '1.25em',
            verticalAlign: '-0.25em',
        }}
        alt={'📋'}
        aria-label={'Emoji: Clipboard'}
        title={'Clipboard'}
        src={'https://twemoji.maxcdn.com/2/72x72/1f4cb.png'}
        draggable={false}
    />
);
