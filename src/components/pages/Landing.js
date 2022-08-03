import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Card, Col, Layout, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { LANDING_BTN_TEXT, LANDING_DESC, LANDING_TITLE } from 'data/strings';
import './Landing.css';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const Landing = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <Link to="/rer">Launch</Link>
        </div>
      </Header>
      <Layout>
        <Content className="site-layout-background">
          <Card id="card-1"></Card>
          <Card id="card-2" />
          <Card id="card-3" />
          <Card id="card-4" />
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
                <Link to="/sign-in">
                  <Button size="large" className="call-to-action-btn">
                    {LANDING_BTN_TEXT}
                    <ArrowRightOutlined className="call-to-action-icon" />
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
