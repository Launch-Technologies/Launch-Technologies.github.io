import React from 'react';
import { CaretLeftOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const LoginForm = ({ setform }) => {
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={true}
    >
      <Button
        type="link"
        className="login-form-back-btn"
        onClick={() => setform('')}
        icon={
          <CaretLeftOutlined style={{ fontSize: '20px', paddingTop: '10px' }} />
        }
      >
        back
      </Button>
      <Form.Item></Form.Item>
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
