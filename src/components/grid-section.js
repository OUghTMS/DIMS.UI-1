import React, { Component } from 'react';

import ItemEditMenu from './item-edit-menu';
import ItemsList from './items-list';
import users from '../db/user'

export default class GridSection extends Component {
    constructor(props){
        super(props);

        this.state = {
            registerMenuIsOpen: false,
            items: [],
            data: []
        }

        this.openEditMenu = this.openEditMenu.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }

    componentDidMount() {
        this.setState({
            items: this.tableSelector(),
            data: [...users]
        });
    }    

    tableSelector() {
        const { _id, grid } = this.props.match.params;
        if(grid === "member") {
            return [...users]
        } else if(_id !== undefined) {
            return users.find(member => member._id === _id)[grid]
        } else {
            return [].concat(...users.map(user => user.tasks))
        }
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

    openEditMenu() {
        this.setState({
            editMenuIsOpen: !this.state.editMenuIsOpen
        });
    }

    render() {
        const popup = this.state.editMenuIsOpen && <ItemEditMenu openEditMenu={this.openEditMenu}
                                                                     addNewItem={this.addNewItem}/>
        return (
            <div>
                <button className="add-object-button" onClick={this.openEditMenu}>Register</button>
                <ItemsList editItem={this.editItem} removeItem={this.removeItem} items={this.state.items}/>
                {popup}
            </div>

        );
    }
}