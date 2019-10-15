import {ACTION_CHANGE_POPUP, ACTION_CHANGE_EDITMENU} from '../components/items-list';

export const changePopupIsOpen = (newPopupState) => {
  return {
    type: ACTION_CHANGE_POPUP,
    payload: newPopupState,
  };
};

export const changeEditMenuIsOpen = (newEditMenuState) => {
  return {
    type: ACTION_CHANGE_EDITMENU,
    payload: newEditMenuState,
  };
};
