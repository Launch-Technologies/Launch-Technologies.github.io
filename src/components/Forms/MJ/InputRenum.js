import React from 'react'
import { Form, Input, Radio } from 'antd';

const inputRenum = ({ form }) => {

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
        name="renumeration"
        label="Input Renumeration (required)"
        rules={[
          {
            required: true,
            message: 'Please input the renumeration of the micro-job',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  )
}

export default inputRenum