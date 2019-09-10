import React, {Component} from 'react';

import LoginForm from './login-form';

export default class Login extends Component {
  render() {
    return (
      <>
        <LoginForm {...this.props}/>
      </>
    );
  }
}
