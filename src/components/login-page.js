import React, { Component } from 'react';

import Header from './header';
import Main from './login-form';

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Header loggedIn={this.props.loggedIn}/>
        <Main {...this.props}/>
      </React.Fragment>
    );
  }
}
