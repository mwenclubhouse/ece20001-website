import ResponsiveDrawer from "../../components/DefaultLayout";
import React from "react";
import Head from "next/head";
import FirebaseInterface from "../../firebase/FirebaseInterface";
import FirebaseLessons from "../../firebase/FirebaseLessons";
import Problem from "../../components/problem";
import {useRouter} from "next/router";

export default function Lesson() {
    const [title, setTitle] = React.useState("");
    const [problems, setProblems] = React.useState([]);
    const router = useRouter();
    const {id} = router.query
    const route = "/practice/" + id;
    const loadingData = async () => {
        const uidResponse = await FirebaseInterface.getRouteUid(route);
        if (uidResponse == null) {
            return
        }
        const pageResponse = await FirebaseLessons.getPageByUid(uidResponse.uid);
        const attributes = pageResponse.data();
        setTitle(attributes["Title"])
        if (problems.length == 0) {
            let items = [];
            for (let i of attributes["practice"]) {
                let lesson = await FirebaseLessons.loadLessonByUid(i);
                items.push(lesson);
            }
            setProblems(items);
        }
    }
    loadingData().then()

    return (
        <ResponsiveDrawer
            route={route}
            title={title}>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>

            <div style={{maxWidth: 1080, marginLeft: "auto", marginRight: "auto"}}>
                {problems.map((item: FirebaseLessons, index) => (
                    <Problem
                        index={index}
                        item={item}
                    />
                ))}

            </div>


        </ResponsiveDrawer>
    )
}