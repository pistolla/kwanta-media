import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, Paper } from '@material-ui/core';
import MediaLinks from '../medialinks/MediaLinks';
import AddLink from '../addlink/AddLink';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    },
    buttonPanel: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'right',

    }
}));

function Media({ connected, account, ...props }) {
    const welcomeMsg = "Hi, welcome to your watch list. You will be rewarded if a media does not have fake news."
    const classes = useStyles();
    const connectMetamask = () => {
        window.alert('Please ensure your browser has metamask extension');
    }
    return (
        <Grid className={classes.root} container data-test="MediaComponent">
            <Grid item xs={12} width="100%">
                <Typography variant="h5" paragraph align="left">{welcomeMsg}</Typography>
            </Grid>
            <Grid item xs={12} width="100%">
                <Paper className={classes.buttonPanel} width="fullWidth">
                    {connected !== true ? <Button onClick={connectMetamask} color="secondary" size="large">Connect to MaskMask </Button> :
                    <AddLink {...props} connected={connected} account={account}/>}
                </Paper>
            </Grid>
            
            <Grid item xs={12} width="100%">
                <MediaLinks {...props} searching={false} />
            </Grid>
        </Grid>
    );
}

export default Media;