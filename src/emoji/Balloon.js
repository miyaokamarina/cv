// @flow

import * as React from 'react';

export const Balloon = () => (
    <img
        style={{
            width: '1.25em',
            verticalAlign: '-0.25em',
        }}
        alt={'🎈'}
        aria-label={'Emoji: Balloon'}
        title={'Balloon'}
        src={'https://twemoji.maxcdn.com/2/72x72/1f388.png'}
        draggable={false}
    />
);
