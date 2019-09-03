import React, { Component } from 'react';

import ItemEditMenu from './item-edit-menu';
import ItemsList from './items-list';
import db from '../db/db'

export default class GridSection extends Component {
    constructor(props){
        super(props);

        this.state = {
            registerMenuIsOpen: false,
            items: []
        }

        this.editMenuHandler = this.editMenuHandler.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }

    componentDidMount() {
        this.setState({ items: [...db] })
    }    

    addNewItem(newItem) {
        const respectedItem = {
            ...newItem,
            _id: Date.now()
        }
        this.setState({ items: [...this.state.items, respectedItem] })
    }

    removeItem(targetItem) {
        this.setState({ items: this.state.items.filter(item => item !== targetItem) })
    }

    editItem( oldItem, newItem ) {
        this.setState({ items: [ ...this.state.items.filter(item => item !== oldItem), newItem ] })
    }

    editMenuHandler() {
        this.setState({
            editMenuIsOpen: !this.state.editMenuIsOpen
        });
    }

    render() {
        const popup = this.state.editMenuIsOpen && <ItemEditMenu editMenuHandler={this.editMenuHandler}
                                                                     addNewItem={this.addNewItem}/>
        return (
            <div>
                <button className="add-object-button" onClick={this.editMenuHandler}>Register</button>
                <ItemsList editItem={this.editItem} removeItem={this.removeItem} items={this.state.items}/>
                {popup}
            </div>

        );
    }
}