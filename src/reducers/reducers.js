import { combineReducers } from 'redux';
import {
  I18N_CHANGE,
} from '../actions/actions';

function i18nChange(state = 'zh-cn', action) {
  switch(action.type) {
    case 'I18N_CHANGE':
      return action.payload;
    default: 
      return state;
  }
}

export const rootReducer = combineReducers({
  i18n: i18nChange,
})