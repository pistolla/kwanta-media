import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Form, Field } from 'react-final-form';
import { Typography, Button, TextField, Grid, Paper, Toolbar, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyItems: 'space_around'
    },
    form: {
        paddingLeft: '20px',
        paddingRight: '20px',
        marginBottom: '40px'
    },
    gridContainer: {
        marginTop: '10px'
    },
    submitBtn: {
        marginTop: '10px'
    }
}))
function Account({ transactions = [], account, connected, ...props }) {
    const classes = useStyles();
    const welcomeMsg = "Welcome to your personal Kwanta Wallet.";
    const heading = `Transfer Ethers to ${account}`
    const handleClick = () => {
        console.log("clicked")
    }
    const handleSubmit = () => {

    }
    return (
        <Grid className={classes.root} container data-test="AccountComponent">
            <Grid item xs={12} width="100%">
                {connected === false ?
                    <Button color="primary" size="large">Connect to MaskMask </Button>
                    : <Typography variant="subtitle1" paragraph align="left">{welcomeMsg}</Typography>}
            </Grid>
            {connected === true ?
                <Fragment>
                    <Grid item xs={9} width="100%" >
                        <Form
                            
                            onSubmit={handleSubmit}
                            render={() => (
                                <form onSubmit={handleSubmit} noValidate>
                                    <Paper className={classes.form} >
                                        <Toolbar color="primary">
                                            <Typography variant="h6">{heading}</Typography>
                                        </Toolbar>
                                        <Grid container alignItems="flex-start" spacing={2} >
                                            <Grid item xs={12} className={classes.gridContainer}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="url"
                                                    component={TextField}
                                                    type="text"
                                                    label="Account Balance" />
                                            </Grid>
                                            <Grid item xs={12} className={classes.gridContainer}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="url"
                                                    component={TextField}
                                                    type="text"
                                                    label="Amount to Withdraw" />
                                            </Grid>
                                            <Grid item xs={12} className={classes.gridContainer}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="url"
                                                    component={TextField}
                                                    type="text"
                                                    label="Network Charges" />
                                            </Grid>
                                            <Grid item xs={12} className={classes.gridContainer}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="url"
                                                    component={TextField}
                                                    type="text"
                                                    label="Gas" />
                                            </Grid>
                                            <Grid item xs={12} className={classes.gridContainer}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="url"
                                                    component={TextField}
                                                    type="text"
                                                    label="Total Withdrawable" />
                                            </Grid>
                                            <Grid item xs={12} className={classes.gridContainer}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    size="large"
                                                >Submit</Button>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </form>
                            )} />
                    </Grid>

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
                </Fragment>
                : ''}
        </Grid>
    );
}

export default Account;