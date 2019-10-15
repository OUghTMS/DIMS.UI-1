import React, {Component} from 'react';

import {ROLE, STATUS, SEX, MEMBER_INPUTS, MEMBER_SELECTORS, SCORE} from './constants';

import TextInput from './text-input';
import Selectors from './selectors';

export default class ItemEditMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: '',
      LastName: '',
      Login: '',
      Password: '',
      Email: '',
      Education: '',
      Address: '',
      Sex: SEX.MALE,
      Role: ROLE.MENTOR,
      MathScore: SCORE[10],
      UniversityAverageScore: SCORE[10],
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
    const oldId = this.props.item._id;
    this.props.editItem( oldId, newItem );
    this.props.openEditMenu();
  }

  onRegister() {
    const item = {...this.state};
    this.props.addNewItem(item);
    this.props.openEditMenu();
  }

  render() {
    const list = Object.values(MEMBER_INPUTS);
    const listOfInputs = list.map((field) => {
      return <TextInput key={field} nameOfInput={field} value={this.state[field]} onObjectValueChange={this.onObjectValueChange}/>;
    });
    const listSel = Object.values(MEMBER_SELECTORS);
    const listOfSelectors = listSel.map((field) => {
      return <Selectors key={field.value} selector={field} value={this.state[field.value]} onObjectValueChange={this.onObjectValueChange}/>;
    });

    return (
      <div className="add-object-menu-background"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Escape') this.props.openEditMenu();
          else if (event.key === 'Enter') this.onSubmite();
        }}>
        <div className="add-object-menu">
          <div className="object-fields">
            {listOfInputs}
            {listOfSelectors}
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
