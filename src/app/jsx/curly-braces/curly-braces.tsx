import { ReactNode } from "react";

const idName = 'id-1';
const textValue = 'DYNAMIC TEXT';

export const StringPassing = (): ReactNode => {
    return <div id={idName}>Text</div>;
};

export const DisplayString = (): ReactNode => {
    return <div>{textValue}</div>;
};

export const PassStylingObject = (): ReactNode => {
    return <div style={{backgroundColor: 'blue'}}>SOME MORE TEXT</div>;
}
