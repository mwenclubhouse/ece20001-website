import ResponsiveDrawer from "../components/layout";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from "react";

interface Props {

}

export default function faq(props: Props) {
    return (
        <ResponsiveDrawer
        title={"FAQ"}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant={"h5"}>USE PIAZZA PLEASE!!!</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Professors and TAs want to know the type of questions you are
                        struggling on. DO
                        NOT ask people on GroupMe because A. You will probably get the wrong answer and B. Your professor won't
                        know how
                        to improve unless you make a comment about it.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography variant={"h5"}>This website is not helpful. Why does it exist?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography> I apologize. However, when I was a TA for this class, I noticed a ton of hardworking students who, in my opinion, deserved an A but ended up barely passing. As a result, I want to try my best to help ECE students, and I guess ME and IE students, get over this hump by giving out potential resources that can help them STUDY EFFECTIVELY. If you think this website can be better, send a suggestion to the developer to wen101@purdue.edu.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography variant={"h5"}>I am struggling on the Homework. What should I do?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>I would recommend going to office hours (open 35 hours a week). Some of the TAs are nice. In addition, your professors host office hours. However, the homework is not exactly like the exam. Therefore, you should not be caught up with the homework if you are struggling on it. If you are in a rush, at least UNDERSTAND THE CONCEPT.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant={"h5"}>I got less than a 50% on my first exam. What should I do?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>It is still possible to get an A in the class. Here is an example:
                        [exam 1: 20%, exam 2: 90%, exam 3: 90%, final: 76%, homework: 100%]. Even ask Tridib Saha about it. Understand what you did wrong and then do better next time.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant={"h5"}>What concept is the most important to understand in this class?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>OHMS LAW aka V = I * R. This does not mean just memorize the formula. You need to understand the relationship current has towards a resistor / capacitors/ inductor to create a voltage potential. To do so, understand the location of the positive and negative terminal [Voltage Terminal] of a load [resistor, inductor, capacitor], and the direction of current to get the correct answer</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant={"h5"}>How do I get an A in the class?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Understand ohms law before the first exam, as discussed above [completely -&gt; what is a node? How nodes have a voltage potential?]. Afterwards, you are set for the rest of the semester.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant={"h5"}>How do I complain about the difficulty of the exam?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>If you hate good professors and your TAs, use Piazza. Bad professors do not check piazza. Otherwise, talk about it with your professor with an attitude. Respect that this course may be difficult for many people, even those who are extremely hardworking.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant={"h5"}>I'm a better web developer than you. What should I do?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="mdc-typography--body1">Ahhh, fine. What you can do is fork the <a
                        href="https://github.com/matthewwen/ECE20001">repository</a>, and then send me an <a
                        href="mailto:wen101@purdue.edu">email</a> about it. I'll check it out and make some changes. I'm always
                        willing to improve my nifty coding ability. I am still trying to make it mobile friendly in the first
                        place, and
                        the bottom margin is off.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </ResponsiveDrawer>
    );
}