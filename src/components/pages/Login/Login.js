import React from 'react';
import { Col, Layout, Row, Typography } from 'antd';
import { LOGIN_BG_TEXT } from 'data/strings';
import './Login.css';
import LoginForm from './LoginForm';

const { Content } = Layout;
const { Title } = Typography;

const Login = () => {
  return (
    <Layout>
      <Content className="content-login">
        <Row className="content-row">
          <Col className="content-left" xs={{ span: 20 }} lg={{ span: 12 }}>
            <section>
              <Title level={1}>Sign In</Title>
              <LoginForm />
            </section>
          </Col>
          <Col className="content-right" xs={{ span: 20 }} lg={{ span: 12 }}>
            <section>
              <img
                src="/business-3d-man-lying-on-stomach-with-laptop 1.png"
                alt="flag"
              />
              <Title level={5}>{LOGIN_BG_TEXT}</Title>
            </section>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Login;
