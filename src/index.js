import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store'; 
import {
  i18nChange,
  getMainMenu,
} from './actions/actions';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

store.dispatch(i18nChange('zh-cn'));
getMainMenu();

render(
  <Provider store={store}>
    <App 
      dispatch = {store.dispatch}
    />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker(); 