import { ReactNode } from "react";
import { ConditionallyAssignToVariable, ConditionalWithIf, DisplayTextWithAndOperator, DisplayTextWithTernary, OnlyDisplayIfTrue } from "./conditional-rendering";

const Page = (): ReactNode => {
    return (<>
        <h1>Conditional Rendering with If Statements</h1>
        <h2>This component displays the following on true:</h2>
        <ConditionalWithIf bool={true} />
        <h2>On false, it displays this:</h2>
        <ConditionalWithIf bool={false} />
        <hr/><br/>
        <h1>Returning Null</h1>
        <h2>This component displays on true:</h2>
        <OnlyDisplayIfTrue bool={true} />
        <h2>On false, null is returned and nothing displays:</h2>
        <OnlyDisplayIfTrue bool={false} />
        <hr/><br/>
        <h1>Displaying Text With Ternaries</h1>
        <h2>This component uses ternaries to display the following on true:</h2>
        <DisplayTextWithTernary bool={true} />
        <h2>On False it displays:</h2>
        <DisplayTextWithTernary bool={false} />
        <hr/><br/>
        <h1>Displaying Text with && Operator</h1>
        <h2>On True, this component displays: </h2>
        <DisplayTextWithAndOperator bool={true} />
        <h2>Nothing is displayed on false:</h2>
        <DisplayTextWithAndOperator bool={false} />
        <hr/><br/>
        <h1>This component will conditionally display a nickname if provided, and a first name otherwise</h1>
        <h2>No Nickname:</h2>
        <ConditionallyAssignToVariable firstName="Robert" lastName="Beall" />
        <h2>With Nickname:</h2>
        <ConditionallyAssignToVariable firstName="Robert" lastName="Beall" nickname="Bobby" />
    </>);
};

export default Page;