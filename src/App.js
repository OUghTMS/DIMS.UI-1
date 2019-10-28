import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import './App.css';

import RightNavigationBar from './components/right-navigation-bar';
import Header from './components/header';
import LoginPage from './components/login-page';
import Content from './components/content';

import {ACCESS_TYPE} from './components/constants';

import users from './db/user';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role: null,
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    if (JSON.parse(localStorage.getItem('loggedId')) !== null) {
      const role = JSON.parse(localStorage.getItem('loggedId')).role;
      this.setState({
        role: role,
      });
    }
  }

  logIn(history, login, password) {
    const user = this.userVerification(login, password);
    if (user) {
      this.setState({
        role: user.role,
      });
      localStorage.setItem('loggedId', JSON.stringify({role: user.role}));
      history.push('/'+ACCESS_TYPE[user.role][0]);
    }
  }

  userVerification(login, password) {
    return users.find((user) => user.login === login &&
      user.password === password);
  }

  logOut() {
    this.setState({
      role: null,
    });
    localStorage.setItem('loggedId', JSON.stringify({role: null}));
  }

  loginComponent = (props) => {
    if (this.state.role) {
      return <Redirect to={'/'+ACCESS_TYPE[this.state.role][0]}/>;
    }

    return <LoginPage loggedIn={this.state.role} logIn={this.logIn} {...props}/>;
  }

  homeComponent = () => {
    if (!this.state.role) {
      return <Redirect to="/login"/>;
    }

    return <Content logOut={this.logOut} loggedIn={this.state.role} />;
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Header authorized={this.state.role} logOut={this.logOut}/>
        <Switch>
          <Route path="/login" exact render={this.loginComponent} />
          <Route path="/" render={this.homeComponent}/>
        </Switch>
        <RightNavigationBar role={this.state.role}/>
      </Router>
    );
  }
}
