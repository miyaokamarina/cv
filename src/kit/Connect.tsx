import * as React from 'react';
import { Store, AnyAction } from 'redux';

// TODO: Exclude `NoState` from `State`.

type ProviderProps<State, Action extends AnyAction> = {
    store: Store<State, Action>;
    children?: React.ReactNode;
};

type ProviderState<State> = {
    state: State | NoState;
};

type ConsumerProps<State> = { children: (callbackfn: State) => React.ReactNode };

type NoState = 'miyamarisubs/connect.NoState';

type ConnectInjectedProps<State> = {
    state: State;
};

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

export const withState = <State, OriginalProps extends {}>(
    Component: React.ComponentType<OriginalProps & ConnectInjectedProps<State>>,
): React.ComponentType<OriginalProps> => {
    const WithConnect = (props: OriginalProps) => <Connect>{state => <Component {...props} state={state as State} />}</Connect>;

    (WithConnect as any).displayName = `withConnect(${Component.displayName || Component.name || 'Unknown'})`;

    return WithConnect;
};
