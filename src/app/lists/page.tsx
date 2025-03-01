import { ReactNode } from "react";
import { BasicFilteredList, BasicListDisplay, ListWithKey } from "./lists";

const Page = (): ReactNode => {
    return (<>
        <h1>Basic List Display</h1>
        <BasicListDisplay list={['a', 'b', 'c']} />
        <hr/><br/>

        <h1>Basic List Display with Filtering</h1>
        <BasicFilteredList list={['a', 'bbb', 'cc']} filterLength={3} />
        <hr/><br/>

        <h1>Basic List Display</h1>
        <ListWithKey list={[{key: '1', value: 'Hello'}, {key: '2', value: 'world'}]} />
        <hr/><br/>
    </>);
}

export default Page