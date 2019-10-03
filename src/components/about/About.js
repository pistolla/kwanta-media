import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    addButton: {
        margin: theme.spacing.unit
    }
}))

function About(props) {
    const classes = useStyles();
    const [index, setIndex] = useState(0);

    return (
        <div data-test="AboutComponent">
            This is pretty boring About page
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