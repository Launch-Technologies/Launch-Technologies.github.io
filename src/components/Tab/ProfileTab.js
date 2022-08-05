import React, { useState } from 'react';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Space } from 'antd';
import './ProfileTab.scoped.css';

const ProfileTab = () => {
  const [showCard, setshowCard] = useState(false);
  const showProfileCard = (e) => {
    e.preventDefault();
    setshowCard(!showCard);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    let str = 'Good Morning';
    if (hour >= 12) str = 'Good Afternoon';
    if (hour >= 18) str = 'Good Evening';
    if (hour >= 21) str = 'Good Night';
    return str;
  };
  return (
    <a onClick={showProfileCard}>
      <Space>
        <Avatar
          src="https://joeschmoe.io/api/v1/random"
          style={{
            color: '#f56a00',
            backgroundColor: '#fde3cf',
          }}
        >
          U
        </Avatar>
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
        <Card className="card_profile_tab" hoverable style={{ width: 240 }}>
          Hello,
          <br />
          {getGreeting()}
          <br />
          <Avatar
            src="https://joeschmoe.io/api/v1/random"
            style={{
              color: '#f56a00',
              backgroundColor: '#fde3cf',
            }}
          >
            U
          </Avatar>
          <br />
          <Button type="link">Log out</Button>
        </Card>
      </div>
    </a>
  );
};

export default ProfileTab;
