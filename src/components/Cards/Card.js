import React from 'react';
import { Card as CardAntd, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './Card.scoped.css';

const Card = ({ img, name, btn_url, btn_text }) => {
  // console.log("🚀 ~ btn_text", btn_text)
  // console.log("🚀 ~ btn_url", btn_url)
  // console.log("🚀 ~ name", name)
  // console.log("🚀 ~ img", img)
  return (
    <CardAntd
      className='card_'
      hoverable
      cover={<img alt={name} src="https://app.joblaunch.co/assets/img/Micro%20Task.png" />}
    >
      <Row justify='space-between' align='bottom'>
        <Col span={16}><span className='microjob_title'>{name}</span></Col>
        <Col span={8}>
          <Link to={btn_url}>
            <Button block className="btn_card">{btn_text}</Button>
          </Link>
        </Col>
      </Row>
    </CardAntd>
  )
}

export default Card

