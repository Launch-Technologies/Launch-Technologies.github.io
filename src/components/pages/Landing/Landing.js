import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Card, Col, Layout, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { LANDING_BTN_TEXT, LANDING_DESC, LANDING_TITLE } from 'data/strings';
import styles from './Landing.module.css';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const Landing = () => {
  return (
    <Layout id="landing-layout">
      <Header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/rer">Launch</Link>
        </div>
      </Header>
      <Layout>
        <Content className={styles.site_layout_background}>
          <Card id="card-1" />
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
                  <Button size="large" className={styles.call_to_action_btn}>
                    {LANDING_BTN_TEXT}
                    <ArrowRightOutlined
                      className={styles.call_to_action_icon}
                    />
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
