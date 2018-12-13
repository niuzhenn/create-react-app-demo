import React, { Component } from 'react';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import _ from 'lodash';
// import cc from './register.css';
import {loginCheck} from '../actions/actions';

const {
  Header, Footer, Sider, Content,
} = Layout;
const FormItem = Form.Item;

class NormalLoginForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    this.props.form.validateFields((err, values) => {
      if (err) {
        console.log('Error: ', err);
      } else {
        console.log(values);
        loginCheck(values)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout className={'mainLayout'}>
        <Header>Header</Header>
        <Content>
          <Row>
            <Col lg={{ span: 6, offset: 9 }} xs={{ span: 16, offset: 4 }}>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox>Remember me</Checkbox>
                  )}
                  <a className="login-form-forgot" href="">Forgot password</a>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                  </Button>
                  Or <a href="">register now!</a>
                </FormItem>
              </Form>
            </Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

const Register = Form.create()(NormalLoginForm);
export default Register;