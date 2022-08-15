import React, { useState } from 'react';
import { FileTextOutlined } from '@ant-design/icons';
import { Col, Row, Typography, message } from 'antd';
import MicroJobService from 'api/micro-job';
import './SectionDetails.scoped.css';

const { Title, Paragraph } = Typography;

const SectionDetails = ({ title, microjob, key_ }) => {
  const microjobService = new MicroJobService();
  const [editableStr, setEditableStr] = useState(microjob[key_]);
  const [badges, setBadges] = useState(microjob.skills);
  const [files, setFiles] = useState(microjob.attachments);

  const handleChange = (data) => {
    if (data !== editableStr.substr(0, editableStr.length - 2)) {
      const res = microjobService.patchMicroJob(microjob.id, { key_: data });
      res.then((e) => {
        if (e.status == 'Ok') {
          message.success('Successfully updated the brief!');
          setEditableStr(data);
        }
      });
    }
  };

  const Badges = () => {
    if (!badges.length > 0) return 'No data to display';
    return (
      <div
        className="badges_container"
        style={{
          backgroundImage: `url('${process.env.REACT_APP_PUBLIC_URL}/assets/img/Rectangle_117.png')`,
        }}
      >
        <Row justify="space-evenly" align="middle">
          <Col span={2}></Col>
          {badges.map((e) => (
            <Col key={e.id} span={20 / badges.length}>
              <img
                className="badges_logo"
                // TODO fix env set it on github pages env
                // src={process.env.REACT_APP_API + e.image}
                src={'https://dev.joblaunch.co/api' + e.image}
                alt={e.name}
              />
              <br />
              <Title level={5} style={{ textAlign: 'center', color: 'white' }}>
                {e.name}
              </Title>
            </Col>
          ))}
          <Col span={2}></Col>
        </Row>
      </div>
    );
  };

  const Attachments = () => {
    if (!files.length > 0) return 'No data to display';
    return (
      <div className="attachment_container">
        <Row justify="" align="middle">
          {files.map((e) => (
            <Col span={2}>
              <FileTextOutlined style={{ fontSize: 40 }} />
              <br />
              {/* TODO fix env set it on github pages env */}
              {/* <a target="_blank" href={process.env.REACT_APP_API + e.file_path}> */}
              <a
                target="_blank"
                href={'https://dev.joblaunch.co/api' + e.file_path}
              >
                Download
              </a>
            </Col>
          ))}
        </Row>
      </div>
    );
  };

  const Content = () => {
    switch (key_) {
      case 'badges':
        return <Badges />;
      case 'attachments':
        return <Attachments />;
      default:
        if (!editableStr || editableStr === 'None') return 'No data to display';
        return (
          <Paragraph editable={{ onChange: handleChange }}>
            {editableStr}
          </Paragraph>
        );
    }
  };

  return (
    <Row
      align="top"
      className="row_content"
      gutter={[25, 25]}
      style={{ marginBottom: 10 }}
    >
      <Col span={24}>
        <Title style={{ color: '#1364E7' }} level={3}>
          {title}
        </Title>
        <Content />
      </Col>
    </Row>
  );
};

export default SectionDetails;
