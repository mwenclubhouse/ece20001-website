import React from "react";
import ResponsiveDrawer from "../components/layout";
import Calendar from "../components/calendar";
import FirebaseInterface from "../firebase/FirebaseInterface";

interface Props {
    key: any,
    window?: () => Window;
}

export default function IndexPage(props: Props) {
    const db = FirebaseInterface.database;

    return (
        <ResponsiveDrawer
            title={"ECE 20001"}
        >
            <Calendar/>
        </ResponsiveDrawer>
    )

}