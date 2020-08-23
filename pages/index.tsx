import React from "react";
import {Typography} from "@material-ui/core";
import ResponsiveDrawer from "../components/layout";

interface Props {
    window?: () => Window;
}

export default function IndexPage(props: Props) {

    return (
        <ResponsiveDrawer
            title={"ECE 20001"}
        >
            <Typography>Hello There</Typography>
        </ResponsiveDrawer>
    )

}