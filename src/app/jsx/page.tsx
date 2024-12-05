import { ReactNode } from "react";
import { CamelCaseInMostCases, FragmentComponent, ImgMustBeClosed } from "./jsx-markup";

export default function Page(): ReactNode {
    return (<>
        <FragmentComponent />
        <ImgMustBeClosed />
        <CamelCaseInMostCases />
    </>);
}