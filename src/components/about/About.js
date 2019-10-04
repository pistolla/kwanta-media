import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        ['@media (min-width:600px)']: {
            width: drawerWidth,
            flexShrink: 0,
        },
        zIndex: 1000
    },
    menuButton: {
        marginRight: '8px',
        ['@media (min-width:600px)']: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: '7.5rem',
    },
    toolbar: {
        height: '70px'
    }
}))

function About(props) {
    const theme = useTheme();
    const classes = useStyles();
    const [index, setIndex] = useState(0);
    
    
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleClick = (event) => {
        console.log(event);
    }
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem button key="Getting Started" onClick={handleClick.bind(this, 0)}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Getting Started" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key="Contact" onClick={handleClick.bind(this, 1)}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key="Legal" onClick={handleClick.bind(this, 2)}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Legal" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.root} data-test="AboutComponent">
            <nav className={classes.drawer} aria-label="Getting started">
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor="left"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>

            </main>
        </div>
    )
}

function Contactform(props) {
    const classes = useStyles();

    return (
        <div>
            Contact Form
        </div>
    );
}

function Agreement(props) {
    const classes = useStyles();

    return (
        <div>
            Terms and Conditions
        </div>
    );
}

function Manual(props) {
    const classes = useStyles();

    return (
        <div>
            Manual
        </div>
    );
}

export default About;