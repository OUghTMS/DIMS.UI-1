import React, { Component } from 'react';

import Header from './header';
import LoginForm from './login-form';

export default class Login extends Component {
  render() {
    return (
      <>
        <Header loggedIn={this.props.loggedIn}/>
        <LoginForm {...this.props}/>
      </>
    );
  }
}
