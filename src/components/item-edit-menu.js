import React, { Component } from 'react';

const DIRECTION = { JAVA: 'Java', NET: '.NET', JS: 'JavaScript', C: 'C#' };
const ROLE = { ADMIN: 'Admin', MENTOR: 'Mentor', USER: 'User' };
const STATUS = { REGISTER: 'Register', EDIT: 'Edit' };

export default class ItemEditMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            lastName: "",
            login: "",
            password: "",
            role: ROLE.MENTOR,
            direction: DIRECTION.JAVA,
            status: STATUS.REGISTER
        }

        this.onObjectSelectorChange = this.onObjectSelectorChange.bind(this);
        this.onObjectValueChange = this.onObjectValueChange.bind(this);
        this.onSubmite = this.onSubmite.bind(this);
    }

    componentDidMount() {
        const item = this.props.item;
        if(item) {
            this.setState({            
                name: item.name,
                lastName: item.lastName,
                login: item.login,
                password: item.password,
                role: item.role,
                direction: item.direction, 
                status: STATUS.EDIT
            })
        }
    }
    
    onObjectSelectorChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onObjectValueChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmite() {
        if(this.state.status === STATUS.REGISTER) this.onRegister();
        else if(this.state.status === STATUS.EDIT) this.onEdit();
    }

    onEdit() {
        const newItem = this.state;
        const oldItem = this.props.item;
        this.props.editItem( oldItem, newItem );
        this.props.editMenuHandler();
    }

    onRegister() {
        const item = {...this.state};
        this.props.addNewItem(item);
        this.props.editMenuHandler();
    }

    render() {
        return (
            <div className="add-object-menu-background">
                <div className="add-object-menu">
                    <div className="object-fields">
                        <h3>Fill in the fields of user</h3>
                        <div>Login: <input type="text"
                                           name="login"
                                           value={this.state.login}
                                           onChange={this.onObjectValueChange} 
                                           placeholder="Login" 
                                           className="input"
                                    /></div>
                        <div>Password: <input type="password" 
                                              name="password"
                                              value={this.state.password}
                                              onChange={this.onObjectValueChange}
                                              placeholder="Password" 
                                              className="input"
                                        /></div>
                        <div>Name: <input type="text" 
                                          name="name"
                                          value={this.state.name}
                                          onChange={this.onObjectValueChange}
                                          placeholder="Name" 
                                          className="input"
                                    /></div>
                        <div>Last Name: <input type="text"
                                               name="lastName"
                                               value={this.state.lastName}
                                               onChange={this.onObjectValueChange} 
                                               placeholder="Last Name" 
                                               className="input"
                                        /></div>
                        <div>Direction:<br/>
                            <select className="input" name="direction" value={this.state.direction} onChange={this.onObjectSelectorChange}>
                                <option value={DIRECTION.JAVA}>Java</option>
                                <option value={DIRECTION.NET}>.NET</option>
                                <option value={DIRECTION.JS}>JavaScript</option>
                                <option value={DIRECTION.C}>C#</option>
                            </select>
                        </div>
                        <div>Role:<br/>
                            <select className="input" name="role" value={this.state.role} onChange={this.onObjectSelectorChange}>
                                <option value={ROLE.ADMIN}>{ROLE.ADMIN}</option>
                                <option value={ROLE.MENTOR}>{ROLE.MENTOR}</option>
                                <option value={ROLE.USER}>{ROLE.USER}</option>
                            </select>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="add-menu-button left" onClick={this.onSubmite}>{this.state.status}</button>
                        <button className="add-menu-button right" onClick={this.props.editMenuHandler}>Back to Grid</button>
                    </div>
                </div>
            </div>
        );
    }
}