// @flow

import * as React from 'react';

export const MedicalSymbol = () => (
    <img
        style={{
            width: '1.25em',
            verticalAlign: '-0.25em',
        }}
        alt={'⚕️'}
        aria-label={'Emoji: Medical symbol'}
        title={'Medical symbol'}
        src={'https://twemoji.maxcdn.com/2/72x72/2695.png'}
        draggable={false}
    />
);
