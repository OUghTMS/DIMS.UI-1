import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import GridSection from './grid-section';

export default class Main extends Component {
  render() {
    return (
      <>
        <Route path="/:gridName" exact component={GridSection}/>
        <Route path="/:gridName/:_id" component={GridSection}/>
      </>
    );
  }
}
