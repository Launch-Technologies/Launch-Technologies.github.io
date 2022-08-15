import React, { useEffect, useState } from 'react';
import { CaretLeftOutlined } from '@ant-design/icons';
import { Button, Col, Row, Spin, Typography } from 'antd';
import MicroJobService from 'api/micro-job';
import SkillService from 'api/skill';
import { useNavigate, useParams } from 'react-router';
import Dashboard from 'components/Dashboard/Dashboard';
import SectionDetails from 'components/General/SectionDetails';
import './MicroJobDetails.scoped.css';

const { Title } = Typography;

const MicroJobDetails = () => {
  const microjobService = new MicroJobService();
  const skillService = new SkillService();
  const navigate = useNavigate();
  const params = useParams();
  const [coverPhoto, setcoverPhoto] = useState('');
  const [fetched, setfetched] = useState(false);
  const [microjob, setmicrojob] = useState({});

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
            microjobService
              .fetchMicroJobFiles({ micro_job_id: params.id })
              .then((micro_job_files) => {
                setmicrojob({
                  ...microjob_,
                  skills: skills_,
                  attachments: micro_job_files,
                });
                setfetched(true);
                microjob_.cover_photo && microjob_.cover_photo !== 'None'
                  ? setcoverPhoto(
                      process.env.REACT_APP_API + microjob_.cover_photo
                    )
                  : setcoverPhoto(
                      'https://app.joblaunch.co/assets/img/Cohort%20UIUX.png'
                    );
              });
          });
        });
    });
  }, []);

  return (
    <Dashboard>
      <section id="microjob_detail_page">
        <div
          id="section_bg_cover"
          style={{
            backgroundImage: `url(${coverPhoto})`,
          }}
        >
          <Button
            type="danger"
            className="back_btn"
            onClick={() => navigate('/micro-jobs')}
            icon={<CaretLeftOutlined />}
          >
            back
          </Button>
          <Row justify="space-evenly" align="middle">
            <Col className="title_container">
              <Title className="title" level={1}>
                {microjob.task_name}
              </Title>
            </Col>
          </Row>
        </div>
        {!fetched && (
          <Row justify="space-evenly" align="middle">
            <Col span={1}>
              <Spin className="fetch_mj_spinner" size="large"></Spin>
            </Col>
          </Row>
        )}
        {fetched && (
          <div id="section_detail">
            <SectionDetails title="Brief" microjob={microjob} key_="brief" />
            <SectionDetails
              title="Badges Required"
              microjob={microjob}
              key_="badges"
            />
            <SectionDetails
              title="Renumeration"
              microjob={microjob}
              key_="remuneration"
            />
            <SectionDetails
              title="Expectations"
              microjob={microjob}
              key_="expectations"
            />
            <SectionDetails
              title="Career Prospect"
              microjob={microjob}
              key_="career_prospects"
            />
            <SectionDetails
              title="Additional Files"
              microjob={microjob}
              key_="attachments"
            />
          </div>
        )}
      </section>
    </Dashboard>
  );
};

export default MicroJobDetails;
