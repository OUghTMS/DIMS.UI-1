import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
        const { removeItem, item, editMenuHandler } = this.props;
        return (
            <div className="item-submenu">
                <div className="submenu-field">Progress</div>
                <Link to={`/task/${item._id}`}><div className="submenu-field">Tasks</div></Link>
                <div className="submenu-field" onClick={editMenuHandler}>Edit</div>
                <div className="submenu-field" onClick={() => removeItem(item)}>Delete</div>
            </div>
        );
    }
}