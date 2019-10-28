import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {NAV_BUTTONS} from './constants';

export default class RightNavigationBar extends Component {
  render() {
    const navArray = NAV_BUTTONS[this.props.role]? NAV_BUTTONS[this.props.role] : [];
    const navButtons = navArray.map(name => <Link key={name} to={`/${name}`} className="nav-link">{name}</Link>);
    return (
      <div className="left-popup">
        {navButtons}
      </div>
    );
  }
}
