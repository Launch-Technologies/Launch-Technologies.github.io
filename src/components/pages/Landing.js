import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Card, Col, Layout, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
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
              <Col lg={{ span: 6, offset: 2 }}>
                <Title level={1}>Getting your every task to new heights.</Title>
              </Col>
            </Row>
            <Row className="mb-1">
              <Col lg={{ span: 6, offset: 2 }}>
                <Text>
                  launch.api completes tasks essential for your business to
                  thrive. This is a sample description of launch.api, please
                  modify to your liking, Paul.
                </Text>
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 4, offset: 2 }}>
                <Link to="/sign-in">
                  <Button size="large" className="call-to-action-btn">
                    Post a job now
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
