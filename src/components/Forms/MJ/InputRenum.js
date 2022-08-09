import React, { useContext, useEffect, useRef } from 'react';
import { Form, Input } from 'antd';
import { NewMJContext } from 'context/NewMJProvider';

const InputRenum = ({ form }) => {
  const { setFieldValue } = useContext(NewMJContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChangeInput = (e) => {
    setFieldValue('remuneration', e.target.value);
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
        name="remuneration"
        label=""
        rules={[
          {
            required: true,
            message: 'Please input the renumeration of the micro-job',
          },
        ]}
      >
        <Input
          placeholder="Type your response..."
          onChange={onChangeInput}
          ref={inputRef}
        />
      </Form.Item>
    </Form>
  );
};

export default InputRenum;
