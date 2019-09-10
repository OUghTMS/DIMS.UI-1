import React, {Component} from 'react';

import ItemSubmenu from './item-submenu';
import ItemEditMenu from './item-edit-menu';
import UserItemFields from './user-item-fields';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupIsOpen: false,
      editMenuIsOpen: false,
    };
    this.openEditMenu = this.openEditMenu.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  openEditMenu() {
    this.setState({editMenuIsOpen: !this.state.editMenuIsOpen});
  }

  onButtonClick() {
    this.setState({popupIsOpen: !this.state.popupIsOpen});
  }

  render() {
    const popup = this.state.popupIsOpen &&
            <ItemSubmenu item={this.props.item}
              openEditMenu={this.openEditMenu}
              removeItem={this.props.removeItem}
              onButtonClick={this.onButtonClick}/>;
    const editMenu = this.state.editMenuIsOpen && <ItemEditMenu item={this.props.item}
      openEditMenu={this.openEditMenu}
      editItem={this.props.editItem}/>;
    return (
      <div className="item">
        <UserItemFields item={this.props.item}/>
        <button onClick={this.onButtonClick} className="item-edit-button">⋮</button>
        {popup}
        {editMenu}
      </div>
    );
  }
}
