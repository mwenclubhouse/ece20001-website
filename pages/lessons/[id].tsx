import ResponsiveDrawer from "../../components/DefaultLayout";
import React, {useEffect} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import Head from "next/head";
import FirebaseInterface from "../../firebase/FirebaseInterface";
import FirebaseLessons from "../../firebase/FirebaseLessons";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Image} from "@material-ui/icons";
import ReactCardFlip from 'react-card-flip';
import Problem from "../../components/problem";

interface Prop {
    route: string;
    id: string;
}

export async function getStaticProps({params}) {
    return {
        props: {
            route: "/lessons/" + params.id,
            id: params.id
        }
    }
}

export async function getStaticPaths() {
    let data = await FirebaseInterface.getLectures();
    const paths = []
    if (data != null && "lectures" in data) {
        for (let key in data.lectures) {
            paths.push("/lessons/" + key)
        }
    }
    return {
        paths,
        fallback: false
    }
}

export default function Lesson(props: Prop) {
    const [title, setTitle] = React.useState("");
    const [problems, setProblems] = React.useState([]);
    const {route, id} = props;
    const loadingData = async () => {
        const uidResponse = await FirebaseInterface.getRouteUid(id);
        if (uidResponse == null) {
            return
        }
        const pageResponse = await FirebaseLessons.getPageByUid(uidResponse.uid);
        const attributes = pageResponse.data();
        setTitle(attributes["Title"])
        if (problems.length == 0) {
            let items = [];
            for (let i of attributes["lessons"]) {
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