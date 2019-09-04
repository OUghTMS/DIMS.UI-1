import React, { Component } from 'react';

export default class UserItemFields extends Component {
    render() {
        const { login, name, lastName, direction, role } = this.props.item;
        return (
            <React.Fragment>
                <div className="item-title">
                    <div className="item-name">
                        {name} {lastName}
                    </div>
                    <div className="item-sub-name">{login}</div>
                </div>
                <div className="item-extra-field">{role}</div>
                <div className="item-extra-field">{direction}</div>
            </React.Fragment>
        );
    }
}