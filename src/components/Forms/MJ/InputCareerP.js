import React from 'react'
import { Form, Input } from 'antd';

const inputCareerP = ({ form }) => {

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
        name="career_path"
        label="Write the career path (required)"
        rules={[
          {
            required: true,
            message: 'Please input the career path of the micro-job',
          },
        ]}
      >
        <Input.TextArea rows={4} placeholder="maximum length is 255" maxLength={255} />
      </Form.Item>
    </Form>
  )
}

export default inputCareerP