import React from 'react';
import { Form, Input } from 'antd';

const InputName = ({ form }) => {
  return (
    <Form
      form={form}
      layout="vertical"
      name="form_in_modal"
      initialValues={{
        modifier: 'public',
      }}
    >
      <Form.Item
        name="name"
        label="Name of Task (required)"
        rules={[
          {
            required: true,
            message: 'Please input the title of the micro-job',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default InputName;
