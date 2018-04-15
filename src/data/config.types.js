// @flow

export type Size =
    | 'U'
    | 'S3'
    | 'GteS3'
    | 'GtS3'
    | 'LteS2'
    | 'S2'
    | 'GteS2'
    | 'GtS2'
    | 'LteS1'
    | 'S1'
    | 'GteS1'
    | 'GtS1'
    | 'LteS'
    | 'S'
    | 'GteS'
    | 'GtS'
    | 'LteM'
    | 'M'
    | 'GteM'
    | 'GtM'
    | 'LteL'
    | 'L'
    | 'GteL'
    | 'GtL'
    | 'LteL1'
    | 'L1'
    | 'GteL1'
    | 'GtL1'
    | 'LteL2'
    | 'L2'
    | 'GteL2'
    | 'L3';

export type ExactSize = 'U' | 'S3' | 'S2' | 'S1' | 'S' | 'M' | 'L' | 'L1' | 'L2' | 'L3';

export type SizeLimits = {
    [Size]: [number, number],
};

export type ExactSizeLimits = {
    [ExactSize]: [number, number],
};

export type Sizes = {
    [Size]: boolean,
};

export type ExactSizes = {
    [ExactSize]: boolean,
};
