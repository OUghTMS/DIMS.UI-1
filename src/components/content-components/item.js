import React, { Component } from 'react';

import ItemSubmenu from './item-submenu';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popupIsOpen: false
        }
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick() {
        this.setState({ popupIsOpen: !this.state.popupIsOpen });
    }
    render() {
        const { name, lastName, direction } = this.props.item;
        const popup = this.state.popupIsOpen && <ItemSubmenu onButtonClick={this.onButtonClick}/>
        return (
            <div className="item">
                <div className="item-name">
                    {name} {lastName}
                </div>
                <div className="item-direction">{direction}</div>
                <button onClick={this.onButtonClick} className="item-edit-button">⋮</button>
                {popup}
            </div>
        );
    }
}