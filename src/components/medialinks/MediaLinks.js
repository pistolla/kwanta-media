import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, IconButton, Grid } from '@material-ui/core';
import { HourglassEmpty } from '@material-ui/icons';
import MediaLink from '../link/MediaLink';
import FilterMediaLinks from '../filtermedialinks/FilterMediaLinks';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        margin: 0
    },
    emptyIcon: {
        width: '150px',
        height: '150px',
    },
    emptyContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

function MediaLinks({ mediaUrls, searching, ...props }) {
    const [expanded, setExpanded] = useState(mediaUrls[0]);
    const [filterByScore, setFilterByScore] = useState(1);
    const handleExpanded = (ex) => {
        console.log(ex);
        setExpanded(ex)
    }
    const handleOnFilterScore = (score) => {
        setFilterByScore(score);
    }
    const classes = useStyles();
    const emptyMesage = "Oops! there seem to be no profitable links to watch, try to add in watchlist or search";

    return (
        <Grid className={classes.root} container data-test="MediaLinksComponent">
            <Grid item sm={12} width="100%" >
                <FilterMediaLinks {...props} onFilterScore={handleOnFilterScore} />
            </Grid>
            <Grid item xs={12} width="100%">
                {mediaUrls.length !== 0 && searching !== true ? mediaUrls.map((value, index) => {
                    return <MediaLink {...props} link={value} key={index} expanded={expanded} onExpanded={handleExpanded} />
                }) :
                    <div align="center" width="100%" className="emptyContainer">
                        <IconButton className={classes.emptyIcon} disabled><HourglassEmpty fontSize="large" /></IconButton>
                        <Typography align="center" paragraph={true} variant="h5" color="textSecondary">
                            {emptyMesage}
                        </Typography>
                    </div>
                }
            </Grid>
        </Grid>
    );
}

export default MediaLinks;