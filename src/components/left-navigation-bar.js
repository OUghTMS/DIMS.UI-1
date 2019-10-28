import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {NAV_BUTTONS} from './constants';

export default class LeftNavigationBar extends Component {
  render() {
    const navArray = NAV_BUTTONS[this.props.role]? NAV_BUTTONS[this.props.role] : [];
    const navButtons = navArray.map((name) => <Link key={name} to={`/${name}`} className="nav-link">{name}</Link>);
    const loginLink = !this.props.role && <Link to='/login' className="nav-link">Login</Link>
    return (
      <div className="left-popup">
        <Link to='/about' className="nav-link">About</Link>
        {navButtons}
        {loginLink}
      </div>
    );
  }
}
