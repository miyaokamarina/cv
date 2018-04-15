// @flow

import type { SizeLimits } from './config.types.js';

export { ExactSizeLimits, ExactSize, SizeLimits, Size, Sizes, ExactSizes } from './config.types';

export const FALLBACK_LANGUAGE = 'en';
export const DEFAULT_LANGUAGE = 'en';

const min = 50;

const u = 0;
const U = 49;

const s3 = 50;
const S3 = 199;

const s2 = 200;
const S2 = 299;

const s1 = 300;
const S1 = 399;

const s = 400;
const S = 599;

const m = 600;
const M = 799;

const l = 800;
const L = 1199;

const l1 = 1200;
const L1 = 1899;

const l2 = 1900;
const L2 = 2499;

const l3 = 2500;
const L3 = Infinity;

const max = Infinity;

// prettier-ignore
export const media: SizeLimits = Object.freeze({
    U:     [u  , U  ], // Unsupported.

    S3:    [s3 , S3 ], // Embedded display.
    GteS3: [s3 , max],
    GtS3:  [s2 , max],

    LteS2: [min, S2 ],
    S2:    [s2 , S2 ], // Old-school 240×320 phone.
    GteS2: [s2 , max],
    GtS2:  [s1 , max],

    LteS1: [min, S1 ],
    S1:    [s1 , S1 ], // Smartphone.
    GteS1: [s1 , max],
    GtS1:  [s  , max],

    LteS:  [min, S  ],
    S:     [s  , S  ], // Portrait tablet.
    GteS:  [s  , max],
    GtS:   [m  , max],

    LteM:  [min, M  ],
    M:     [m  , M  ], // Landscape tablet.
    GteM:  [m  , max],
    GtM:   [l  , max],

    LteL:  [min, L  ],
    L:     [l  , L  ], // Netbook.
    GteL:  [l  , max],
    GtL:   [l1 , max],

    LteL1: [min, L1 ],
    L1:    [l1 , L1 ], // Small laptop.
    GteL1: [l1 , max],
    GtL1:  [l2 , max],

    LteL2: [min, L2 ],
    L2:    [l2 , L2 ], // High definition.
    GteL2: [l2 , max],

    L3:    [l3 , L3 ], // Over 9000 pixels.
});
