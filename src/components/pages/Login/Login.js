import React, { useState } from 'react';
import { Button, Col, Layout, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { LOGIN_BG_TEXT } from 'data/strings';
import styles from './Login.module.css';
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
              className={styles.sign_in_btn_choose_form}
              onClick={() => setform('google')}
            >
              <img
                src="/assets/img/Google__G__Logo 1.png"
                alt="google-logo"
                className={styles.anticon}
              />
              Sign in with Google
            </Button>
            <Button
              block
              className={styles.sign_in_btn_choose_form}
              onClick={() => setform('email')}
            >
              <img
                src="/assets/img/carbon_email.png"
                alt="email-logo"
                className={styles.anticon}
              />
              Sign in with Email
            </Button>
          </>
        );
    }
  };

  return (
    <Layout>
      <Content className={styles.content_login}>
        <Row className={styles.content_row}>
          <Col
            className={styles.content_left}
            xs={{ span: 20 }}
            lg={{ span: 12 }}
          >
            <section>
              <Title level={1}>Sign In</Title>
              <Forms />
            </section>
            <div className={styles.footer}>
              New to JobLaunch? <Link to="/sign-up">Create an Account.</Link>
            </div>
          </Col>
          <Col
            className={styles.content_right}
            xs={{ span: 20 }}
            lg={{ span: 12 }}
          >
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
