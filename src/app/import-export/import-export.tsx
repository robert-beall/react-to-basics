/**
 * This is the default export of the file. There
 * can only be one default export per file. 
 * 
 * @returns React Component
 */
const DefaultComponent = () => {
    return <div>This is the default exported component</div>;
};

/**
 * This is a named export. There can be multiple named
 * exports in a file.
 * 
 * @returns React Component
 */
export const NamedComponent = () => {
    return <div>This is a named component</div>;
};

export default DefaultComponent;