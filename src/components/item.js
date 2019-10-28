import React, {Component} from 'react';

import {TiArrowSortedDown} from 'react-icons/ti';

import ItemSubmenu from './item-submenu';
import ItemEditMenu from './item-edit-menu';
import ItemFields from './item-fields';

export default class Item extends Component {
  state = {
    popupIsOpen: false,
    editMenuIsOpen: false,
  };

  changePopupIsOpen = () => {
    this.setState({popupIsOpen: !this.state.popupIsOpen});
  }

  changeEditMenuIsOpen = () => {
    this.setState({editMenuIsOpen: !this.state.editMenuIsOpen});
  }

  render() {
    const popup = this.state.popupIsOpen &&
            <ItemSubmenu item={this.props.item}
              openEditMenu={this.changeEditMenuIsOpen}
              removeItem={this.props.removeItem}
              onButtonClick={this.changePopupIsOpen}/>;
    const editMenu = this.state.editMenuIsOpen && <ItemEditMenu item={this.props.item}
      openEditMenu={this.changeEditMenuIsOpen}/>;
    return (
      <div className="item" draggable="true"
        onDragEnter={() => this.props.dragItemEnter(this.props.item)}
        onDragStart={() => this.props.itemDrag(this.props.item)}
      >
        <ItemFields item={this.props.item} gridName={this.props.gridName}/>
        <button onClick={this.changePopupIsOpen} className="item-edit-button"
          onKeyDown={(event) => event.key === 'Escape'? this.changePopupIsOpen() : null}
        ><TiArrowSortedDown /></button>
        {popup}
        {editMenu}
      </div>
    );
  }
}

