import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import {
  actionCreater,
  getArticalList,
} from './actions/actions';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

store.dispatch(actionCreater('I18N_CHANGE', 'zh-cn'));
getArticalList();

render(
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker(); 