import React, {Component} from 'react';

import {FiTruck} from 'react-icons/fi';
import {GoPrimitiveDot} from 'react-icons/go';

export default class ItemsList extends Component {
  render() {
    return (
      <div className="loader">
        <div className="dots">
          <div className="dot1"><GoPrimitiveDot /></div>
          <div className="dot2"><GoPrimitiveDot /></div>
          <div className="dot3"><GoPrimitiveDot /></div>
        </div>
        <FiTruck className="truck"/>
        <div className="line"/>
      </div>
    );
  }
}
