import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {rootReducer} from '../store/reducers';
import Item from './item';

export const ACTION_CHANGE_POPUP = 'ACTION_CHANGE_POPUP';
export const ACTION_CHANGE_EDITMENU = 'ACTION_CHANGE_EDITMENU';

const store = createStore(rootReducer);

export default class ItemsList extends Component {
  render() {
    const {removeItem, editItem, items} = this.props;
    const newItems = items
        .filter(( item, index ) => items.indexOf(items.find((copyOfItem) => copyOfItem._id === item._id)) === index)
        .map((item) => <Provider key={item._id} store={store}>
          <Item item={item}
            removeItem={removeItem}
            editItem={editItem}
            grid={this.props.grid}/>
        </Provider>);
    return (
      <div className="list">
        {newItems}
      </div>
    );
  }
}
