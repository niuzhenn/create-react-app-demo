import { Fetch } from '../lib/common-util';
import store from '../store/store';

export const I18N_CHANGE = 'I18N_CHANGE';
export const MAIN_MENU_CHANGE = 'MAIN_MENU_CHANGE';
export const CHECK_BOX_CHANGE = 'CHECK_BOX_CHANGE';

export function i18nChange(i18n) {
  return {
    type: 'I18N_CHANGE',
    payload: i18n
  }
}

export function mainMenuChange(mainMenu) {
  return {
    type: 'MAIN_MENU_CHANGE',
    payload: mainMenu
  }
}

export function checkBoxChange(checkObject) {
  return {
    type: 'CHECK_BOX_CHANGE',
    payload: checkObject
  }
}

export function getMainMenu() {
  Fetch('get', '/rest/getMainMenu').then((res) => {
    res.map((_res, index) => {
      _res.selected = index === 0;
      _res.index = _res.index.toString();
    })
    store.dispatch(mainMenuChange(res));
  })
}