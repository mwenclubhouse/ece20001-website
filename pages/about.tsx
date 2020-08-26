import React from 'react';
import Typography from '@material-ui/core/Typography';
import ResponsiveDrawer from "../components/layout";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
interface Props {}

const styles = {
    titleType: {
        marginTop: 30,
        marginBottom: 5
    }
}


const rows = [
    {
        title: "Content Here Will Always Be Free",
        description: "There will be no intention of creating any sort of paid subscription in order for people to do better in the course. If I feel comfortable releasing MY scratch work, it will be posted on this website.",
        date: "8/26/2020"
    },
    {
        title: "Purdue Content Will Only Reference Through Purdue Provider",
        description: "This website will not upload documents from Purdue BrightSpace. If you want access to content from a professor, use BrightSpace. However, if I want to reference content from BrightSpace, I will utilize it as a link.",
        date: "8/26/2020"
    },
    {
        title: "Grades / Curve will not be individually disclosed",
        description: "This website will never ask about your current score in the course, nor log your personal account with your Purdue account. That does mean that the curve cannot be discussed here.",
        date: "8/26/2020"
    },
    {
        title: "This website will not be referenced / promoted using Purdue services.",
        description: "Purdue has not affiliation with this website. As a result, this website cannot be promoted to services like Piazza. GroupMe, Text messages, Facebook or any personal account means is valid.",
        date: "8/26/2020"
    },
    {
        title: "This website is not responsible for incorrect information / failing if you do bad after looking at it.",
        description: "Even though this website is not perfect, it will no means be responsible for incorrect information on it. As a result, if you do bad on an exam because a piece of misleading information, then you have to deal with it because this website is not made by a Purdue Professor. Rely on BrightSpace for the most correct information for exams.",
        date: "8/26/2020"
    },
];


export default function About(props: Props) {
    return (
        <ResponsiveDrawer
            title={"About"}>
            <Typography variant={"h5"} style={{marginBottom: 5}}>The Developer</Typography>
            <Typography>
                The Developer for this website is <a href={"https://www.matthewwen.com"}>me (Matthew Wen).</a> This is my second time being a UTA for this class. This website have no affiliation with Purdue University because Purdue did not ask for this website to become developed. This is rather a tool that students can use to quickly access notes from my WebEx meetings, notes from BrightSpace, or WebEx meetings hosted by TAs.
            </Typography>

            <Typography variant={"h5"} style={styles.titleType}>The Source Code</Typography>
            <Typography>
                This website utilizes <a href={"https://nextjs.org/"}>Next.JS</a> + <a href={"https://reactjs.org/"}>React (from Facebook)</a>. Major companies like Netflix, Hulu, and TikTok use this framework, so I definitely recommend checking it out. Here is the <a href={"https://github.com/mwenclubhouse/ece20001-website"}>github repository</a> if you want to check it out locally.
            </Typography>

            <Typography variant={"h5"} style={styles.titleType}>Rules to Website</Typography>
            <Typography>I want to establish rules that this website will follow in order to protect the students who are taking this course; in addition, protect any sort of property of Purdue University.</Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Rules</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="right">Date Effective</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.title}>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="left">{row.description}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </ResponsiveDrawer>
    );
}
