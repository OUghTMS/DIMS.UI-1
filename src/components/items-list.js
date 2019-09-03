import React, { Component } from 'react';

import Item from './item';

export default class ItemsList extends Component {
    render() {
        const { removeItem, editItem } = this.props;
        const items = this.props.items.map(item => 
            <Item key={item._id} 
                  item={item} 
                  removeItem={removeItem}
                  editItem={editItem}/>)
        return (
            <div className="list">
                {items}
            </div>
        );
    }
}