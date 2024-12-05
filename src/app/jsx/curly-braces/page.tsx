import { ReactNode } from "react";
import { DisplayString, PassStylingObject, StringPassing } from "./curly-braces";

export default function(): ReactNode {
    return (<>
        <StringPassing />
        <DisplayString />
        <PassStylingObject />
    </>);
}