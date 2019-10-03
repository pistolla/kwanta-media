import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, IconButton } from '@material-ui/core';
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
        width: '150',
        height: '150',
    },
    emptyContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

function MediaLinks({ mediaUrls, searching, ...props }) {
    const [expanded, setExpanded] = useState(mediaUrls[0]);
    const handleExpanded = (ex) => {
        console.log(ex);
        setExpanded(ex)
    }
    const classes = useStyles();
    const emptyMesage = "Oops! there seem to be no profitable links to watch, try to add in watchlist or search";
    
    return (
        <div className={classes.root}>
            // Show if a wallet is  connected

            // Show a filter component if they are loaded

            {mediaUrls.length !== 0 ? 
                <FilterMediaLinks {...props} /> :
                ''
            }

            {mediaUrls.length !== 0 && searching !== true ? mediaUrls.map((value, index) => {
                return <MediaLink {...props} link={value} key={index} expanded={expanded} onExpanded={handleExpanded} />
            }) :
                <div align="center" width="100%" className="emptyContainer">
                    <IconButton className={classes.emptyIcon} disabled><HourglassEmpty fontSize="150px"/></IconButton>
                    <Typography align="center" paragraph={true} variant="h5" color="textSecondary">
                        {emptyMesage}
                    </Typography>
                </div>
            }
        </div>
    );
}

export default MediaLinks;