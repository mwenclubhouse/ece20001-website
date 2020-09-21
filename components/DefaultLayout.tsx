import React, {useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme, Theme, createStyles} from '@material-ui/core/styles';
import {Button, MenuItem} from "@material-ui/core";
import Menu from '@material-ui/core/Menu'
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import Box from "@material-ui/core/Box";
import {useRouter} from "next/router";
import FirebaseInterface from "../firebase/FirebaseInterface";
import Link from "next/link";

const drawerWidth = 240;
const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        title: {
            flexGrow: 1
        }
    }),
);

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    title: string;
    children: any;
    route: string;
}

function getLink(name, route, href, paddingLeft) {
    return {name: name, route: route, href: href, paddingLeft: paddingLeft};
}

function getDefaultNav() {
    return [
        [
            {name: "Home", route: "/", href: "/", paddingLeft: 0},
            {name: "FAQ", route: "/faq", href: "/faq", paddingLeft: 0},
            {name: "About", route: "/about", href: "/about", paddingLeft: 0},
        ]
    ]
}


export default function ResponsiveDrawer(props: Props) {
    const {route} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [showNav, setShowNav] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [sideNav, setSideNav] = React.useState([]);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        const threshold = 950;
        setShowNav(window.innerWidth > threshold);
        window.addEventListener('resize', () => setShowNav(window.innerWidth > threshold));
    }, []);

    FirebaseInterface.getSideNavigation().then((data) => {
        let newSideNav = getDefaultNav();
        if (data != null && "sideNavigation" in data) {
            const sideNav = data["sideNavigation"];
            let practiceList = []
            if ("practice" in sideNav) {
                for (let key in sideNav.practice) {
                    let weekItem = sideNav.practice[key];
                    let route = "/practice/" + key;
                    practiceList.push(getLink(weekItem.ref, route, route, 0))
                }
            }
            newSideNav.push(practiceList);
        }
        setSideNav(newSideNav);
    }).catch((e) => {
        let newSideNav = getDefaultNav();
        setSideNav(newSideNav);
    });

    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            {sideNav.map((listOfItem, listIdx) => (
                <div key={"drawer" + listIdx}>
                    {listOfItem.map((item, idx) => (
                        <Link href={item.href}>
                            <ListItem button key={item.name} selected={route == item.href}>
                                <ListItemText primary={item.name} style={{paddingLeft: item.paddingLeft}}>
                                </ListItemText>
                            </ListItem>
                        </Link>
                    ))}
                    <Divider/>
                </div>
            ))}
        </div>
    );

    const container = props.window !== undefined ? () => props.window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap className={classes.title}>
                        {props.title}
                    </Typography>
                    {showNav ?
                        <div style={{display: "flex", flexWrap: "wrap"}}>
                            <Button color="inherit" href={"https://groupme.com/join_group/61329275/IdKHkPJT"}>GroupMe</Button>
                            <Button color="inherit" href={"https://piazza.com/class/kdovsnn7adz4ms"}>Piazza</Button>
                            <Button color="inherit"
                                    href={"https://purdue.brightspace.com/d2l/home/54147"}>BrightSpace</Button>
                            <Button color="inherit"
                                    href={"https://www.gradescope.com/courses/169068"}>GradeScope</Button>
                        </div>
                        :
                        <div>
                            <IconButton
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                onClick={handleClick}>
                                <MoreVertIcon style={{color: "white"}}/>
                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '20ch',
                                    },
                                }}
                            >
                                <MenuItem key={"GroupMe"} onClick={() => {
                                    window.location.href = "https://groupme.com/join_group/61329275/IdKHkPJT";
                                }}>
                                    {"GroupMe"}
                                </MenuItem>
                                <MenuItem key={"Piazza"} onClick={() => {
                                    window.location.href = "https://piazza.com/class/kdovsnn7adz4ms";
                                }}>
                                    {"Piazza"}
                                </MenuItem>
                                <MenuItem key={"BrightSpace"} onClick={() => {
                                    window.location.href = "https://purdue.brightspace.com/d2l/home/54147";
                                }}>
                                    {"BrightSpace"}
                                </MenuItem>
                                <MenuItem key={"GradeScope"} onClick={() => {
                                    window.location.href = "https://www.gradescope.com/courses/169068";
                                }}>
                                    {"GradeScope"}
                                </MenuItem>
                            </Menu>
                        </div>}
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {props.children}
                <Copyright/>
            </main>
        </div>
    );
}