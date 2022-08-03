import React from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={true}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input className="input-form" placeholder="email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input className="input-form" type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Link className="login-form-forgot" to="">
          Forgot password?
        </Link>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
