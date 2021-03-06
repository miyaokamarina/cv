import * as React from 'react';
import { Store, AnyAction } from 'redux';
import { pure } from 'recompose';

// TODO: Exclude `NoState` from `State`.

type ProviderProps<State, Action extends AnyAction> = {
    store: Store<State, Action>;
    children?: React.ReactNode;
};

type ProviderState<State> = {
    state: State | NoState;
};

type ConsumerProps<State> = { children: (f: State) => React.ReactNode };

type NoState = 'miyamarisubs/connect.NoState';

const noState: NoState = 'miyamarisubs/connect.NoState';

const Context = React.createContext(noState as any);

class Provider<State, Action extends AnyAction> extends React.PureComponent<ProviderProps<State, Action>, ProviderState<State>> {
    static displayName = 'Connect.Provider';

    state = {
        state: this.props.store.getState(),
    };

    unsubscribe: () => any; // TODO: Unsubscribe on unmount.

    constructor(props: ProviderProps<State, Action>) {
        super(props);

        this.unsubscribe = props.store.subscribe(() => {
            const state = props.store.getState();

            this.setState({
                state,
            });
        });
    }

    render() {
        const state: ProviderState<State> = this.state;

        return <Context.Provider value={state.state}>{this.props.children}</Context.Provider>;
    }
}

export class Connect<State> extends React.PureComponent<ConsumerProps<State>> {
    static Provider = Provider;

    render() {
        return <Context.Consumer>{state => (state === noState ? null : this.props.children(state))}</Context.Consumer>;
    }
}

export const withState = <State extends {}, InjectedProps extends {}, OriginalProps extends {}>(f: (state: State) => InjectedProps) => (
    Component: React.ComponentType<OriginalProps & InjectedProps>,
) => {
    const WithState = (props: OriginalProps) => <Connect>{(state: State) => <Component {...props} {...f(state)} />}</Connect>;

    (WithState as any).displayName = `withState(${Component.displayName || Component.name || 'Unknown'})`;

    return pure(WithState);
};
