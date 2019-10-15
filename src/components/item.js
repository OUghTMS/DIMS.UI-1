import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changePopupIsOpen, changeEditMenuIsOpen} from '../store/actions';

import ItemSubmenu from './item-submenu';
import ItemEditMenu from './item-edit-menu';
import ItemFields from './item-fields';

class Item extends Component {
  render() {
    const {popupIsOpen, editMenuIsOpen, changePopupIsOpen, changeEditMenuIsOpen} = this.props;
    const popup = popupIsOpen &&
            <ItemSubmenu item={this.props.item}
              openEditMenu={changeEditMenuIsOpen}
              removeItem={this.props.removeItem}
              onButtonClick={changePopupIsOpen}/>;
    const editMenu = editMenuIsOpen && <ItemEditMenu item={this.props.item}
      openEditMenu={changeEditMenuIsOpen}
      editItem={this.props.editItem}/>;
    return (
      <div className="item">
        <ItemFields item={this.props.item} grid={this.props.grid}/>
        <button onClick={changePopupIsOpen} className="item-edit-button"
          onKeyDown={(event) => event.key === 'Escape'? changePopupIsOpen() : null}
        >...</button>
        {popup}
        {editMenu}
      </div>
    );
  }
}

const putStateToProps = (state) => {
  return {
    popupIsOpen: state.popupIsOpen,
    editMenuIsOpen: state.editMenuIsOpen,
  };
};

const putActionsToProps = (dispatch) => {
  return {
    changePopupIsOpen: bindActionCreators(changePopupIsOpen, dispatch),
    changeEditMenuIsOpen: bindActionCreators(changeEditMenuIsOpen, dispatch),
  };
};

export default connect(putStateToProps, putActionsToProps)(Item);
