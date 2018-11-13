import React, { Component } from 'react';
import { Layout } from 'antd';
import _ from 'lodash';

export default class Register extends Component {
  
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <div id='registerContainer'>
        <Layout>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
    )
  }
}