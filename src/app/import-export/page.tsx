import { ReactNode } from "react";
import MyDefault, { NamedComponent } from "./import-export";

const Page = (): ReactNode => {
    return (<>
        <MyDefault /> {/* I can alias the default export to any name I want */}
        <NamedComponent />
    </>);
};

export default Page;