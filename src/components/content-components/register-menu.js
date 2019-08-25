import React, { Component } from 'react';

const DIRECTION = { JAVA: 'Java', NET: '.NET', JS: 'JavaScript', C: 'C#' };
const ROLE = { ADMIN: 'Admin', COMMON: 'Common' };

export default class RegisterMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            lastName: "",
            login: "",
            password: "",
            role: ROLE.COMMON,
            direction: DIRECTION.JAVA,
        }

        this.onObjectSelectorChange = this.onObjectSelectorChange.bind(this);
        this.onObjectValueChange = this.onObjectValueChange.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }
    onObjectSelectorChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    onObjectValueChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    onRegister() {
        const item = {...this.state};
        this.props.addNewPerson(item);
        this.props.registerMenuController();
    }
    render() {
        return (
            <div className="add-object-menu-background">
                <div className="add-object-menu">
                    <div className="object-fields">
                        <h3>Fill in the fields of new user</h3>
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
                                <option value={ROLE.ADMIN}>Admin</option>
                                <option value={ROLE.COMMON}>Сommon</option>
                            </select>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="add-menu-button left" onClick={this.onRegister}>Register</button>
                        <button className="add-menu-button right" onClick={this.props.registerMenuController}>Back to Grid</button>
                    </div>
                </div>
            </div>
        );
    }
}