// @flow

declare module 'redux-act' {
    declare export type Action = string & {
        (...mixed[]): { type: string, payload: mixed },

        assignTo: mixed => void,
    };

    declare export function createReducer<State>({| [string]: (State, mixed) => State |}, ?State): TODO;

    declare export function createAction(string, ?(...mixed[]) => mixed): Action;
}
