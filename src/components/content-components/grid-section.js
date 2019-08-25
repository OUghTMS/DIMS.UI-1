import React, { Component } from 'react';

import AddMenu from './register-menu';
import ItemsList from './items-list';
import db from '../../db/db'

export default class GridSection extends Component {
    constructor(props){
        super(props);

        this.state = {
            registerMenuIsOpen: false,
            items: []
        }

        this.registerMenuController = this.registerMenuController.bind(this);
        this.addNewPerson = this.addNewPerson.bind(this);
    }

    componentDidMount() {
        this.setState({ items: [...db] })
    }    
    addNewPerson(newItem) {
        const respectedItem = {
            ...newItem,
            _id: Date.now()
        }
        this.setState({ items: [...this.state.items, respectedItem] })
    }
    registerMenuController() {
        this.setState({
            registerMenuIsOpen: !this.state.registerMenuIsOpen
        });
    }
    render() {
        const popup = this.state.registerMenuIsOpen && <AddMenu registerMenuController={this.registerMenuController}
                                                                     addNewPerson={this.addNewPerson}/>
        return (
            <div>
                <button className="add-object-button" onClick={this.registerMenuController}>Register</button>
                <ItemsList items={this.state.items}/>
                {popup}
            </div>

        );
    }
}