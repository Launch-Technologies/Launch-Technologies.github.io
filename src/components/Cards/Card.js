import React, { useState } from 'react';
import { Button, Card as CardAntd, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import './Card.scoped.css';

const Card = ({ id, cover_photo, task_name }) => {
  const [loading, setloading] = useState(true);
  const defaulCoverPhoto =
    'https://app.joblaunch.co/assets/img/Micro%20Task.png';
  const coverPhotos = ['null', 'None'].includes(cover_photo)
    ? defaulCoverPhoto
    : 'http://localhost:5123/api' + cover_photo;

  const onLoaded = () => {
    setloading(false);
  };

  const CoverImage = () => {
    return (
      <img
        alt={task_name}
        src={coverPhotos}
        onLoad={onLoaded}
        onError={({ currentTarget }) => {
          currentTarget.src = defaulCoverPhoto;
        }}
      />
    );
  };

  return (
    <CardAntd
      className="card_"
      hoverable
      cover={<CoverImage />}
      loading={loading}
    >
      <Row justify="space-between" align="bottom">
        <Col span={16}>
          <span className="microjob_title">{task_name}</span>
        </Col>
        <Col span={8}>
          <Link to={'/micro-jobs/' + id}>
            <Button block className="btn_card">
              Continue
            </Button>
          </Link>
        </Col>
      </Row>
    </CardAntd>
  );
};

export default Card;
