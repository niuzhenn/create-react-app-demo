import _ from 'lodash';
import { Fetch } from '../lib/common-util';
import { LOGIN_STATUS } from '../config/init';
import store from '../store/store';

export const TYPE = {
  I18N_CHANGE: 'I18N_CHANGE',
  UPDATE_ARTICAL_LIST: 'UPDATE_ARTICAL_LIST'
}

export function actionCreater(type, payload) {
  return {
    type: type,
    payload: payload
  }
}

export function getArticalList(query) {
  Fetch('get', '/rest/listview/getArticalList').then((res) => {
    let artList = [];
    store.dispatch('UPDATE_ARTICAL_LIST', artList)
  }).catch((err) => {
    console.log(err);
  })
}

export function loginCheck(loginParam) {
  const { userName, password } = loginParam;
  const params = `userName=${userName}&pwd=${password}`;
  Fetch('get', '/rest/login/loginCheck?' + params).then((res) => {

  }).catch((err) => {
    console.log(err);
  })
}