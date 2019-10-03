import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Searchlink from '../searchlink/SearchLink';
import MediaLinks from '../medialinks/MediaLinks';

const classes = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 0
  },
  
}));


function Main(props, mediaUrls, wallet) {
  const [searching, setSearching] = useState(false);
  
  return (
    <Grid className={classes.root} container spacing={3} data-test="MainComponent">
      <Grid item xs={12} width="100%">
        <Searchlink {...props} searching={searching} onSearching={(isSearching) => setSearching(isSearching)} />
      </Grid>
      <Grid item xs={12} width="100%">
      <MediaLinks {...props} searching={searching} />
      </Grid>
    </Grid>
  );
}

export default Main;