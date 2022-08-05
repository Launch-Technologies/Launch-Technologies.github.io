import React from 'react'
import { Form, Input } from 'antd';

const InputBrief = ({ form }) => {
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
        name="brief"
        label="Write a Brief (required)"
        rules={[
          {
            required: true,
            message: 'Please input the title of the micro-job',
          },
        ]}
      >
        <Input.TextArea rows={4} placeholder="maximum length is 255" maxLength={255} />
      </Form.Item>
    </Form>
  )
}

export default InputBrief