// @flow

import * as React from 'react';

export const Cat = () => (
    <img
        style={{
            width: '1.25em',
            verticalAlign: '-0.25em',
        }}
        alt={'🐱'}
        aria-label={'Emoji: Cat face'}
        title={'Cat face'}
        src={'https://twemoji.maxcdn.com/2/72x72/1f431.png'}
        draggable={false}
    />
);
