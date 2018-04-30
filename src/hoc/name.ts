import * as React from 'react';

export const name = (name: string) => <ComponentType extends React.ComponentType<any>>(Component: ComponentType): ComponentType => {
    Component.displayName = name;

    return Component;
};
