import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form, Select } from 'antd';
import { NewMJContext } from 'context/NewMJProvider';

const SelectBadges = ({ form }) => {
  const MJcontext = useContext(NewMJContext);
  const [options, setoptions] = useState(MJcontext.skills);
  // const [selectedItems, setSelectedItems] = useState(MJcontext.selected_skills);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChangeInput = (e) => {
    MJcontext.setSelectedSkill('selected_skills', e);
  };

  useEffect(() => {
    MJcontext.fetchSkills();
    setoptions(MJcontext.skills);
  }, [MJcontext.skills]);

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
        label=""
        rules={[
          {
            required: true,
            message: 'Please input the title of the micro-job',
          },
        ]}
      >
        <Select
          mode="multiple"
          placeholder="Select badges.."
          // value={selectedItems}
          onChange={onChangeInput}
          style={{ width: '100%' }}
          ref={inputRef}
        >
          {options.map((item) => (
            <Select.Option key={item.id} value={item.id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default SelectBadges;
