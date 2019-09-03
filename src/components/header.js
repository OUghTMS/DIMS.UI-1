import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const logIn = this.props.loggedIn && <button onClick={this.props.logOut} className="log-out-button">Log Out</button>
    return (
      <div className="content-header">
        {logIn}
      </div>
    );
  }
}