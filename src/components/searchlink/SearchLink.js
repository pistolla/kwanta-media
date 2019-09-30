import React from 'react';
import { CircularProgress, InputBase, Button, Fade } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '60px',
        paddingBottom: '0px'
    },
    button: {
        margin: theme.spacing(2),
    },
    placeholder: {
        height: 60,
        display: 'inline-flex',
        width: '100%'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

function SearchLink(props) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);

    const handleClickQuery = () => {
        setLoading(true);

        // props.handleMediasearch(async () => {

        // });
        return loading;
    };

    return (
        <div className="root" data-test="SearchLinkComponent">
            <div className={classes.placeholder}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
                <Button data-test="button" onClick={handleClickQuery} className={classes.button} {...(loading? 'disabled':'')}>
                    Search
                </Button>
            </div>
            <Fade
                in={loading}
                style={{
                    transitionDelay: loading ? '800ms' : '0ms',
                }}
                unmountOnExit>
                <CircularProgress />
            </Fade>
        </div>
    );
}

export default SearchLink;