import React, { useState } from 'react';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Row, Space } from 'antd';
import { logout } from 'auth';
import { useUser } from 'context/user';
import { useNavigate } from 'react-router-dom';
import { getGreeting } from 'utils/utils';
import './ProfileTab.scoped.css';

const ProfileTab = () => {
  const { userData } = useUser();
  const [showCard, setshowCard] = useState(false);
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/');
  };

  const showProfileCard = (e) => {
    e.preventDefault();
    setshowCard(!showCard);
  };

  const UserAvatar = () => {
    return (
      <Avatar
        src={userData.image}
        style={{
          color: '#f56a00',
          backgroundColor: '#fde3cf',
        }}
      >
        {userData.name.substr(0, 1).toUpperCase()}
      </Avatar>
    );
  };

  return (
    <div onClick={showProfileCard}>
      <Space>
        <UserAvatar />
        {!showCard ? <CaretDownOutlined /> : <CaretUpOutlined />}
      </Space>
      <div
        style={{
          position: 'absolute',
          top: '2em',
          right: 0,
          margin: 0,
          display: showCard ? '' : 'none',
        }}
      >
        <Card
          className="card_profile_tab"
          hoverable
          style={{ width: 240 }}
          actions={[
            <Button type="link" className="btn_logout" onClick={onLogout}>
              Log out
            </Button>,
          ]}
        >
          <Space direction="vertical" size={1} style={{ display: 'flex' }}>
            Hello,
            {getGreeting()}
            <Row align="middle" className="mt-1">
              <Col span={6}>
                <UserAvatar />
              </Col>
              <Col span={18}>
                <div className="user_name_text">{userData.name}</div>
                <div className="user_email_text">{userData.email}</div>
              </Col>
            </Row>
          </Space>
        </Card>
      </div>
    </div>
  );
};

export default ProfileTab;
