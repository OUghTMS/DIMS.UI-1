import React, {Component} from 'react';
import axios from 'axios';

import ItemEditMenu from './item-edit-menu';
import ItemsList from './items-list';

export default class GridSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      registerMenuIsOpen: false,
      items: [],
    };

    this.openEditMenu = this.openEditMenu.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  componentDidMount() {
    const {_id, grid} = this.props.match.params;
    const requestHttp = _id ? `http://localhost:4000/${grid}/${_id}` : `http://localhost:4000/${grid}`;
    axios.get(requestHttp)
        .then((response) => {
          this.setState({
            items: response.data,
          });
        });
  }

  addNewItem(newItem) {
    const {grid} = this.props.match.params;
    const requestHttp = `http://localhost:4000/${grid}`;

    axios.post(requestHttp, newItem)
        .then((response) => console.log(response.data));
    axios.get(requestHttp)
        .then((response) => {
          this.setState({
            items: response.data,
          });
        });
  }

  removeItem(targetItem) {
    const {grid} = this.props.match.params;
    const requestHttp = `http://localhost:4000/${grid}/${targetItem._id}`;
    axios.delete(requestHttp);
    this.setState({items: this.state.items.filter((item) => item !== targetItem)});
  }

  editItem( oldId, newItem ) {
    const {grid} = this.props.match.params;
    const requestHttp = `http://localhost:4000/${grid}/${oldId}`;
    axios.post(requestHttp, newItem)
        .then((response) => console.log(response.data));

    axios.get(`http://localhost:4000/${grid}`)
        .then((response) => {
          this.setState({
            items: response.data,
          });
        });
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
        <button className="add-object-button" onClick={this.openEditMenu}>Register</button>
        <ItemsList editItem={this.editItem} removeItem={this.removeItem} items={this.state.items} {...this.props.match.params}/>
        {popup}
      </div>

    );
  }
}
