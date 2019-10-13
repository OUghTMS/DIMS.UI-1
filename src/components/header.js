import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {NAV_BUTTONS} from './constants';

export default class Header extends Component {
  render() {
    const navArray = NAV_BUTTONS[this.props.loggedIn]? NAV_BUTTONS[this.props.loggedIn] : [];
    const navButtons = navArray.map(name => <Link key={name} to={`/${name}`} className="nav-link">{name}</Link>);
    const logIn = this.props.loggedIn && <button onClick={this.props.logOut} className="log-out-button">Log Out</button>;
    return (
      <div className="content-header">
        {navButtons}
        {logIn}
      </div>
    );
  }
}
