import React, { useState, Fragment } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    addButton: {
        margin: theme.spacing.unit
    }
}))

function AddLink(){
    const classes = useStyles();
    const { open } = useState(false);
    const { url } = useState('');
 
    handleClose = () => {
        this.setState({open: false});   
    };

    handleSubmit = () => {
        
    }

    handleUrlChange = (name) => event => {
        this.setState({
            name: event.target.value
        })
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
                    <TextField
                        autoFocus
                        id="input-link"
                        label="Add Domain"
                        type="text"
                        fullWidth
                        onChange={this.handleUrlChange}
                    />
                    <TextField
                        autoFocus
                        id="input-link"
                        label="Add a URL to media resource"
                        type="text"
                        fullWidth
                        onChange={this.handleUrlChange}
                    />
                    <TextField
                        autoFocus
                        id="input-link"
                        label="Select the type of media resource"
                        type="text"
                        fullWidth
                        onChange={this.handleUrlChange}
                    />
                    <TextField
                        autoFocus
                        id="input-link"
                        label="Are you the author or do you have write access to this media content?"
                        type="text"
                        fullWidth
                        onChange={this.handleUrlChange}
                    />
                    <TextField
                        autoFocus
                        id="input-link"
                        label="Add the seed token for this url"
                        type="text"
                        fullWidth
                        onChange={this.handleUrlChange}
                    />
                    <TextField
                        autoFocus
                        id="input-link"
                        label="Agree to term and conditions"
                        type="text"
                        fullWidth
                        onChange={this.handleUrlChange}
                    />
                    </form>
                    
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