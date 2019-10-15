import {ACTION_CHANGE_POPUP, ACTION_CHANGE_EDITMENU} from '../components/items-list';

const initialState = {
  popupIsOpen: false,
  editMenuIsOpen: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_POPUP:
      return {...state, popupIsOpen: action.payload};
    case ACTION_CHANGE_EDITMENU:
      return {...state, editMenuIsOpen: action.payload};
  }

  return state;
};
