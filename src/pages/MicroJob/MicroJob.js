import React from 'react';
import { Row, Col, Input, Select, Button } from 'antd';
import './MicroJob.scoped.css';
import Dashboard from 'components/Dashboard/Dashboard';
import { PlusCircleOutlined } from '@ant-design/icons';
import Card from 'components/Cards/Card';

const { Option } = Select;
const MicroJob = () => {
  const microjobs = [
    {
      id: 1,
      img: "/public/assets/img/favpng_job-interview-vector-graphics-job-hunting-employment.png",
      name: "mj1",
      btn_url: "/submissions",
      btn_text: "continue"
    },
    {
      id: 2,
      img: "/public/assets/img/favpng_job-interview-vector-graphics-job-hunting-employment.png",
      name: "mj1",
      btn_url: "/submissions",
      btn_text: "continue"
    },
    {
      id: 3,
      img: "/public/assets/img/favpng_job-interview-vector-graphics-job-hunting-employment.png",
      name: "mj1dsafdska",
      btn_url: "/submissions",
      btn_text: "continue"
    },
    {
      id: 4,
      img: "/public/assets/img/favpng_job-interview-vector-graphics-job-hunting-employment.png",
      name: "mj1",
      btn_url: "/submissions",
      btn_text: "continue"
    },
    {
      id: 5,
      img: "/public/assets/img/favpng_job-interview-vector-graphics-job-hunting-employment.png",
      name: "mj1",
      btn_url: "/submissions",
      btn_text: "continue"
    },
    {
      id: 6,
      img: "/public/assets/img/favpng_job-interview-vector-graphics-job-hunting-employment.png",
      name: "mj1",
      btn_url: "/submissions",
      btn_text: "continue"
    }
  ]
  return (
    <Dashboard>
      <section id='microjob_page'>
        <Row justify='space-between' align='middle'>
          <Col
            // xs={{ span: 18 }} 
            lg={{ span: 15 }}>
            <Input placeholder='search for a micro-jobs' className='search_input'></Input>
          </Col>
          <Col
            // xs={{ span: 18 }} 
            lg={{ span: 1 }}>
            Sort By:
          </Col>
          <Col
            // xs={{ span: 18 }} 
            lg={{ span: 4 }}>
            <div>
              <Select size='large' defaultValue="old_new" className='sort_options'>
                <Option value="old_new">Oldest - Newest</Option>
                <Option value="close_soon">Closing Soon</Option>
                <Option value="new_old">Newest - Oldest</Option>
                <Option value="a_z">A - Z</Option>
                <Option value="z_a">Z - A</Option>
              </Select>
            </div>
          </Col>
          <Col
            // xs={{ span: 18 }} 
            lg={{ span: 3 }}>
            <Button size='large' block className="btn_add_new" icon={<PlusCircleOutlined />}>Add New</Button>
          </Col>
        </Row>
        <Row align='middle' className='row_content'>
          {microjobs.map(e => {
            return (
              <Col lg={{ span: 6 }} key={e.id}>
                <Card {...e} />
              </Col>
            );
          })}
        </Row>
      </section>
    </Dashboard>
  );
};

export default MicroJob;
