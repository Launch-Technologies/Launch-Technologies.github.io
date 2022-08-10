import React, { useContext, useEffect, useRef } from 'react';
import { Form, Input } from 'antd';
import { NewMJContext } from 'context/NewMJProvider';

const InputRenum = () => {
  const { forms, setFieldValue } = useContext(NewMJContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChangeInput = (e) => {
    setFieldValue('remuneration', e.target.value);
  };

  return (
    <Form
      layout="vertical"
      name="form_in_modal"
      initialValues={{
        remuneration: forms.get('remuneration'),
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
