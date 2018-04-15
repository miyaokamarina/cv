// @flow

import * as React from 'react';

export const Crayon = () => (
    <img
        style={{
            width: '1.25em',
            verticalAlign: '-0.25em',
        }}
        alt={'🖍️'}
        aria-label={'Emoji: Crayon'}
        title={'Crayon'}
        src={'https://twemoji.maxcdn.com/2/72x72/1f58d.png'}
        draggable={false}
    />
);
