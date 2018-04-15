// @flow

import * as React from 'react';

export const NoEntry = () => (
    <img
        style={{
            width: '1.25em',
            verticalAlign: '-0.25em',
        }}
        alt={'⛔'}
        aria-label={'Emoji: No entry'}
        title={'No entry'}
        src={'https://twemoji.maxcdn.com/2/72x72/26d4.png'}
        draggable={false}
    />
);
