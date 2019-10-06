import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Container, Typography, Tabs, Tab } from '@material-ui/core';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import { MetaMask } from './components/metamask/Metamask';
import Account from './components/account/Account';
import Media from './components/media/Media';
import Main from './components/main/Main';
import About from './components/about/About';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchMediaUrls, getMyMediaUrls, postMediaUrl } from './actions';
import Web3 from 'web3'
// const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
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
    },
    appbar: {
      zIndex: theme.zIndex.drawer + 1
    }
  }));

  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
    this.state = { value: 0, connected: false, account: '', web3: null, metamask: { network: null} }
    this.props.history.listen((location, action) => {
      
    })
  }

  fetch() {
    this.props.fetchMediaUrls();
  }

  handleConnectMetamask = () => {

  }

  setWeb3 = (web3) => {
    if(web3 !== undefined){
      this.setState({connected: true, web3: web3});
    }
  }

  handleChange = (tab, value) => {
    this.setState({ value: value });
  }
  setUserAccount = (acc) => {
    this.setState({account: acc})
  }
  setMetaMaskNetwork = (id) => {
    this.setState({metamask: {network: id}})
  }

  render() {
    return (
        <div className={this.classes.root} data-test="AppComponent">
          <AppBar position="absolute" className={this.classes.appbar}>
            <Toolbar>
              <IconButton edge="start" className={this.classes.menuButton} color="inherit" aria-label="menu">
                <DeveloperModeIcon />
              </IconButton>
              <Typography variant="h6" className={this.classes.title}>
                KWANTA
              </Typography>
              <Tabs
                edge="center"
                variant="fullWidth"
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
              <MetaMask 
              {...this.props} 
              web3={this.state.web3} 
              metaMask={this.state.metamask}
              setWeb3={this.setWeb3} 
              handleMetaMaskAccount={this.setUserAccount}
              handleMetaMaskNetwork={this.setMetaMaskNetwork}/>
            </Toolbar>
          </AppBar>
          <Container maxWidth="lg">
            <Switch>
              <Route exact path="/">
                <Main {...this.props} />
              </Route>
              <Route path="/watchlinks">
                <Media {...this.props} connected={this.state.connected} account={this.state.account} web3={this.state.web3} />
              </Route>
              <Route path="/wallet">
                <Account {...this.props} connected={this.state.connected} account={this.state.account} />
              </Route>
              <Route path="/getstarted">
                <About {...this.props} />
              </Route>
            </Switch>
          </Container>
        </div>
    )
  };
}
const mapStateToProps = state => {
  return {
    mediaUrls: state.mediaurls.all,
    myMediaUrls: state.mediaurls.watchlist
  }
}
// const mapDispatchToProps = dispatch => ({addUser: () => dispatch(addUser())})
export default withRouter(connect(mapStateToProps, { fetchMediaUrls, getMyMediaUrls, postMediaUrl })(App));
