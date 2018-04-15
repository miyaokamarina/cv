// @flow

import * as React from 'react';

export const Lock = () => (
    <img
        style={{
            width: '1.25em',
            verticalAlign: '-0.25em',
        }}
        alt={'🔒'}
        aria-label={'Emoji: Locked'}
        title={'Locked'}
        src={'https://twemoji.maxcdn.com/2/72x72/1f512.png'}
        draggable={false}
    />
);
