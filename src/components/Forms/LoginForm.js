import React from 'react';
import { CaretLeftOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import 'pages/Login/Login.scoped.css';
import { Link } from 'react-router-dom';
import { useLogin } from 'components/hooks/useLogin';

const LoginForm = ({ setform }) => {
  const { email, password, changeEmail, changePassword, onLogin, errorMsg } =
    useLogin();

  return (
    <Row>
      <Col span={24}>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={true}
        >
          <Form.Item>
            <Button
              type="link"
              className="login_form_back_btn"
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
            <Input
              className="input_form"
              placeholder="email"
              onChange={(e) => changeEmail(e.target.value)}
            />
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
              className="input_form"
              type="password"
              placeholder="Password"
              onChange={(e) => changePassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Link className="login_form_forgot" to="">
              Forgot password?
            </Link>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login_form_button"
              onClick={() => onLogin({ email, password })}
            >
              Sign In
            </Button>
            {errorMsg}
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginForm;
