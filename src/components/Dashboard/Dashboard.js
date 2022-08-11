import React from 'react';
import { LaptopOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import ProfileTab from 'components/Tab/ProfileTab';
import './Dashboard.scoped.css';

const { Header, Content, Sider } = Layout;
const items1 = ['Microjobs', 'Events'].map((key) => ({
  key,
  label: `${key}`,
}));
const items2 = [LaptopOutlined].map((icon, index) => {
  return {
    key: `Jobs`,
    // icon: React.createElement(icon),
    label: `Jobs`,
    children: ['Progress Tracker', 'Submissions'].map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: _,
      };
    }),
  };
});

const Dashboard = ({ children }) => (
  <Layout hasSider id="dashboard_layout">
    <Header className="header">
      <div className="logo">
        <Link to="/">Launch</Link>
      </div>
      <Menu
        theme="light"
        className="top-menu"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
      />
      <span className="user_header">
        <ProfileTab />
      </span>
    </Header>
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log('🚀 ~ broken', broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log('🚀 ~ collapsed, typ', collapsed, type);
        }}
        width={250}
        className="sider"
        style={{ paddingTop: 64, height: '100vh' }}
      >
        <div className="title_sider">Admin Dashboard</div>
        <Menu
          className="sider_background"
          mode="inline"
          // theme='dark'
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['Jobs']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={items2}
        />
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
          overflow: 'initial',
        }}
      >
        <Content
          className="site_layout_background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            marginTop: 90,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default Dashboard;
