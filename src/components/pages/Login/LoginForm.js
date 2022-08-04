import React from 'react';
import { CaretLeftOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const LoginForm = ({ setform }) => {
  return (
    <Form
      name="normal_login"
      className={styles.login_form}
      initialValues={{
        remember: true,
      }}
      onFinish={true}
    >
      <Form.Item>
        <Button
          type="link"
          className={styles.login_form_back_btn}
          onClick={() => setform('')}
          icon={
            <CaretLeftOutlined
              style={{ fontSize: '20px', paddingTop: '10px' }}
            />
          }
        >
          back
        </Button>
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input className={styles.input_form} placeholder="email" />
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
        <Input
          className={styles.input_form}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Link className={styles.login_form_forgot} to="">
          Forgot password?
        </Link>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.login_form_button}
        >
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
