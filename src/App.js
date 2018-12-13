import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { Menu, Icon } from 'antd';

import cc from './App.css';
import ListView from './views/listView';
import Register from './views/register';

import { MAIN_MENU } from './config/init';

class App extends Component {
  
  state = {
    current: MAIN_MENU[0].id,
  }

  handleClick = (e) => {

    this.setState({
      current: e.key,
    });
  }

  getRouter() {
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;
    
    return (
      <Switch>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          {
            MAIN_MENU.map((_menu) => {
              return (
                <Menu.Item key={_menu.id}>
                  <Icon type="mail"/>{_menu.text}
                </Menu.Item>
              )
            })
          }
        </Menu>
        <Route exact path="/" render={() => <ListView {...this.props} />} />
        <Route path="/register" render={() => <Register {...this.props} />} />
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
