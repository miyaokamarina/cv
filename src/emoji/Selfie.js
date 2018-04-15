// @flow

import * as React from 'react';

export const Selfie = () => (
    <img
        style={{
            width: '1.25em',
            verticalAlign: '-0.25em',
        }}
        alt={'🤳'}
        aria-label={'Emoji: Selfie'}
        title={'Selfie'}
        src={'https://twemoji.maxcdn.com/2/72x72/1f933.png'}
        draggable={false}
    />
);
