import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    panel: {
        width: '100%'
    },
    panelItem: {
        width: '100%'
    }
}));

function MediaLink({ link, expanded, onExpanded, ...props }) {
    const classes = useStyles();
    const [content] = useState("panel" + `${link.id}` + "bh-content")
    const [header] = useState("panel" + `${link.id}` + "bh-header")
    const handleChange = panel => (event, isExpanded) => {
        onExpanded(isExpanded ? panel : false);
    }

    return (
        <ExpansionPanel expanded={expanded === link.id} onChange={handleChange(link.id)} data-test="LinkComponent">
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={content}
                id={header}
                onChange={handleChange(link.id)}>
                <Typography className={classes.heading}>{link.title}</Typography>
                <Typography className={classes.secondaryHeading}>{link.canonical_url}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container className={classes.panel} spacing={2}>
                    <Grid item xs={12} md={6} className={classes.panelItem}>
                        <Grid container justify="center" spacing={0}>

                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.panelItem}>
                        <Grid container justify="center" spacing={0}>

                        </Grid>
                    </Grid>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

export default MediaLink;