import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="content-header">
        <button onClick={this.props.logOut} className="log-out-button">Log Out</button>
      </div>
    );
  }
}