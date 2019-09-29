import React, { useState, Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Container, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { MetaMask } from './components/metamask/Metamask';
import Account from './components/account/Account';
import Media from './components/media/Media';
import Main from './components/main/Main';
import { connect } from 'react-redux';
import { fetchMediaUrls } from './actions';

class App extends Component {
  classes = makeStyles(theme => ({
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
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
  }));

  constructor(props){
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch(){
    this.props.fetchMediaUrls();
  }

  handleConnectMetamask = () => {

  }

  setWeb3 = (web3) => {
  }

  render() {
    const { mediaUrls } = this.props;
    return (
      <Router>
        <div className={this.classes.root} data-test="AppComponent">
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={this.classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={this.classes.title}>
                KWANTA
          </Typography>
              <div className={this.classes.sectionDesktop}>
                <Link to="/" data-test="mainlink">Home</Link>
                <Link to="/medialinks" data-test="medialink">Media</Link>
                <Link to="/account"  data-test="accountlink">Account</Link>
              </div>
              <MetaMask {...this.props} {...this.state} setWeb3={this.setWeb3} />
            </Toolbar>
          </AppBar>
          <Container maxWidth="sm">
            <Switch>
              <Route path="/">
                <Main />
              </Route>
              <Route path="/medialinks">
                <Media />
              </Route>
              <Route path="/account">
                <Account />
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    )
  };
}
const mapStateToProps = state => {
  return {
    mediaUrls: state.mediaurls
  }
}
export default connect(mapStateToProps, {fetchMediaUrls})(App);
