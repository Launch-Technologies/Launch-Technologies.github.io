import React from 'react';
import { CaretLeftOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import styles from './SignUp.module.css';

const SignUpForm = ({ setform }) => {
  return (
    <Form
      name="normal_signup"
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
        name="fullname"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input className={styles.input_form} placeholder="Fullname" />
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
        <Input className={styles.input_form} placeholder="E-mail" />
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
        <Input.Password
          className={styles.input_form}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error('The two passwords that you entered do not match!')
              );
            },
          }),
        ]}
      >
        <Input.Password
          className={styles.input_form}
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
      >
        <Checkbox>
          I agree to JobLaunch's{' '}
          <a href="https://www.joblaunch.co/termsandconditions">
            Terms and Conditions
          </a>{' '}
          and{' '}
          <a href="https://www.joblaunch.co/privacypolicy">Privacy Policy</a>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.login_form_button}
        >
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
