// @flow

import * as React from 'react';

export const SpeechBalloon = () => (
    <img
        style={{
            width: '1.25em',
            verticalAlign: '-0.25em',
        }}
        alt={'💬'}
        aria-label={'Emoji: Speech balloon'}
        title={'Speech balloon'}
        src={'https://twemoji.maxcdn.com/2/72x72/1f4ac.png'}
        draggable={false}
    />
);
