import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import './App.css';
import ListView from './views/listView';
import Register from './views/register';


class App extends Component {

  getRouter() {
    return (
      <Switch>
        <Route exact path="/" render={() => <div><ListView {...this.props}/></div>} />
        <Route path="/register" render={() => <div><Register {...this.props}/></div>} />
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>
        {
          this.getRouter()
        }
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(App);
