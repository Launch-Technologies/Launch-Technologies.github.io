import React from 'react';
import { LaptopOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Dashboard.scoped.css';

const { Header, Content, Sider } = Layout;
const items1 = ['Microjobs', 'Events'].map((key) => ({
  key,
  label: `${key}`,
}));
const items2 = [LaptopOutlined].map((icon, index) => {
  return {
    key: `MicroJobs`,
    icon: React.createElement(icon),
    label: `MicroJobs`,
    children: ['Lists', 'Add New', 'Progress Tracker', 'Submissions'].map(
      (_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: _,
        };
      }
    ),
  };
});

const Dashboard = ({ children }) => (
  <Layout id="dashboard_layout">
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
    </Header>
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        width={250}
        style={{ paddingTop: 64, height: '100vh' }}
      >
        <Menu
          className="sider_background"
          mode="inline"
          // theme='dark'
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={items2}
          collapsed={false}
        />
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Content
          className="site_layout_background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            marginTop: 100,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default Dashboard;
