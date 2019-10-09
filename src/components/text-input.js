import React, {Component} from 'react';

export default class TextInput extends Component {
  render() {
    const {nameOfInput, onObjectValueChange, value} = this.props;
    return (
      <div>{nameOfInput}: <input type="text"
        name={nameOfInput}
        value={value}
        onChange={onObjectValueChange}
        placeholder={nameOfInput}
        className="input"
      /></div>
    );
  }
}
