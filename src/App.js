import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import './App.css';

import LoginPage from './components/login-page';
import Content from './components/content';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  logIn(history) {
    this.setState({ loggedIn: true });
    history.push('/member');
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
          <Route path="/" render={ () => this.state.loggedIn?(<Content logOut={this.logOut}/>):
                                                             (<Redirect to="/login"/>)}/>
        </Switch>
      </Router>
    );
  }
}