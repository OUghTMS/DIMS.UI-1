import React, { Component } from 'react';

import Header from './header';
import LoginForm from './login-form';

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Header loggedIn={this.props.loggedIn}/>
        <LoginForm {...this.props}/>
      </React.Fragment>
    );
  }
}
