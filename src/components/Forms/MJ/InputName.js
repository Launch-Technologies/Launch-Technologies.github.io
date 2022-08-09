import React, { useContext, useEffect, useRef } from 'react';
import { Form, Input } from 'antd';
import { NewMJContext } from 'context/NewMJProvider';

const InputName = ({ form }) => {
  const MJcontext = useContext(NewMJContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChangeInput = (e) => {
    MJcontext.setFieldValue('task_name', e.target.value);
  };

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
        label="required"
        rules={[
          {
            required: true,
            message: 'Please input the title of the micro-job',
          },
        ]}
      >
        <Input
          placeholder="Type yout response..."
          onChange={onChangeInput}
          ref={inputRef}
        />
      </Form.Item>
    </Form>
  );
};

export default InputName;
