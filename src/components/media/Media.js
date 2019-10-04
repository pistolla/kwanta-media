import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import MediaLinks from '../medialinks/MediaLinks';
import AddLink from '../addlink/AddLink';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        margin: 0
    },
    buttonPanel: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'right',
        
    }
}));

function Media({ connected, ...props }) {
    const welcomeMsg = "Hi, welcome to list of Urls you have added in watch list. You will be rewarded if a media does not have fake news."
    const classes = useStyles();

    return (
        <Grid className={classes.root} container data-test="MediaComponent">
            <Grid item xs={12} width="100%">
                {connected !== true ?
                    <div className={classes.buttonPanel} width="fullWidth">
                        <Button color="primary" size="large">Connect to MaskMask </Button>
                        <AddLink {...props} connected={connected}/>
                    </div>
                    : <Typography variant="subtitle1" paragraph align="left">{welcomeMsg}</Typography>}
            </Grid>
            <Grid item xs={12} width="100%">
            <MediaLinks {...props} searching={false} />
            </Grid>
        </Grid>
    );
}

export default Media;