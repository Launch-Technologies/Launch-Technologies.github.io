import React, { useState } from 'react'
import { Form, Select } from 'antd';

const SelectBadges = ({ form }) => {
  const OPTIONS = ['HTML', 'CSS', 'JAVASCRIPT'];
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

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
        name="badges"
        label="Select Bagdes (required)"
        rules={[
          {
            required: true,
            message: 'Please input the title of the micro-job',
          },
        ]}
      >
        <Select
          mode="multiple"
          placeholder="Inserted are removed"
          value={selectedItems}
          onChange={setSelectedItems}
          style={{ width: '100%' }}
        >
          {filteredOptions.map(item => (
            <Select.Option key={item} value={item}>
              {item}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  )
}

export default SelectBadges