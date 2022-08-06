import React, { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row, Select, Space } from 'antd';
import Card from 'components/Cards/Card';
import Dashboard from 'components/Dashboard/Dashboard';
import NewMicroJobModal from 'components/Modals/NewMicroJobModal';
import './MicroJob.scoped.css';

const { Option } = Select;
const MicroJob = () => {
  const [showForm, setshowForm] = useState(false);
  const microjobs = [
    {
      id: 1,
      img: '/public/assets/img/favpng_job-interview-vector-graphics-job-hunting-employment.png',
      name: 'Mj1',
      btn_url: '/submissions',
      btn_text: 'Continue',
    },
    {
      id: 2,
      img: '/public/assets/img/favpng_job-interview-vector-graphics-job-hunting-employment.png',
      name: 'Mj1',
      btn_url: '/submissions',
      btn_text: 'Continue',
    },
    {
      id: 3,
      img: '/public/assets/img/favpng_job-interview-vector-graphics-job-hunting-employment.png',
      name: 'Mj1dsafdska',
      btn_url: '/submissions',
      btn_text: 'Continue',
    },
    {
      id: 4,
      img: '/public/assets/img/favpng_job-interview-vector-graphics-job-hunting-employment.png',
      name: 'Mj1',
      btn_url: '/submissions',
      btn_text: 'Continue',
    },
    {
      id: 5,
      img: '/public/assets/img/favpng_job-interview-vector-graphics-job-hunting-employment.png',
      name: 'Mj1',
      btn_url: '/submissions',
      btn_text: 'Continue',
    },
    {
      id: 6,
      img: '/public/assets/img/favpng_job-interview-vector-graphics-job-hunting-employment.png',
      name: 'Mj1',
      btn_url: '/submissions',
      btn_text: 'Continue',
    },
  ];
  return (
    <Dashboard>
      <section id="microjob_page">
        <Row justify="space-between" align="middle" gutter={[0, 16]}>
          <Col
            //
            xs={{ span: 24 }}
            // xs={{ span: 24 }}
            lg={{ span: 13 }}
          >
            <Input
              placeholder="Search for a micro-jobs"
              className="search_input"
            ></Input>
          </Col>
          <Col lg={{ span: 6 }}>
            <Row justify="space-between" align="middle" gutter={[10]}>
              <Col align="end" lg={{ span: 8 }}>
                Sort By:
              </Col>
              <Col lg={{ span: 16 }}>
                <div>
                  <Select
                    size="large"
                    defaultValue="old_new"
                    className="sort_options"
                  >
                    <Option value="old_new">Oldest - Newest</Option>
                    <Option value="close_soon">Closing Soon</Option>
                    <Option value="new_old">Newest - Oldest</Option>
                    <Option value="a_z">A - Z</Option>
                    <Option value="z_a">Z - A</Option>
                  </Select>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            // xs={{ span: 24 }}
            lg={{ span: 3 }}
          >
            <Button
              size="large"
              onClick={() => setshowForm(true)}
              block
              className="btn_add_new"
              icon={<PlusCircleOutlined />}
            >
              Add New
            </Button>
          </Col>
        </Row>
        <Row align="middle" className="row_content" gutter={[25, 25]}>
          {microjobs.map((e) => {
            return (
              <Col
                xl={{ span: 8 }}
                md={{ span: 8 }}
                xs={{ span: 12 }}
                key={e.id}
              >
                <Card {...e} />
              </Col>
            );
          })}
        </Row>
      </section>
      <NewMicroJobModal visible={showForm} setshowForm={setshowForm} />
    </Dashboard>
  );
};

export default MicroJob;
