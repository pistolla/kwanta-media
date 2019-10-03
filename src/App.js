import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Container, Typography, Tabs, Tab } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { MetaMask } from './components/metamask/Metamask';
import Account from './components/account/Account';
import Media from './components/media/Media';
import Main from './components/main/Main';
import About from './components/about/About';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
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
      display: 'inline',
      alignItems: 'center',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        flexDirection: 'column'
      },
    },
    navTab: {
      paddingBottom: 0
    }
  }));

  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
    this.state = { value: 2 }
    // this.props.history.listen((location, action) => {

    // })
  }

  fetch() {
    this.props.fetchMediaUrls();
  }

  handleConnectMetamask = () => {

  }

  setWeb3 = (web3) => {
  }

  handleChange = (tab, value) => {
    this.setState({ value: value });
  }

  render() {
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
              <Tabs
                edge="center"
                className={this.classes.sectionDesktop}
                value={this.state.value}
                onChange={this.handleChange}
                textColor="inherit"
                centered
              >
                <Tab label="Search" component={Link} to="/" className={this.classes.navTab} />
                <Tab label="Watch List" component={Link} to="/watchlinks" className={this.classes.navTab} />
                <Tab label="Wallet" component={Link} to="/wallet" className={this.classes.navTab} />
                <Tab label="Get Started" component={Link} to="/getstarted" className={this.classes.navTab} />
              </Tabs>
              <MetaMask {...this.props} {...this.state} setWeb3={this.setWeb3} />
            </Toolbar>
          </AppBar>
          <Container maxWidth="lg">
            <Switch>
              <Route path="/">
                <Main {...this.props} />
              </Route>
              <Route path="/watchlinks">
                <Media {...this.props} />
              </Route>
              <Route path="/wallet">
                <Account {...this.props} />
              </Route>
              <Route path="/getstarted">
                <About {...this.props} />
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
    mediaUrls: [{ id: 1, url: 'path/url/to/document/0', title: 'DOMAIN NAME 0' },
    { id: 2, url: 'path/url/to/document/1', title: 'DOMAIN NAME 1' },
    { id: 3, url: 'path/url/to/document/2', title: 'DOMAIN NAME 2' },
    { id: 4, url: 'path/url/to/document/3', title: 'DOMAIN NAME 3' },
    { id: 5, url: 'path/url/to/document/4', title: 'DOMAIN NAME 4' }]//state.mediaurls
  }
}
export default compose(
  withRouter,
  connect(mapStateToProps, { fetchMediaUrls })
)(App);
