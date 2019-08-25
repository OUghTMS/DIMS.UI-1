import React, { Component } from 'react';

export default class Member extends Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, false);
    }
    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.onButtonClick();
        }
    }
    render() {
        return (
            <div ref={this.setWrapperRef} className="item-submenu">
                <div className="submenu-field">Progress</div>
                <div className="submenu-field">Tasks</div>
                <div className="submenu-field">Edit</div>
                <div className="submenu-field">Delete</div>
            </div>
        );
    }
}