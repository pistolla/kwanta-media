import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Empty } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        margin: 0
    },
    listEmpty: {
        width: theme.spacing(28),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

function MediaLinks({ mediaUrls }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {mediaUrls.length != 0 ? mediaUrls.map((value, index) => {
                <Link link={value} />
            }) :
                <Typography className={classes.listEmpty}>
                    <Empty />
                </Typography>
            }
        </div>
    );
}

export default MediaLinks;