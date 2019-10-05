import React, { useState, Fragment } from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Grid,
    Paper,
    FormControlLabel,
    MenuItem
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Select } from 'final-form-material-ui';

const useStyles = makeStyles(theme => ({
    addButton: {
        margin: theme.spacing.unit
    },
    gridContainer:{
        marginTop: '10px'
    }
}))

function AddLink({account, ...props}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [form] = useState({ url: '', token: account, type: '', author: false, seed: 0, accept: false });

    const handleClose = () => {
        setOpen(!open);
    };

    const onSubmit = () => {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        sleep(300);
        window.alert(JSON.stringify(form, 0, 2));
    }

    const validate = values => {
        const errors = {};
        if (!values.url) {
            errors.url = 'Required';
        }
        if (!values.token) {
            errors.token = 'Required';
        }
        if (!values.type) {
            errors.type = 'Required';
        }
        if (!values.seed) {
            errors.seed = 'Required';
        }
        if (!values.author) {
            errors.author = 'Required';
        }
        
        return errors;
    };

    const reset = () => {

    }

    const submitting = () => {

    }

    const pristine = () => {

    }

    return (
        <Fragment data-test="AddLinkComponent">
            <Button onClick={handleClose} color="primary" aria-label="add" className={classes.addButton} startIcon={<AddIcon />}>
                Add Media
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledBy="create-link-form">
                <DialogTitle id="create-link-form">Add a link to a media you authored</DialogTitle>
                <DialogContent>
                    <Form
                        onSubmit={onSubmit}
                        initialValues={form}
                        validate={validate}
                        render={({ handleSubmit, reset, submitting, pristine, form }) => (
                            <form onSubmit={handleSubmit} noValidate>
                                <Paper style={{ padding: 16 }}>
                                    <Grid container alignItems="flex-start" spacing={2} >
                                        <Grid items xs={12} className={classes.gridContainer}>
                                            <Field
                                                fullWidth
                                                required
                                                name="url"
                                                component={TextField}
                                                type="text"
                                                label="Domain URL" />
                                        </Grid>

                                        <Grid items xs={12} className={classes.gridContainer}>
                                            <Field
                                                fullWidth
                                                required
                                                name="token"
                                                component={TextField}
                                                type="text"
                                                disabled
                                                label="Wallet Address" />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Field 
                                            fullWidth
                                            name="type"
                                            component={Select}
                                            label="Select the Media type"
                                            formControlProps={{ fullWidth: true}}>
                                                <MenuItem value="Twitter">Twitter</MenuItem>
                                                <MenuItem value="Blog">Blog</MenuItem>
                                                <MenuItem value="Facebook">Facebook</MenuItem>
                                            </Field>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                label="Are you the author of this article?"
                                                control={
                                                    <Field
                                                        name="author"
                                                        component={Checkbox}
                                                        type="checkbox"
                                                    />
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                label="Accept term and conditions"
                                                control={
                                                    <Field
                                                        name="accept"
                                                        component={Checkbox}
                                                        type="checkbox"
                                                    />
                                                }
                                            />
                                        </Grid>

                                    </Grid>
                                </Paper>
                            </form>
                        )}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        type="button"
                        variant="contained"
                        onClick={reset}
                        disabled={submitting || pristine}
                    >
                        Reset
                  </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={submitting}
                    >
                        Submit
                  </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default AddLink;