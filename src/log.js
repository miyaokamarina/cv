// @flow

import StackTrace from 'stacktrace-js';

import type { LogLevel } from './log.types';

type QueueItem = {
    level: LogLevel,
    args: mixed[],
    trace: TODO[],
};

class Queue {
    queue: QueueItem[];
    printer: Printer;

    constructor() {
        this.queue = [];
        this.printer = new Printer(this);
    }

    push(level: LogLevel, args: mixed[], trace: TODO[]) {
        this.queue.push({ level, args, trace });

        if (this.queue.length === 1) {
            this.printer.print();
        }
    }

    shift() {
        return this.queue.shift();
    }

    get empty(): boolean {
        return this.queue.length === 0;
    }
}

class Printer {
    queue: Queue;

    constructor(queue: Queue) {
        this.queue = queue;
    }

    async print() {
        while (!this.queue.empty) {
            const [{ level, args, trace }] = this.queue.queue;

            await print(level, args, trace);

            this.queue.shift();
        }
    }
}

const queue = new Queue();

const processFrameLocation = x => `${x.fileName.replace(/^webpack:\/\/\//, 'webpack:///./')}:${x.lineNumber}:${x.columnNumber + 1}`;

const processTrace = trace => {
    const [, callPoint] = trace;

    return processFrameLocation(callPoint);
};

const print = async (level, args, trace) => {
    const loc = processTrace(await trace);

    const format = [];
    const parts = [];

    let hasError = false;
    let afterError = false;

    format.push(`[${level}] `);

    for (let i = 0; i < args.length; i = i + 1) {
        const x = args[i];
        const isError = x instanceof Error;

        format.push(i > 0 ? (isError ? '\n\n' : ' ') : '');
        format.push(afterError ? '\n\n' : '');

        format.push(typeof x === 'string' ? '%s' : '%o');
        parts.push(x);

        hasError = hasError || isError;
        afterError = isError;
    }

    format.push(hasError ? `\n\n` : ` `);
    format.push(`@ ${loc}`);

    console.log(format.join(''), ...parts); // eslint-disable-line no-console
};

export const log: ((LogLevel, ...mixed[]) => void) & { [LogLevel]: (...mixed[]) => void } = ((level: LogLevel, ...args) => log[level](args): HACK);

['debug', 'info', 'ok', 'warning', 'error'].forEach(level => {
    log[level] = (...args) => queue.push(level, args, StackTrace.get());
});

Error.stackTraceLimit = Infinity;
