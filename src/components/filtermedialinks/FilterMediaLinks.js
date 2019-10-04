import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Toolbar, Grid, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    }
}))

function FilterMediaLinks({onFilterScore, ...props}) {
    const classes = useStyles();
    const [score, setScore] = useState(0);
    const handleChange = (value) => {
        setScore(value);
    }
    return (
        <Toolbar className={classes.root} data-test="FilterMediaLinksComponent">
            <Grid container direction="row-reverse">
                <Select
                    value={score}
                    onChange={handleChange}
                    inputProps={{name: 'Filter by score', id: 'score-selected-filter'}}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Increasing</MenuItem>
                    <MenuItem value={2}>Decreasing</MenuItem>
                </Select>
            </Grid>

        </Toolbar>
    );
}
export default FilterMediaLinks;