export type Level = 'primary' | 'secondary' | 'ok' | 'info' | 'warn' | 'error';

export interface WithLevel {
    level?: Level;
}
