import React, {Component} from 'react';

import Item from './item';

export default class ItemsList extends Component {
  render() {
    const {removeItem, editItem, items} = this.props;
    const newItems = items
        .filter(( item, index ) => items.indexOf(items.find((copyOfItem) => copyOfItem._id === item._id)) === index)
        .map((item) => <Item key={item._id}
          item={item}
          removeItem={removeItem}
          editItem={editItem}/>);
    return (
      <div className="list">
        {newItems}
      </div>
    );
  }
}
