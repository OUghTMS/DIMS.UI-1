import React, { Component } from 'react';

import Item from './item';

export default class ItemsList extends Component {
    render() {
        const list = this.props.items.map(item => {
            return <Item
                    key={item._id} 
                    item={item} />
            })
        return (
            <div className="list">
                {list}
            </div>
        );
    }
}