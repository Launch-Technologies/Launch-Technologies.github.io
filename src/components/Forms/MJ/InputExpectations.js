import React, { useContext, useEffect, useRef } from 'react';
import { Form, Input } from 'antd';
import { NewMJContext } from 'context/NewMJProvider';

const InputExpectations = () => {
  const { forms, setFieldValue } = useContext(NewMJContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChangeInput = (e) => {
    setFieldValue('expectations', e.target.value);
  };

  return (
    <Form
      layout="vertical"
      name="form_in_modal"
      initialValues={{
        expectations: forms.get('expectations'),
      }}
    >
      <Form.Item
        name="expectations"
        label=""
        rules={[
          {
            required: true,
            message: 'Please input the expectation of the micro-job',
          },
        ]}
      >
        <Input.TextArea
          rows={6}
          placeholder="Type your response..."
          maxLength={255}
          onChange={onChangeInput}
          ref={inputRef}
        />
      </Form.Item>
    </Form>
  );
};

export default InputExpectations;
