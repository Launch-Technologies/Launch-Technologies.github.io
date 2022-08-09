import React, { useEffect, useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row, Select, Spin } from 'antd';
import MicroJobService from 'api/micro-job';
import axios from 'axios';
import NewMJContextProvider from 'context/NewMJProvider';
import MicroJobCard from 'components/Cards/Card';
import Dashboard from 'components/Dashboard/Dashboard';
import NewMicroJobModal from 'components/Modals/NewMicroJobModal';
import './MicroJob.scoped.css';

const { Option } = Select;
const MicroJob = () => {
  const [showForm, setshowForm] = useState(false);
  const microjobService = new MicroJobService();
  const [microjobs, setmicrojobs] = useState([]);
  const [filter, setfilter] = useState({});
  const [fetched, setfetched] = useState(false);
  let cancelToken;

  useEffect(() => {
    const fetchMicroJobs = async () => {
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel();
      }
      cancelToken = axios.CancelToken.source();
      let fetched = await microjobService.fetchMicroJob(
        filter,
        cancelToken.token
      );
      setmicrojobs(fetched);
    };
    fetchMicroJobs();
  }, [filter]);

  useEffect(() => {
    microjobs.length > 0 ? setfetched(true) : setfetched(false);
  }, [microjobs]);

  const sortMicroJob = (value) => {
    setfilter(JSON.parse(value));
  };

  const handleChangeInput = (e) => {
    setmicrojobs([]);
    setfetched(false);
    setfilter({
      task_name__like: e.target.value,
    });
    cancelToken.cancel();
  };

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
              onChange={handleChangeInput}
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
                    onChange={sortMicroJob}
                  >
                    <Option value='{"date__sort":"desc"}'>
                      Oldest - Newest
                    </Option>
                    <Option value='{"date__sort":"asc"}'>
                      Newest - Oldest
                    </Option>
                    {/* <Option value='{"date__lt":"asc"}'>Closing Soon</Option> */}
                    <Option value='{"task_name__sort":"asc"}'>A - Z</Option>
                    <Option value='{"task_name__sort":"desc"}'>Z - A</Option>
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
        {!fetched && (
          <Row justify="space-evenly" align="middle">
            <Col span={1}>
              <Spin className="fetch_mj_spinner" size="large"></Spin>
            </Col>
          </Row>
        )}
        <Row align="top" className="row_content" gutter={[25, 25]}>
          {microjobs.map((e) => {
            return (
              <Col
                xl={{ span: 8 }}
                md={{ span: 8 }}
                xs={{ span: 12 }}
                key={e.id}
              >
                <MicroJobCard {...e} />
              </Col>
            );
          })}
        </Row>
      </section>
      <NewMJContextProvider>
        <NewMicroJobModal visible={showForm} setshowForm={setshowForm} />
      </NewMJContextProvider>
    </Dashboard>
  );
};

export default MicroJob;
