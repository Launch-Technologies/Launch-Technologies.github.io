import React, { useEffect, useRef } from 'react';
import { Button, Col, Layout, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import {
  LANDING_BTN_TEXT_FIND,
  LANDING_BTN_TEXT_POST,
  LANDING_DESC,
  LANDING_SUB_TEXT_BRIEF,
  LANDING_TEXT_BRIEF,
  LANDING_TEXT_DESC,
  LANDING_TEXT_TALENT,
  LANDING_TITLE,
  LANDING_TITLE_BRIEF,
} from 'data/strings';
import { TALENTS } from 'data/talents';
import './Landing.scoped.css';
import Talent from './Talent';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const Landing = () => {
  const speed = 10;
  const refNumber = useRef();

  // NOTE fix this
  // useEffect(() => {
  //   logged && navigate('/micro-jobs');
  // }, [logged]);

  const incEltNbr = (id) => {
    let elt = document.getElementById(id);
    const startDate = new Date('August 15, 2022');
    const today = new Date();
    const endNbr = 100 + parseInt((today - startDate) / 86400000);
    incNbrRec(0, endNbr, elt);
  };

  const incNbrRec = (i, endNbr, elt) => {
    if (i <= endNbr) {
      elt.innerHTML = i;
      setTimeout(function () {
        incNbrRec(i + 1, endNbr, elt);
      }, speed);
    }
  };

  const incNbr = () => {
    incEltNbr('nbr');
    refNumber.current = `<div id="nbr" className="student_number">
        100
      </div>`;
  };

  useEffect(() => {
    const box = document.querySelector('#nbr');
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    document.addEventListener(
      'scroll',
      function () {
        if ((refNumber.current && refNumber.current.innerHTML) === 0) {
          isInViewport(box) && incNbr();
        }
      },
      { passive: true }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Talents = () => {
    return TALENTS.map((e) => {
      return <Talent key={e.id} {...e} />;
    });
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <Link
            to="/rer"
            style={{
              fontSize: 32,
              color: '#000',
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}
          >
            Launch
          </Link>
        </div>
        <div className="logo_right">
          <Row>
            <Col>
              <Link to="/sign-up">
                <Button
                  size="large"
                  className="landing_btn btn_small"
                  style={{ marginRight: 10 }}
                >
                  Sign Up
                </Button>
              </Link>
              <Link to="/sign-in">
                <Button
                  size="large"
                  className="landing_btn btn_white btn_small"
                >
                  Sign In
                </Button>
              </Link>
            </Col>
          </Row>
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
          <div className="content-grid">
            <Row>
              <Col xs={{ span: 16, offset: 3 }} lg={{ span: 8, offset: 2 }}>
                <Title style={{ fontSize: 60 }}>{LANDING_TITLE}</Title>
              </Col>
            </Row>
            <Row style={{ marginBottom: 30 }}>
              <Col xs={{ span: 16, offset: 3 }} lg={{ span: 6, offset: 2 }}>
                <Text style={{ fontSize: 15 }}>{LANDING_DESC}</Text>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 22, offset: 2 }} lg={{ span: 12, offset: 2 }}>
                <Link to="/sign-in">
                  <Button
                    size="large"
                    className="landing_btn"
                    style={{ marginRight: 50 }}
                  >
                    {LANDING_BTN_TEXT_POST}
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Content>
        <Content id="content-grid-brief">
          <div className="content-grid-brief">
            <Row
              className="content-grid-brief-row"
              justify="space-evenly"
              align="middle"
            >
              <Col span={16}>
                <Title style={{ textAlign: 'center', fontSize: 32 }}>
                  {LANDING_TITLE_BRIEF}
                </Title>
              </Col>
            </Row>
            <Row
              className="content-grid-brief-row"
              justify="space-evenly"
              align="middle"
            >
              <Col xs={{ span: 24 }} lg={{ span: 13 }}>
                <Text style={{ fontSize: 24 }}>{LANDING_TEXT_BRIEF}</Text>
              </Col>
            </Row>
            <Row
              className="content-grid-brief-row"
              justify="space-evenly"
              align="middle"
            >
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <Link to="/sign-in">
                  <Button size="large" className="landing_btn">
                    {LANDING_BTN_TEXT_POST}
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row
              className="content-grid-brief-row"
              justify="space-evenly"
              align="middle"
            >
              <Col xs={{ span: 24 }} lg={{ span: 10 }}>
                <Text style={{ fontSize: 24 }}>{LANDING_SUB_TEXT_BRIEF}</Text>
              </Col>
            </Row>
          </div>
        </Content>
        <Content id="content-grid-desc">
          <div className="content-grid-brief">
            <Row
              className="content-grid-desc-row"
              justify="space-evenly"
              align="middle"
            >
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <Title style={{ textAlign: 'center', fontSize: 48 }} level={2}>
                  {LANDING_TEXT_DESC}
                </Title>
              </Col>
            </Row>
            <Row
              className="content-grid-desc-row"
              justify="center"
              align="middle"
            >
              <Col
                xs={{ span: 24 }}
                sm={{ span: 3 }}
                md={{ span: 3 }}
                lg={{ span: 3 }}
                xl={{ span: 2 }}
              >
                <Button
                  size="large"
                  className="landing_btn landing_btn_circle btn_desc mt-1 mr-1"
                >
                  1
                </Button>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 6 }}
                xl={{ span: 3 }}
              >
                <Button
                  size="large"
                  className="landing_btn btn_white btn_desc mt-1"
                >
                  Post a job on Launch
                </Button>
              </Col>
            </Row>
            <Row
              className="content-grid-desc-row"
              justify="center"
              align="middle"
            >
              <Col
                xs={{ span: 24 }}
                sm={{ span: 3 }}
                md={{ span: 3 }}
                lg={{ span: 3 }}
                xl={{ span: 2 }}
              >
                <Button
                  size="large"
                  className="landing_btn landing_btn_circle btn_desc mt-1 mr-1"
                >
                  2
                </Button>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 6 }}
                xl={{ span: 3 }}
              >
                <Button className="landing_btn btn_white btn_desc mt-1">
                  We connect you with our best talent
                </Button>
              </Col>
            </Row>
            <Row
              className="content-grid-desc-row"
              justify="center"
              align="middle"
            >
              <Col
                xs={{ span: 24 }}
                sm={{ span: 3 }}
                md={{ span: 3 }}
                lg={{ span: 3 }}
                xl={{ span: 2 }}
              >
                <Button
                  size="large"
                  className="landing_btn landing_btn_circle btn_desc mt-1 mr-1"
                >
                  3
                </Button>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 6 }}
                xl={{ span: 3 }}
              >
                <Button className="landing_btn btn_white btn_desc mt-1">
                  Your job, done.
                </Button>
              </Col>
            </Row>
          </div>
        </Content>
        <Content id="content-grid-talent">
          <div className="content-grid-brief">
            <Row className="content-grid-talent-row" align="middle">
              <Col span={20}>
                <Title level={2} style={{ marginLeft: 15, fontSize: 32 }}>
                  {LANDING_TEXT_TALENT}
                </Title>
              </Col>
            </Row>
            <Row
              className="content-grid-talent-row"
              justify="space-evenly"
              align="middle"
            >
              {Talents()}
            </Row>
          </div>
        </Content>
        <Content id="content-grid-desc">
          <div className="content-grid-brief">
            <Row
              className="content-grid-desc-row"
              justify="space-evenly"
              align="middle"
            >
              <Col span={24}>
                <Title style={{ textAlign: 'center', fontSize: 48 }} level={2}>
                  We have
                </Title>
              </Col>
            </Row>
            <Row
              className="content-grid-desc-row"
              justify="space-evenly"
              align="middle"
            >
              <Col>
                <div className="landing_btn student_btn">
                  <div id="nbr" className="student_number" ref={refNumber}>
                    0
                  </div>
                </div>
              </Col>
            </Row>
            <Row
              className="content-grid-desc-row"
              justify="space-evenly"
              align="middle"
            >
              <Col span={24}>
                <Title
                  style={{ textAlign: 'center', fontSize: 36, marginTop: 50 }}
                  level={2}
                >
                  freelancers ready to work for you.
                </Title>
              </Col>
            </Row>
          </div>
        </Content>
        <Content id="content-grid-talent">
          <div className="content-grid-brief">
            <Row
              className="content-grid-desc-row"
              justify="space-evenly"
              align="middle"
            >
              <Col span={24}>
                <Title
                  style={{ textAlign: 'center', fontSize: 36, marginTop: 50 }}
                  level={2}
                >
                  Partner Companies and Networks
                </Title>
              </Col>
            </Row>
            <Row
              className="content-grid-talent-row"
              justify="space-evenly"
              align="middle"
            >
              <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                <img
                  className="img_partner"
                  src="https://s3-alpha-sig.figma.com/img/4d77/df31/f838f586ef8e2574393a0117d221bbb4?Expires=1661731200&Signature=KLp5t2IUG4F2XAklxE2cmLqtR1Eh4JTcnGzLvO4N~XuKxdOutGiQzEWdqLF-aWqqsXNUgrQ5~Gf8x8rGckbMX9g3Nmlfhpt9jwaK-EWtIux~7JZqcHMB9rbaeoWfwha2sB-loQ~jthgJvcBQN-zaqLmBM63GU6yTw6f-qyTmcP07EtLOJ-X7-cjJIj8zgPN9mn3wT4AiLQvwy1JhRT9v9tGUXhS2gGOJ6o66mNLoFH0zDcxnn3rpzLWnz7ACDpSoZUu43tMdMkeqwVaKKGBtLvpY3-SUa0qTypA9n5CQD-PBVAJRCgdamN5xYdOkSIz9qYaVPlDPkVZPPgviZglOBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                <img
                  className="img_partner"
                  src="https://s3-alpha-sig.figma.com/img/c4b0/ca71/f5ecbfeb846ebf58aa8b44f35f4bd40d?Expires=1661731200&Signature=KxOpmidf79zp29j6el54uSQAYxtCaQszJ~bgr3zbMU~YsOySoNIWSX0DKl8hqphVrIXFOg1yTscdMh77rl-NkYKYh~o~mGVnS7QIpR4JjFE3pKpUqpzfEuL88n0~iCm1Arob2hUEA2GhFGHpbUtXsjgQ8r4v1kw8PVv1~qPsuDoLHIhtadX-Wq1HHV47DnVJxNQIN~rAMMD8wsCsgZajx2t~XE8LeHEYtKQ5N5XfDu~~cS4mEEA3C7bkJT8DO9h3oo4-BJSYtwtprsUvYh-qqQQTEKL8P8w6t64FPJqv9As3vZaCOz-CJY6Gpy1BRbCPOt4TIqnm5mDnz8TDfPP4PA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
              </Col>
            </Row>
          </div>
        </Content>
        <Content id="content-grid-desc">
          <div className="content-grid-brief">
            <Row
              className="content-grid-desc-row"
              justify="space-evenly"
              align="middle"
            >
              <Col span={20}>
                <Title style={{ textAlign: 'center', fontSize: 36 }} level={2}>
                  Don’t waste any more time looking for full-time talent for
                  jobs that could be done in days, at less than half the cost
                </Title>
              </Col>
            </Row>
            <Row justify="space-evenly" align="middle">
              <Col
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                style={{ textAlign: 'center' }}
              >
                <Link to="/sign-in">
                  <Button
                    size="large"
                    className="landing_btn"
                    style={{ marginRight: 50 }}
                  >
                    {LANDING_BTN_TEXT_POST}
                  </Button>
                </Link>
                <Link to="/sign-in">
                  <Button size="large" className="landing_btn btn_white">
                    {LANDING_BTN_TEXT_FIND}
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Content>
        <Content id="content_footer"></Content>
      </Layout>
    </Layout>
  );
};

export default Landing;
