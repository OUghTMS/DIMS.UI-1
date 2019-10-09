import React, {Component} from 'react';

export default class Selectors extends Component {
  render() {
    const {selector, onObjectValueChange, value} = this.props;
    const options = selector.switch.map((field) => <option key={field} value={field}>{field}</option>);
    return (
        <>
            <div>{selector.value}:<br/>
              <select className="input" name={selector.value} value={value} onChange={onObjectValueChange}>
                {options}
              </select>
            </div>
        </>
    );
  }
}
