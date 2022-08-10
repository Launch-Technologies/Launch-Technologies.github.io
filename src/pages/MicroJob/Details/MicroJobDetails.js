import React, { useEffect, useState } from 'react';
import { CaretLeftOutlined } from '@ant-design/icons';
import { Button, Col, Row, Spin } from 'antd';
import MicroJobService from 'api/micro-job';
import SkillService from 'api/skill';
import { useNavigate, useParams } from 'react-router';
import Dashboard from 'components/Dashboard/Dashboard';
import './MicroJobDetails.scoped.css';

const MicroJobDetails = () => {
  const [fetched, setfetched] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  console.log('🚀 ~ params', params);
  const [microjob, setmicrojob] = useState({});
  console.log('🚀 ~ microjob', microjob);
  const microjobService = new MicroJobService();
  const skillService = new SkillService();

  useEffect(() => {
    const res = microjobService.fetchMicroJob({ id: params.id });
    res.then((e) => {
      let [microjob_] = e;
      microjobService
        .fetchMicroJobSkill({ micro_job_id: microjob_.id })
        .then((skill_id) => {
          let skill_ids = skill_id.map((e) => e.skill_id);
          skillService.getSkill().then((skills) => {
            let skills_ = skills.filter((e) => skill_ids.includes(e.id));
            setmicrojob({
              ...microjob_,
              skills: skills_,
            });
            setfetched(true);
          });
        });
    });
  }, []);

  return (
    <Dashboard>
      <section id="microjob_page">
        <Button
          type="link"
          className="signup_form_back_btn"
          onClick={() => navigate('/micro-jobs')}
          icon={<CaretLeftOutlined />}
        >
          back
        </Button>
        {!fetched && (
          <Row justify="space-evenly" align="middle">
            <Col span={1}>
              <Spin className="fetch_mj_spinner" size="large"></Spin>
            </Col>
          </Row>
        )}
        <Row align="top" className="row_content" gutter={[25, 25]}></Row>
      </section>
      {/* <NewMJContextProvider>
        
      </NewMJContextProvider> */}
    </Dashboard>
  );
};

export default MicroJobDetails;
