import ResponsiveDrawer from "../components/DefaultLayout";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from "react";
import Head from "next/head";

interface Props {}

const data = [
    {title: "Should I use Piazza or GroupMe?", body: "Professors and TAs want to know the type of questions you are struggling on. DO NOT ask people on GroupMe because A. You will probably get the wrong answer and B. Your professor won't know how to improve unless you make a comment about it."},
    {title: "Why does this website exists?", body: "When I was a TA for this class, I noticed a ton of hardworking students who, in my opinion, deserved an A but ended up barely passing. As a result, I want to try my best to help ECE students, and I guess ME and IE students, get over this hump by giving out potential resources that can help them STUDY EFFECTIVELY. If you think this website can be better, send a suggestion to the developer to wen101@purdue.edu."},
    {title: "How do I better understand the homework?", body: "Attend the online office hours. The GTA and the TAs are trying their best to help you."},
    {title: "How do I get an A if I got less than a 50% on the first exam", body: "Utilize office hours, because the content from the first exam will be used for the rest of the class."},
    {title: "Best way to complain?", body: "Piazza. I will ignore it."},
    {title: "Want to help the project?", body: "Just let me know. Give me suggestions during office horus"}
]

export default function faq(props: Props) {
    return (
        <ResponsiveDrawer
            route={"/faq"}
            title={"FAQ"}>
            <Head>
                <title>ECE 20001: FAQ</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <div style={{maxWidth: 1080, marginLeft: "auto", marginRight: "auto"}}>
                {data.map((item, index) => (
                    <Accordion
                        key={"FAQ Option" + index}
                        defaultExpanded={true}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant={"h6"} style={{flex: 1}}>{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{item.body}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </ResponsiveDrawer>
    );
}