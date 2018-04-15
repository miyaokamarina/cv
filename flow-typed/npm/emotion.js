// @flow

declare module 'emotion' {
    // TypeScript Version: 2.2
    declare export type Interpolation = ?(string | number | boolean | Interpolation[]);

    declare export type CreateStyles<TRet> = {
        (...Interpolation[]): TRet,
        (string[] & { raw: string[] }, ...Interpolation[]): TRet,
    };

    declare export opaque type Styles: string;

    declare export function css(string[], ...Interpolation[]): Styles;
    declare export function css(...Interpolation[]): Styles;

    declare export function injectGlobal(string[], ...Interpolation[]): void;
    declare export function injectGlobal(...Interpolation[]): void;

    declare export function keyframes(string[], ...Interpolation[]): string;
    declare export function keyframes(...Interpolation[]): string;

    declare export function cx(...interpolations: Interpolation[]): string;
}
