import React, {Component} from 'react';

import {DIRECTION, ROLE, STATUS, SEX} from './constants';

export default class ItemEditMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      lastName: '',
      login: '',
      password: '',
      sex: SEX.MALE,
      role: ROLE.MENTOR,
      direction: DIRECTION.JAVA,
      status: STATUS.REGISTER,
    };

    this.onObjectValueChange = this.onObjectValueChange.bind(this);
    this.onSubmite = this.onSubmite.bind(this);
  }

  componentDidMount() {
    if (this.props.item) {
      this.setState({
        ...this.props.item,
        status: STATUS.EDIT,
      });
    }
  }

  onObjectValueChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmite() {
    if (this.state.status === STATUS.REGISTER) {
      this.onRegister();
    } else if (this.state.status === STATUS.EDIT) {
      this.onEdit();
    }
  }

  onEdit() {
    const newItem = {...this.state, _id: Date.now()};
    const oldItem = this.props.item;
    this.props.editItem( oldItem, newItem );
    this.props.openEditMenu();
  }

  onRegister() {
    const item = {...this.state};
    this.props.addNewItem(item);
    this.props.openEditMenu();
  }

  render() {
    return (
      <div className="add-object-menu-background">
        <div className="add-object-menu">
          <div className="object-fields">
            <h3>Fill in the fields of user</h3>
            <div>Login: <input type="text"
              name="login"
              value={this.state.login}
              onChange={this.onObjectValueChange}
              placeholder="Login"
              className="input"
            /></div>
            <div>Password: <input type="password"
              name="password"
              value={this.state.password}
              onChange={this.onObjectValueChange}
              placeholder="Password"
              className="input"
            /></div>
            <div>Name: <input type="text"
              name="name"
              value={this.state.name}
              onChange={this.onObjectValueChange}
              placeholder="Name"
              className="input"
            /></div>
            <div>Last Name: <input type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.onObjectValueChange}
              placeholder="Last Name"
              className="input"
            /></div>
            <div>Sex:<br/>
              <select className="input" name="sex" value={this.state.sex} onChange={this.onObjectValueChange}>
                <option value={SEX.MALE}>{SEX.MALE}</option>
                <option value={SEX.FEMALE}>{SEX.FEMALE}</option>
              </select>
            </div>
            <div>Direction:<br/>
              <select className="input" name="direction" value={this.state.direction} onChange={this.onObjectValueChange}>
                <option value={DIRECTION.JAVA}>{DIRECTION.JAVA}</option>
                <option value={DIRECTION.NET}>{DIRECTION.NET}</option>
                <option value={DIRECTION.JS}>{DIRECTION.JS}</option>
                <option value={DIRECTION.C}>{DIRECTION.C}</option>
              </select>
            </div>
            <div>Role:<br/>
              <select className="input" name="role" value={this.state.role} onChange={this.onObjectValueChange}>
                <option value={ROLE.ADMIN}>{ROLE.ADMIN}</option>
                <option value={ROLE.MENTOR}>{ROLE.MENTOR}</option>
                <option value={ROLE.USER}>{ROLE.USER}</option>
              </select>
            </div>
          </div>
          <div className="buttons">
            <button className="add-menu-button left" onClick={this.onSubmite}>{this.state.status}</button>
            <button className="add-menu-button right" onClick={() => this.props.openEditMenu()}>Back to Grid</button>
          </div>
        </div>
      </div>
    );
  }
}
