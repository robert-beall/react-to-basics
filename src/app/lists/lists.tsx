import { ReactNode } from "react";

/**
 * Simple interface for passing a list of strings to a component.
 */
interface SimpleListProps {
    list: string[];
    filterLength?: number;
};

/**
 * Interface representing a key value pair using generics.
 */
interface KeyValueSet<K, V> {
    key: K;
    value: V;
};

interface KeyValueListProps<K, V> {
    list: Array<KeyValueSet<K, V>>;
}

/**
 * Simple component that displays all elements in a list.
 * @param list of strings 
 * @returns React Component
 */
export const BasicListDisplay = ({list}: SimpleListProps): ReactNode => {
    return (<>
        {list.map(s => <div>{s}</div>)}
    </>);
};

/**
 * 
 * @param list of string
 * @param filterLength minimum length to filter by 
 * @returns React Component
 */
export const BasicFilteredList = ({list, filterLength = 1}: SimpleListProps): ReactNode => {
    return (<>
        {list.filter(s => s.length >= (filterLength)).map(s => (<div>{s}</div>))}
    </>);
};

/**
 * This component explictly sets the key value based on the underlying data.
 * @param list 
 * @returns React Component
 */
export const ListWithKey = ({list}: KeyValueListProps<string, string>): ReactNode => {
    return (<>
        {list.map(s => (<div key={s.key}>{s.value}</div>))}
    </>);
};

