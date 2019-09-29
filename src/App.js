import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {MetaMask} from './components/metamask/Metamask'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App(props) {
  const classes = useStyles();
  const {
    state
  } = useState();
 

  const handleConnectMetamask = () => {
    
  }

  const setWeb3 = (web3) => {
    console.log(web3)
  }

  return (
    <div className={classes.root} data-test="AppComponent">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            KWANTA
          </Typography>
          <MetaMask {...props} {...state} setWeb3={setWeb3()}/>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}

export default App;
