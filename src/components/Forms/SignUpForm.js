import React from 'react';
import { CaretLeftOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import 'pages/SignUp/SignUp.scoped.css';
import { useSignup } from '../hooks/useSignup';

const SignUpForm = ({ setform }) => {
  const {
    onSignup,
    fullName,
    changeFullName,
    email,
    changeEmail,
    password,
    changePassword,
    changePassword2,
    checkToc,
    setCheckToc,
    errorMsgUplaod,
  } = useSignup(null, true);

  const onClickSignUp = () => {
    onSignup({
      name: fullName,
      email: email,
      password: password,
    });
  };
  return (
    <Row>
      <Col>
        <Form
          name="normal_signup"
          className="signup_form"
          initialValues={{
            remember: true,
          }}
          onFinish={true}
        >
          <div style={{ color: 'red', marginTop: '10px' }}>
            {errorMsgUplaod}
          </div>
          <Form.Item>
            <Button
              type="link"
              className="signup_form_back_btn"
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
            onChange={(e) => changeFullName(e.target.value)}
            rules={[
              {
                required: true,
                message: 'Please input your company name',
              },
            ]}
          >
            <Input className="input_form" placeholder="Company Name" />
          </Form.Item>
          <Form.Item
            name="email"
            onChange={(e) => changeEmail(e.target.value)}
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input className="input_form" placeholder="E-mail company" />
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
              type="password"
              className="input_form"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            onChange={(e) => changePassword(e.target.value)}
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
                    new Error(
                      'The two passwords that you entered do not match!'
                    )
                  );
                },
              }),
            ]}
          >
            <Input
              onChange={(e) => changePassword2(e.target.value)}
              className="input_form"
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
            <Checkbox
              className="terms_policy_checkbox"
              onChange={() => setCheckToc(!checkToc)}
            >
              I agree to JobLaunch's{' '}
              <a href="https://www.joblaunch.co/termsandconditions">
                Terms and Conditions
              </a>{' '}
              and{' '}
              <a href="https://www.joblaunch.co/privacypolicy">
                Privacy Policy
              </a>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              // htmlType="submit"
              className="signup_form_button"
              onClick={onClickSignUp}
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default SignUpForm;
