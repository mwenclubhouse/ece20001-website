import React from "react";
import {createStyles, Link, Theme, Typography} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/styles";
import ResponsiveDrawer from "./DefaultLayout";

interface Props {
}

const styles = {
    calendarBox: {border: "1px solid gray", flex: 1}
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            minWidth: 450,
            maxWidth: 1500,
            marginLeft: "auto",
            marginRight: "auto",
        },
        paper: {
            height: 60,
        },
        control: {
            padding: theme.spacing(0),
        },
    }),
);

const ta = {
    Matthew: {type: "UTA", ref: "https://purdue.webex.com/meet/wen101"},
    Ziyue: {type: "UTA", ref: "https://purdue.webex.com/meet/he532"},
    Jagan: {type: "UTA", ref: "https://purdue.webex.com/meet/krish133"},
    Viraj: {type: "UTA", ref: "https://purdue.webex.com/meet/vmantri"},
    Akshay: {type: "UTA", ref: "https://purdue.webex.com/meet/aravinda"},
    Danial: {type: "UTA", ref: "https://purdue.webex.com/meet/nnoraziz"},
    Rufat: {type: "UTA", ref: "https://purdue.webex.com/meet/rimanov"},
    Tin: {type: "UTA", ref: "https://purdue.webex.com/meet/tran201"},
    Arvel: {type: "GTA", ref: "https://purdue.webex.com/meet/reeves40"},
    Ciyuan: {type: "GTA", ref: "https://purdue.webex.com/meet/zhan3375"},
    Jim: {type: "GTA", ref: "https://purdue.webex.com/meet/lim316"},
    Jie: {type: "GTA", ref: "https://purdue.webex.com/meet/zhu797"},
    Tridib: {type: "GTA", ref: "https://purdue.webex.com/meet/tsaha"},
}

const data = [
    {
        day: "", hours: [
            {h: 10},
            {h: 11},
            {h: 12},
            {h: -1},
            {h: 14},
            {h: 15},
            {h: 16},
            {h: -2},
            {h: 19},
            {h: 20},
            {h: 21},
            {h: 22}
        ]
    },
    {
        day: "Monday", hours: [
            {h: 10, p: ["Jim", "Rufat"]},
            {h: 11, p: ["Jim", "Rufat"]},
            {h: 12, p: ["Akshay", "Rufat"]},
            {h: -1, p: []},
            {h: 14, p: ["Jim", "Jie"]},
            {h: 15, p: ["Jim", "Jie"]},
            {h: 16, p: ["Arvel", "Jie"]},
            {h: -2, p: []},
            {h: 19, p: ["Arvel", "Matthew"]},
            {h: 20, p: ["Arvel", "Matthew"]},
            {h: 21, p: ["Arvel", "Matthew"]},
            {h: 22, p: ["Arvel", "Matthew"]}
        ]
    },
    {
        day: "Tuesday", hours: [
            {h: 10, p: ["Danial", "Viraj"]},
            {h: 11, p: ["Danial", "Viraj"]},
            {h: 12, p: ["Danial", "Viraj"]},
            {h: -1, p: []},
            {h: 14, p: ["Akshay", "Tin"]},
            {h: 15, p: ["Akshay", "Tin"]},
            {h: 16, p: ["Ciyuan", "Tin"]},
            {h: -2, p: []},
            {h: 19, p: ["Ciyuan", "Ziyue"]},
            {h: 20, p: ["Arvel", "Ziyue"]},
            {h: 21, p: ["Arvel", "Ziyue"]},
            {h: 22, p: ["Arvel", "Ziyue"]}
        ]
    },
    {
        day: "Wednesday", hours: [
            {h: 10, p: ["Jie", "Jim"]},
            {h: 11, p: ["Jagan", "Jim"]},
            {h: 12, p: ["Jagan", "Ziyue"]},
            {h: -1, p: []},
            {h: 14, p: ["Jie", "Akshay"]},
            {h: 15, p: ["Jie", "Akshay"]},
            {h: 16, p: ["Ciyuan", "Danial"]},
            {h: -2, p: []},
            {h: 19, p: ["Rufat", "Danial"]},
            {h: 20, p: ["Rufat", "Danial"]},
            {h: 21, p: ["Matthew", "Viraj"]},
            {h: 22, p: ["Matthew", "Viraj"]}
        ]
    },
    {
        day: "Thursday", hours: [
            {h: 10, p: ["Jim", "Rufat"]},
            {h: 11, p: ["Jim", "Rufat"]},
            {h: 12, p: ["Ziyue", "Rufat"]},
            {h: -1, p: []},
            {h: 14, p: ["Viraj", "Jagan"]},
            {h: 15, p: ["Viraj", "Jagan"]},
            {h: 16, p: ["Danial", "Jagan"]},
            {h: -2, p: []},
            {h: 19, p: ["Danial", "Arvel"]},
            {h: 20, p: ["Danial", "Arvel"]},
            {h: 21, p: ["Ziyue", "Tin"]},
            {h: 22, p: ["Ziyue", "Tin"]}
        ]
    },
    {
        day: "Friday", hours: [
            {h: 10, p: ["Jim", "Jie"]},
            {h: 11, p: ["Jim", "Jagan"]},
            {h: 12, p: ["Akshay", "Jagan"]},
            {h: -1, p: []},
            {h: 14, p: ["Tin", "Matthew"]},
            {h: 15, p: ["Tin", "Akshay"]},
            {h: 16, p: ["Tin", "Ciyuan"]},
            {h: -2, p: []},
            {h: 19, p: ["Jagan", "Ciyuan"]},
            {h: 20, p: ["Jagan", "Danial"]},
            {h: 21, p: ["Jagan", "Danial"]},
            {h: 22, p: ["Jagan", "Danial"]}
        ]
    },
]

export default function Calendar(props: Props) {
    const classes = useStyles();

    const hourString = (hour) => {
        return (hour % 13 + (hour <= 12 ? 0 : 1)) + (hour < 12 ? "am" : "pm")
    }

    const hour = (value, hour) => (
        <Grid key={value.day + hour.h}>
            {hour.h > 0 ?
                <div className={classes.paper} style={value.day === "" ? null : styles.calendarBox}>
                    {value.day === "" ?
                        <Typography align={"right"}>{hourString(hour.h)}</Typography> :
                        <div>
                            {hour.p.map((item, idx) => (
                                <Typography align={"center"} key={"TAOption" + idx}>
                                    <Link href="#"
                                          onClick={() => {
                                              const obj = ta[item];
                                              window.location.href = obj.ref;
                                          }}
                                          style={{color: ta[item].type == "UTA" ? "orange": "green"}}
                                    >
                                        {item}
                                    </Link></Typography>
                            ))}
                        </div>
                    }
                </div> :
                value.day === "" ?
                    <div className={classes.paper}>
                        <Typography align={"right"}>Break</Typography>
                    </div> :
                    <div className={classes.paper} style={{backgroundColor: "gray"}}/>
            }
        </Grid>
    )

    const day = (value) => {
        return (
            value.hours.map((item, i) => (
                hour(value, item)
            ))
        )
    }

    return (
        <Grid container className={classes.root} style={{width: "100%"}}>
            <Grid item xs={12}>
                <Grid container style={{flex: 1}} spacing={1}>
                    {data.map((value, i) => (
                        <div key={"calendar-timestamp" + i} style={i != 0 ? {flex: 1} : {marginRight: 10}}>
                            <Grid key={value.day + "0"} style={{flex: 1, height: 30}}>
                                <Typography align={"center"}>{value.day}</Typography>
                            </Grid>
                            {day(value)}
                        </div>
                    ))}
                </Grid>
                <Typography align={"right"} style={{marginTop: 10}}>Green is a GTA, Orange is a UTA.</Typography>
            </Grid>
        </Grid>
    )
}