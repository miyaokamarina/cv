// @flow

import * as React from 'react';

export const InboxTray = () => (
    <img
        style={{
            width: '1.25em',
            verticalAlign: '-0.25em',
        }}
        alt={'📥'}
        aria-label={'Emoji: Inbox tray'}
        title={'Inbox tray'}
        src={'https://twemoji.maxcdn.com/2/72x72/1f4e5.png'}
        draggable={false}
    />
);
