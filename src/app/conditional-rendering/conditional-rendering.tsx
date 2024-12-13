import { ReactNode } from "react";

/**
 * Props type interface defining a single boolean prop.
 */
interface BooleanProp {
    bool: boolean;
};

/**
 * Props type interface used for the last example.
 */
interface NamesProps {
    firstName: string;
    lastName: string;
    nickname?: string;
};

/**
 * This component uses an if statement to display different JSX based on a passed boolean prop.
 * 
 * @param bool boolean value 
 * @returns React Component
 */
export const ConditionalWithIf = ({bool}: BooleanProp): ReactNode => {
    if (bool === true) {
        return (<h3>Title Text</h3>);
    }
    
    return (<p>Paragraph Text</p>);
};

/**
 * This component returns null if the passed boolean prop is false. It only displays anything on a `true` condition.
 * @param bool boolean value 
 * @returns React Component
 */
export const OnlyDisplayIfTrue = ({bool}: BooleanProp): ReactNode => {
    if (bool === false) {
        return null;
    }
    
    return (<>Display only if true</>);
};

/**
 * This component displays either 'yes' or 'no' based on a boolean prop value. The
 * display is handled using a ternary operator.
 * @param bool boolean value 
 * @returns React Component
 */
export const DisplayTextWithTernary = ({bool}: BooleanProp): ReactNode => {
    return (<div>{bool ? 'yes': 'no'}</div>);
}

/**
 * This component uses an `&&` operator to display 'PRESENT' if true and nothing if false.
 * 
 * @param bool boolean value  
 * @returns React Component
 */
export const DisplayTextWithAndOperator = ({bool}: BooleanProp): ReactNode => {
    return (<>{bool && 'PRESENT'}</>);
}

/**
 * This component uses variables and if statements to conditionally display a nickname or first name.
 * 
 * @param bool boolean value
 * @param firstName string
 * @param lastName string
 * @param nickname string | undefined
 * @returns 
 */
export const ConditionallyAssignToVariable = ({firstName, lastName, nickname}: NamesProps): ReactNode => {
    let content = ' ' + lastName;

    if (typeof nickname !== 'undefined') {
        content = nickname + content;
    } else {
        content = firstName + content
    }

    return (<>
        <h3>NAME:</h3>
        <p>{content}</p>
    </>);
}