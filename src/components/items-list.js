import React, {Component} from 'react';

import Item from './item';
import PulseLoader from './pulse-loader';

export default class ItemsList extends Component {
  render() {
    const {removeItem, editItem, items, itemDrag, dragItemEnter} = this.props;
    const newItems = items
        .filter(( item, index ) => items.indexOf(items.find((copyOfItem) => copyOfItem._id === item._id)) === index)
        .map((item) => <Item key={item._id}
          dragItemEnter={dragItemEnter}
          itemDrag={itemDrag}
          item={item}
          removeItem={removeItem}
          editItem={editItem}
          gridName={this.props.gridName}/>);
    const page = !Boolean(...items)? <PulseLoader/> : newItems;
    return (
      <div className="list" >
        {page}
      </div>
    );
  }
}
