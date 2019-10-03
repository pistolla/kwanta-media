import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    }
}))

function FilterMediaLinks(props){
    const classes = useStyles();

    return (
        <div ata-test="FilterMediaLinksComponent">
Filter Media
        </div>
    );
}
export default FilterMediaLinks;