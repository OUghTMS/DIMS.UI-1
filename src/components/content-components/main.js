import React, { Component } from 'react';
import { Route } from "react-router-dom";

import GridSection from './grid-section';

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/member" component={GridSection}/>
        <Route path="/task" component={GridSection}/>
      </React.Fragment>
    );
  }
}