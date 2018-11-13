import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import MainMenu from './components/mainMenu/mainMenu';
import ListView from './views/listView';
import {} from './actions/actions';

class App extends Component {

  render() {
    const { dispatch, i18n, mainMenu, checkBox } = this.props;
    return (
      <div className="App">
        <div className='mainMenu'>
        {
          mainMenu.length > 0 &&
          <MainMenu 
            dispatch = {dispatch}
            mainMenu = {mainMenu}
          />
        }
        </div>
        <div className='mainContent'>
          <ListView 
            dispatch = {dispatch}
            checkBox = {checkBox}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state)  {
  return {...state};
}

export default connect(mapStateToProps)(App);
