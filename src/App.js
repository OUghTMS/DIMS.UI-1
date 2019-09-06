import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import './App.css';

import LoginPage from './components/login-page';
import Content from './components/content';

import users from './db/user';

const ACCESS_TYPE = { Admin: 'member', Mentor: 'tasks', User: '' };

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      authRole: null
    }
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn(history, login, password) {
    const user = this.userVerification(login, password);
    if(user) {
      this.setState({ 
        loggedIn: true,
        authRole: user.role 
      });
      history.push('/'+ACCESS_TYPE[user.role]);
    }
  }

  userVerification(login, password) {
    return users.find(user => user.login === login && 
      user.password === password);
  }

  logOut() {
    this.setState({ loggedIn: false });
  }
  
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/login" exact render={ props => !this.state.loggedIn?(<LoginPage loggedIn={this.state.loggedIn} logIn={this.logIn} {...props}/>):
                                                                            (<Redirect to="/"/>)} />
          <Route path="/" render={ () => this.state.loggedIn?(<Content logOut={this.logOut} loggedIn={this.state.loggedIn}/>):
                                                             (<Redirect to="/login"/>)}/>
        </Switch>
      </Router>
    );
  }
}