import { combineReducers } from 'redux';
import {
  I18N_CHANGE,
  MAIN_MENU_CHANGE,
  CHECK_BOX_CHANGE
} from '../actions/actions';
import { CHECKBOX_INIT } from '../config/init';

function i18nChange(state = 'zh-cn', action) {
  switch(action.type) {
    case 'I18N_CHANGE':
      return action.payload;
    default: 
      return state;
  }
}

function mainMenuChange(state = [], action) {
  switch(action.type) {
    case 'MAIN_MENU_CHANGE':
      return action.payload;
    default:
      return state;
  }
}

function checkBoxChange(state = CHECKBOX_INIT, action) {
  switch(action.type) {
    case 'CHECK_BOX_CHANGE':
      return action.payload;
    default:
      return state;
  }
}


export const rootReducer = combineReducers({
  i18n: i18nChange,
  mainMenu: mainMenuChange,
  checkBox: checkBoxChange
})