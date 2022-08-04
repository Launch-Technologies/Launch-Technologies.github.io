import React, { useState } from 'react';
import { Button, Col, Layout, Row, Typography } from 'antd';
import { LOGIN_BG_TEXT } from 'data/strings';
import './Login.css';
import LoginForm from './LoginForm';

const { Content } = Layout;
const { Title } = Typography;

const Login = () => {
  const [form, setform] = useState('');

  const Forms = () => {
    switch (form) {
      case 'email':
        return <LoginForm setform={setform} />;

      default:
        return (
          <>
            <Button
              block
              className="sign-in-btn-choose-form"
              onClick={() => setform('google')}
            >
              <img
                src="/assets/img/Google__G__Logo 1.png"
                alt="google-logo"
                className="anticon"
              />
              Sign in with Google
            </Button>
            <Button
              block
              className="sign-in-btn-choose-form"
              onClick={() => setform('email')}
            >
              <img
                src="/assets/img/carbon_email.png"
                alt="email-logo"
                className="anticon"
              />
              Sign in with Email
            </Button>
          </>
        );
    }
  };

  return (
    <Layout>
      <Content className="content-login">
        <Row className="content-row">
          <Col className="content-left" xs={{ span: 20 }} lg={{ span: 12 }}>
            <section>
              <Title level={1}>Sign In</Title>
              <Forms />
            </section>
          </Col>
          <Col className="content-right" xs={{ span: 20 }} lg={{ span: 12 }}>
            <section>
              <img
                src="/assets/img/favpng_job-interview-vector-graphics-job-hunting-employment.png"
                alt="flag"
              />
              <Title level={5} className="tac">
                {LOGIN_BG_TEXT}
              </Title>
            </section>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Login;
