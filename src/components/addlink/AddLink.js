import React, { useState, Fragment } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';

const useState = makeStyles(theme => ({
    addButton: {
        margin: theme.spacing.unit
    }
}))

function AddLink(){
    const classes = useStyles();
    const { open } = useState(false);
 
    handleClose = () => {
        this.setState({open: false});   
    };

    handleSubmit = () => {
        
    } 

    return (
        <Fragment data-test="AddLinkComponent">
            <Button onClick={this.handleClose} color="primary" aria-label="add" className={this.classes.addButton}>
                <AddIcon />
            </Button>
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledBy="create-link-form">
                <DialogTitle id="create-link-form">Paste a link</DialogTitle>
                <DialogContent>
                    <form>

                    </form>
                    <TextField
                        autoFocus
                        id="input-link"
                        label="Add a link to media resource"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleSubmit} color="primary">Create</Button>
                    <Button onClick={this.handleClose} color="secondary">Cancel</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default AddLink;