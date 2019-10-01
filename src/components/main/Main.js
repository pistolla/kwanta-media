import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Searchlink from '../searchlink/SearchLink';
import MediaLinks from '../medialinks/MediaLinks'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 0
  },
  
}));

function Main(props) {
  const classes= useStyles();

  return (
    <Grid className="classes.root" container spacing={3} data-test="MainComponent">
      <Grid item xs={12}>
        <Searchlink {...props} />
        <MediaLinks {...props} />
      </Grid>
    </Grid>
  );
}

export default Main;