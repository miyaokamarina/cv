export type Cn = (...classes: (void | string)[]) => { className: string };

export const cn: Cn = (...classes) => ({ className: classes.filter(Boolean).join(' ') });
