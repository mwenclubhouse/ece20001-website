import React from "react";
import ResponsiveDrawer from "../components/layout";
import Calendar from "../components/calendar";
import FirebaseInterface from "../firebase/FirebaseInterface";

interface Props {
    key: any,
    window?: () => Window;
}

export default function IndexPage(props: Props) {
    const [type, setType] = React.useState("prod");
    FirebaseInterface.getType().then((result: string) => {
        setType(result);
    })

    return (
        <ResponsiveDrawer
            title={type === "prod" ? "Fall 2020 ECE 20001": type === "dev" ? "Dev Fall 2020 ECE 20001": "Unknown"}
        >
            <Calendar/>
        </ResponsiveDrawer>
    )

}