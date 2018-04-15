// @flow

import * as React from 'react';

export const Label = () => (
    <img
        style={{
            width: '1.25em',
            verticalAlign: '-0.25em',
        }}
        alt={'🏷️'}
        aria-label={'Emoji: Label'}
        title={'Label'}
        src={'https://twemoji.maxcdn.com/2/72x72/1f3f7.png'}
        draggable={false}
    />
);
