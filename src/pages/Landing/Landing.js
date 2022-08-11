import React, { useEffect } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Layout, Row, Typography } from 'antd';
import { useAuth } from 'auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { LANDING_BTN_TEXT, LANDING_DESC, LANDING_TITLE } from 'data/strings';
import './Landing.scoped.css';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const Landing = () => {
  const [logged] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logged && navigate('/micro-jobs');
  }, [logged]);

  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <Link to="/rer">Launch</Link>
        </div>
        <div className="logo_right">
          <Link to="/sign-in">
            <Button size="medium" type="link" className="call_to_action_btn">
              Sign in
              <ArrowRightOutlined className="call_to_action_icon" />
            </Button>
          </Link>
        </div>
      </Header>
      <Layout>
        <Content className="site_layout_background">
          <div className="ant-card" id="card-1">
            <div className="ant-card-body" />
          </div>
          <div className="ant-card" id="card-2">
            <div className="ant-card-body" />
          </div>
          <div className="ant-card" id="card-3">
            <div className="ant-card-body" />
          </div>
          <div className="ant-card" id="card-4">
            <div className="ant-card-body" />
          </div>
          <div id="content-grid">
            <Row>
              <Col xs={{ span: 16, offset: 3 }} lg={{ span: 6, offset: 2 }}>
                <Title level={1}>{LANDING_TITLE}</Title>
              </Col>
            </Row>
            <Row className="mb-1">
              <Col xs={{ span: 16, offset: 3 }} lg={{ span: 6, offset: 2 }}>
                <Text>{LANDING_DESC}</Text>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 15, offset: 3 }} lg={{ span: 4, offset: 2 }}>
                <Link to="/sign-up">
                  <Button size="large" className="call_to_action_btn">
                    {LANDING_BTN_TEXT}
                    <ArrowRightOutlined className="call_to_action_icon" />
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Landing;
