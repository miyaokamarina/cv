import * as React from 'react';

import { Button } from '../kit/Button';
import { Icon } from '../kit/Icon';
import { Center } from '../kit/Center';
import { withTl } from '../kiririntl';
import { cn } from '../fn/cn';

import en from './Download.en.pdf';
import ru from './Download.ru.pdf';

import './Download.css';

export const Download = withTl(({ tl }) => (
    <Center {...cn('Download')}>
        <Button level={'secondary'} href={tl.current === 'ru' ? ru : en} download={tl`Yuri Zemskov (JS, React).pdf` as string}>
            <Icon code={'\uF1C1'} />
            {tl`Download PDF`}
        </Button>
    </Center>
));
