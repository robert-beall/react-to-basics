import { ReactElement, ReactNode } from "react";

/**
 * This is a basic react component.
 * 
 * Notes:
 * * The name is Capitalized
 * * A single line of JSX is returned, so parentheses are needed
 * 
 * @returns React Component
 */
export function FirstComponent() {
    return <div>Hello World</div>;
}

/**
 * We can also use arrow notation.
 * 
 * @returns React Component
 */
export const SecondComponent = () => {
    return <div>Goodnight Moon</div>;
};

/**
 * Note the error from the lowercase component name.
 * 
 * @returns React Component
 */
export function lowercaseComponent() {
    return <div>this is incorrect -- no capitalization</div>
}

/**
 * This is error prone and not best practice. Never nest component definitions.
 * 
 * @returns React Component
 */
export function NestedDefinitionsComponent() {
    function NestEgg() {
        return <div>NO! STOP!</div>;
    }

    return <div>OOPS: <NestEgg/></div>;
}