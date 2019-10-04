import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button, Grid, Paper, Toolbar, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    }
}))
function Account({ transactions = [], connected, ...props }) {
    const classes = useStyles();
    const welcomeMsg = "Welcome to your personal Kwanta Wallet.";
    const handleClick = () => {
        console.log("clicked")
    }
    return (
        <Grid className={classes.root} container data-test="AccountComponent">
            <Grid item xs={12} width="100%">
                {connected === false ?
                    <Button color="primary" size="large">Connect to MaskMask </Button>
                    : <Typography variant="subtitle1" paragraph align="left">{welcomeMsg}</Typography>}
            </Grid>
            {connected === false ?
                <Grid item xs={12} width="100%">
                    <Paper >
                        <Toolbar color="primary">
                            <Typography variant="h6">Wallet History</Typography>
                        </Toolbar>
                        <List>
                            {transactions.map((value, index) => {
                                return (
                                    <ListItem button key={index} onClick={handleClick.bind(this, index)}>
                                        <ListItemIcon></ListItemIcon>
                                        <ListItemText primary={value.description} />
                                    </ListItem>
                                )
                            })
                            }
                        </List>
                    </Paper>
                </Grid>
                : ''}
        </Grid>
    );
}

export default Account;