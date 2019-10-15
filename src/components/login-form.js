import React, {Component} from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);


    this.state = {
      login: '',
      password: '',
    };
    this.onObjectValueChange = this.onObjectValueChange.bind(this);
  }
  onObjectValueChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  render() {
    return (
      <div className="login-main-container"
        onKeyDown={event => event.key === 'Enter'? this.props.logIn(this.props.history, this.state.login, this.state.password) : null}>
        <div>
          <div className="login-greeting">Welcome back!</div>
          <div>
            <input placeholder="Login"
              type="text"
              className="login-input"
              name="login"
              value={this.state.login}
              onChange={this.onObjectValueChange}/>
            <div className="focus-border"/>
          </div>
          <div>
            <input placeholder="Password"
              className="login-input"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onObjectValueChange}/>
            <div className="focus-border" />
          </div>
          <button onClick={()=>this.props.logIn(this.props.history, this.state.login, this.state.password)} className="enter-button">Enter</button>
        </div>
      </div>
    );
  }
}
