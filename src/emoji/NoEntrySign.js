// @flow

import * as React from 'react';

export const NoEntrySign = () => (
    <img
        style={{
            width: '1.25em',
            verticalAlign: '-0.25em',
        }}
        alt={'🚫'}
        aria-label={'Emoji: Prohibited'}
        title={'Prohibited'}
        src={'https://twemoji.maxcdn.com/2/72x72/1f6ab.png'}
        draggable={false}
    />
);
