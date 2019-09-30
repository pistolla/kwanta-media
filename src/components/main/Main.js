import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Searchlink from '../searchlink/SearchLink';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 0
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Main() {

  return (
    <Grid container spacing={3} data-test="MainComponent">
      <Grid item xs={12}>
        <Searchlink {...props} />
        
      </Grid>
    </Grid>
  );
}

export default Main;