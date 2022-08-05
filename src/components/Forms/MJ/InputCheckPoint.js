import React from 'react';
import { Form, Input } from 'antd';

const InputCheckPoint = ({ form }) => {
  return (
    <Form
      form={form}
      layout="horizontal"
      name="form_in_modal"
      initialValues={{
        career_path_0: 'not yet started',
        career_path_100: 'Micro-Job completed',
      }}
    >
      <Form.Item name="career_path_0" label="0%">
        <Input placeholder="Type your response" />
      </Form.Item>
      <Form.Item name="career_path_20" label="20%">
        <Input placeholder="Type your response" />
      </Form.Item>
      <Form.Item name="career_path_40" label="40%">
        <Input placeholder="Type your response" />
      </Form.Item>
      <Form.Item name="career_path_60" label="60%">
        <Input placeholder="Type your response" />
      </Form.Item>
      <Form.Item name="career_path_80" label="80%">
        <Input placeholder="Type your response" />
      </Form.Item>
      <Form.Item name="career_path_100" label="100%">
        <Input placeholder="Type your response" />
      </Form.Item>
    </Form>
  );
};

export default InputCheckPoint;
