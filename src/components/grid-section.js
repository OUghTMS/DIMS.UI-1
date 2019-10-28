import React, {Component} from 'react';
import axios from 'axios';

import ItemEditMenu from './item-edit-menu';
import ItemsList from './items-list';
import {IoIosAdd} from 'react-icons/io';

const REACT_APP_BASE_URL = 'http://localhost:4000';

export default class GridSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      registerMenuIsOpen: false,
      items: [],
      dragItem: {},
    };

    this.openEditMenu = this.openEditMenu.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  componentDidMount() {
    const {_id, gridName} = this.props.match.params;
    this.getData(_id, gridName);
  }

  componentDidUpdate(prevProps) {
    const {_id, gridName} = this.props.match.params;
    if ( _id !== prevProps.match.params._id || gridName !== prevProps.match.params.gridName) {
      this.getData(_id, gridName);
    }
  }

  getData = (_id, gridName) => {
    const requestHttp = _id ? `${REACT_APP_BASE_URL}/${gridName}/${_id}` : `${REACT_APP_BASE_URL}/${gridName}`;
    axios.get(requestHttp)
        .then((response) => {
          this.setState({
            items: response.data,
          });
        });
  }

  itemDrag = (item) => {
    this.setState({dragItem: item});
  }

  dragItemEnter = (tergetItem) => {
    const listWithoutDrag = this.state.items.filter((item) => item._id !== this.state.dragItem._id);
    this.setState({items: [
      ...listWithoutDrag.slice(0, this.state.items.indexOf(tergetItem)),
      this.state.dragItem,
      ...listWithoutDrag.slice(this.state.items.indexOf(tergetItem), this.state.items.length),
    ]});
  }

  addNewItem(newItem) {
    const {gridName} = this.props.match.params;
    const requestHttp = `${REACT_APP_BASE_URL}/${gridName}`;

    axios.post(requestHttp, newItem)
        .then((response) => console.log(response.data));
    this.setState({items: this.state.items.push(newItem)});
  }

  removeItem(targetItem) {
    const {gridName} = this.props.match.params;
    const requestHttp = `${REACT_APP_BASE_URL}/${gridName}/${targetItem._id}`;
    axios.delete(requestHttp);
    this.setState({items: this.state.items.filter((item) => item !== targetItem)});
  }

  editItem( oldId, newItem ) {
    const {gridName} = this.props.match.params;
    const requestHttp = `${REACT_APP_BASE_URL}/${gridName}/${oldId}`;
    axios.post(requestHttp, newItem)
        .then((response) => console.log(response.data));
    this.setState({items: this.state.items.filter((item) => item._id !== oldId).push(newItem)});
  }

  openEditMenu() {
    this.setState({
      editMenuIsOpen: !this.state.editMenuIsOpen,
    });
  }

  render() {
    const popup = this.state.editMenuIsOpen && <ItemEditMenu openEditMenu={this.openEditMenu}
      addNewItem={this.addNewItem}/>;
    return (
      <div>
        <button className="add-object-button" onClick={this.openEditMenu}><IoIosAdd />Register</button>
        <ItemsList editItem={this.editItem} removeItem={this.removeItem} items={this.state.items} itemDrag={this.itemDrag} dragItemEnter={this.dragItemEnter} {...this.props.match.params}/>
        {popup}
      </div>
    );
  }
}
