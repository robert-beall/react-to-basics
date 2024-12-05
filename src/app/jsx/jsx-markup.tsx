import { ReactNode } from "react";

export const FragmentComponent = (): ReactNode => {
    return (
        <> {/** This is a fragment tag */}
            <div>Hello World</div>
            <div>Goodnight Moon</div>
        </>
    );
};

export const ImgMustBeClosed = (): ReactNode => {
    return <img />
}

export const CamelCaseInMostCases = (): ReactNode => {
    return (<div
        className="text-blue-700"
        data-testid="dashes-for-historical-purposes"
    >
        Attributes
    </div>);
}