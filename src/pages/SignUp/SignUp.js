import React, { useState } from 'react';
import { Button, Col, Layout, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { LOGIN_BG_TEXT } from 'data/strings';
import './SignUp.scoped.css';
import SignUpForm from 'components/Forms/SignUpForm';

const { Content } = Layout;
const { Title } = Typography;

const SignUp = () => {
  const [form, setform] = useState('');

  const Forms = () => {
    switch (form) {
      case 'email':
        return <SignUpForm setform={setform} />;

      default:
        return (
          <Row justify="center" align="middle">
            <Col span={22}>
              <Button
                block
                className="sign_in_btn_choose_form"
                onClick={() => setform('google')}
              >
                <img
                  src="/assets/img/Google__G__Logo 1.png"
                  alt="google-logo"
                  className="anticon"
                />
                Sign Up with Google
              </Button>
              <Button
                block
                className="sign_in_btn_choose_form"
                onClick={() => setform('email')}
              >
                <img
                  src="/assets/img/carbon_email.png"
                  alt="email-logo"
                  className="anticon"
                />
                Sign Up with Email
              </Button>
            </Col>
          </Row>
        );
    }
  };

  return (
    <Layout>
      <Content className="content_login">
        <Row className="content_row">
          <Col
            className="content_left"
            xs={{ span: 24 }}
            lg={{ span: 12 }}
          >
            <section>
              <Title level={1}>Create an Account</Title>
              <Forms />
            </section>
            <div className="footer">
              Already have an account?{' '}
              <Link to="/sign-in">Back to Sign In</Link>
            </div>
          </Col>
          <Col
            className="content_right"
            xs={{ span: 24 }}
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

export default SignUp;
