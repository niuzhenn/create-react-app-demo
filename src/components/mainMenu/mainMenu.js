import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import logo from '../../logo.svg';

const SubMenu = Menu.SubMenu;

export default class MainMenu extends Component {

  componentDidMount() {
    this.setState({
      selectedKey: this.props.mainMenu[0].id
    })
  }

  state = {
    selectedKey: ''
  }

  menuItemClick(clickObj) {
    this.setState({
      selectedKey: clickObj.key
    })
  }

  render() {
    const {mainMenu} = this.props;

    return (
      <Menu mode='horizontal' theme='dark' selectedKeys={[this.state.selectedKey]} onClick={(clickObj)=>{this.menuItemClick(clickObj)}}>
        <Menu.Item key='logo' selectable={false}>
          <img src={logo} alt='Logo'/>
        </Menu.Item>
        {
          mainMenu && mainMenu.map((_menu, index) => {
            if (_menu.subMenu.length === 0) {
              return (
                <Menu.Item key={_menu.id}>
                  {_menu.text['zh-cn']}
                </Menu.Item>
              )
            } else {
              return (
                <SubMenu title={<span><Icon type="setting" />{_menu.text['zh-cn']}</span>}>
                  {
                    _menu.subMenu.map((_sub) => {
                      return (
                        <Menu.Item key={_sub.id}>{_sub.text['zh-cn']}</Menu.Item>
                      )
                    })
                  }
                </SubMenu>
              )
            }
          })
        }
      </Menu>
    )
  }
}