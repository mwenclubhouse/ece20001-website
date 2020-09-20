import React from "react";
import ResponsiveDrawer from "../components/DefaultLayout";
import Calendar from "../components/calendar";
import FirebaseInterface from "../firebase/FirebaseInterface";
import Head from "next/head";

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
            route={"/"}
        >
            <Head>
                <title>ECE 20001: Home</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <Calendar/>
        </ResponsiveDrawer>
    )

}