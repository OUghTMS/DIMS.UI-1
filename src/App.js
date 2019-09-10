import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import './App.css';

import Header from './components/header';
import LoginPage from './components/login-page';
import Content from './components/content';

import {ACCESS_TYPE} from './components/constants';

import users from './db/user';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      authRole: null,
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    const authRole = JSON.parse(localStorage.getItem('loggedId')).authRole;
    if (authRole !== null) {
      this.setState({
        loggedIn: true,
        authRole: authRole
      });
    }
  }

  logIn(history, login, password) {
    const user = this.userVerification(login, password);
    if (user) {
      this.setState({
        loggedIn: true,
        authRole: user.role,
      });
      localStorage.setItem('loggedId', JSON.stringify({authRole: user.role}));
      history.push('/'+ACCESS_TYPE[user.role]);
    }
  }

  userVerification(login, password) {
    return users.find((user) => user.login === login &&
      user.password === password);
  }

  logOut() {
    this.setState({
      loggedIn: false,
      authRole: null
    });
    localStorage.setItem('loggedId', JSON.stringify({authRole: null}));
  }

  loginComponent = (props) => {
    if (this.state.loggedIn) {
      return <Redirect to={'/'+ACCESS_TYPE[this.state.authRole]}/>;
    }

    return <LoginPage loggedIn={this.state.loggedIn} logIn={this.logIn} {...props}/>;
  }

  homeComponent = () => {
    if (!this.state.loggedIn) {
      return <Redirect to="/login"/>;
    }

    return <Content logOut={this.logOut} loggedIn={this.state.loggedIn}/>;
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Header loggedIn={this.state.loggedIn} logOut={this.logOut}/>
        <Switch>
          <Route path="/login" exact render={this.loginComponent} />
          <Route path="/" render={this.homeComponent}/>
        </Switch>
      </Router>
    );
  }
}
