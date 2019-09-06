import React, { Component } from 'react';
import { Route } from "react-router-dom";

import GridSection from './grid-section';

export default class Main extends Component {
  render() {
    return (
      <>
        <Route path="/:grid" exact component={GridSection}/>
        <Route path="/:grid/:_id" component={GridSection}/>
      </>
    );
  }
}