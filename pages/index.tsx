import React from "react";
import {Typography} from "@material-ui/core";
import ResponsiveDrawer from "../components/layout";
import Calendar from "../components/calendar";

interface Props {
    window?: () => Window;
}

export default function IndexPage(props: Props) {

    return (
        <ResponsiveDrawer
            title={"ECE 20001"}
        >
            <Calendar/>
        </ResponsiveDrawer>
    )

}