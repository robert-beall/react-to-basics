import { ReactNode } from "react";
import { BasicDisplay, ComponentPassingJSXChildren, ComponentWithDefaultPropValue, ComponentWithForwardedProps, ComponentWithProps } from "./props";

const Page = (): ReactNode => {
    return (<>
        <h1>Basic Component with Prop</h1>
        <ComponentWithProps name="Robert Beall" />
        <br /><hr />
        <h1>Component with Default Prop</h1>
        <ComponentWithDefaultPropValue />
        <br /><hr />
        <h1>Component with Forwarded Props</h1>
        <ComponentWithForwardedProps id='id1' name='Max Shreck' quantity={1897} />
        <br /><hr />
        <h1>Component with JSX Children</h1>
        <ComponentPassingJSXChildren>
            <div>A Div to display</div>
            <h3>A heading to display</h3>
            <BasicDisplay value="pear" />
            <BasicDisplay value="prune" />
        </ComponentPassingJSXChildren>
    </>);
};

export default Page;