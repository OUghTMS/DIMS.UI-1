import React, { Component } from 'react';

export default class Member extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }

    handleClick() {
        this.props.onButtonClick();
    }

    render() {
        return (
            <div className="item-submenu">
                <div className="submenu-field">Progress</div>
                <div className="submenu-field">Tasks</div>
                <div className="submenu-field" onClick={this.props.editMenuHandler}>Edit</div>
                <div className="submenu-field" onClick={() => this.props.removeItem(this.props.item)}>Delete</div>
            </div>
        );
    }
}