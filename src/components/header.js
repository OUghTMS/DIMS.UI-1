import React, {Component} from 'react';

import {IoIosLogOut} from "react-icons/io";

export default class Header extends Component {
  render() {
    const logIn = this.props.authorized && <button onClick={this.props.logOut} className="log-out-button"><IoIosLogOut /> Log Out</button>;
    return (
      <div className="content-header">
        {logIn}
      </div>
    );
  }
}
