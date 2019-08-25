import React, { Component } from 'react';

import Header from './header';
import Main from './main';

export default class Login extends Component {
  render() {
    return (
        <React.Fragment>
            <Header />
            <Main {...this.props}/>
        </React.Fragment>
    );
  }
}
