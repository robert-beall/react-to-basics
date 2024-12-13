import { ReactNode } from "react";

/**
 * This interface defines the basic props that will be used in this file.
 */
interface BasicProps {
    name: string;
}

/**
 * This is a slightly more complex set of props for use in prop forwarding.
 */
interface ForwardedProps {
    id: string;
    name: string;
    quantity: number;
};

/**
 * This is a very simple component that takes a `name` prop of type string.
 * 
 * NOTE: I'm using typescript to define an interface for the props.
 * 
 * @param name string to display 
 * @returns React Component
 */
export const ComponentWithProps = ({name}: BasicProps): ReactNode => {
    return <>{name}</>;
};

/**
 * This component defines a default value for the prop `name` in case a value is
 * not passed by the parent. 
 * 
 * @param name string to display 
 * @returns React Component
 */
export const ComponentWithDefaultPropValue = ({name = 'John Doe'}: {name?: string}): ReactNode => {
    return <>{name}</>;
};

/**
 * This component takes a `props` object, but does not use it directly. Instead, it 
 * forwards its props to the `PropDisplay` component.
 * 
 * @param props 
 * @returns React Component
 */
export const ComponentWithForwardedProps = (props: ForwardedProps): ReactNode => {
    return (<>
        <h1>VALUES:</h1>
        <PropDisplay {...props} />
    </>);
};

/**
 * This component is forwarded its props from its parent component.
 * 
 * @param id string identifier
 * @param name name to display
 * @param quantity 
 * @returns React Component
 */
export const PropDisplay = ({id, name, quantity}: ForwardedProps): ReactNode => {
    return (<>
        <div>ID: {id}</div>
        <div>NAME: {name}</div>
        <div>QUANTITY: {quantity}</div>
    </>);
};

/**
 * This component takes children as a prop and displays them.
 * 
 * @param children react nodes to display 
 * @returns React Component
 */
export const ComponentPassingJSXChildren = ({children}: {children: ReactNode}): ReactNode => {
    return (<>
        <h1>My Children:</h1>
        {children}
    </>);
};

/**
 * Simple display component to pass into the above component.
 * 
 * @param value string to display 
 * @returns React Component
 */
export const BasicDisplay = ({value}: {value: string}): ReactNode => {
    return <>{value}</>;
};
