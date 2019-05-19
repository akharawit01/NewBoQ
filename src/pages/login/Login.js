import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import LoginStyle from './Login.style';

import { token } from '../../utils';

const Login = ({ form, history }) => {
  const { getFieldDecorator } = form;

  useEffect(() => {
    console.log('xxx');
    localStorage.clear();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        localStorage.setItem('token', token());
        history.push('/');
      }
    });
  };

  return (
    <LoginStyle>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <span className="login-form-forgot">Forgot password</span>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <span>register now!</span>
        </Form.Item>
      </Form>
    </LoginStyle>
  );
};

export default withRouter(Form.create({ name: 'normal_login' })(Login));
