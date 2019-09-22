import React, {Component} from 'react';

import {GRID} from './constants';

export default class UserItemFields extends Component {
  constructor(props) {
    super(props);

    this.extraItemFields = this.extraItemFields.bind(this);
  }

  componentDidMount() {
    this.setState({
      role: JSON.parse(localStorage.getItem('loggedId')).authRole,
    });
  }

  extraItemFields() {
    const arrayOfFields = [];
    const specialFields = ['name', 'login', 'password', 'lastName', '_id', 'tasks'];

    Object.keys(this.props.item).forEach((field) => {
      if (!specialFields.find((specialField) => specialField === field)) {
        arrayOfFields.push(this.props.item[field]);
      }
    });

    return arrayOfFields.map((field) => <div key={field} className="item-extra-field">{field}</div>);
  }

  render() {
    const grid = this.props.grid;
    const item = this.props.item;
    const title = grid === GRID.MEMBER ? item.name+' '+item.lastName : item.name;
    const subTitle = grid === GRID.MEMBER? item.login : item.status;
    return (
      <>
        <div className="item-header">
          <div className="item-title">
            <div className="item-name">{title}</div>
            <div className="item-date">Join: 30.06.1999</div>
          </div>
          <div className="item-sub-name">{subTitle}</div>
        </div>
        {this.extraItemFields()}
      </>
    );
  }
}
