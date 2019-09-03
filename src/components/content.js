import React, { Component } from 'react';

import Header from './header';
import Main from './main';

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <Header logOut={this.props.logOut} loggedIn={this.props.loggedIn}/>
        <Main />
      </div>
    );
  }
}