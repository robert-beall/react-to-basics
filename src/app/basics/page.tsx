import { FirstComponent, NestedDefinitionsComponent, SecondComponent, lowercaseComponent } from "./basics";

export default function Page(): JSX.Element {
    return (<>
        <FirstComponent />
        <SecondComponent />
        {/* This throws an error when uncommented: <lowercaseComponent />  */}
        <NestedDefinitionsComponent /> {/* This is ugly and error prone (but it works). */}
    </>);
}