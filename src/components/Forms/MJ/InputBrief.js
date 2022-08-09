import React, { useContext, useEffect, useRef } from 'react';
import { Form, Input } from 'antd';
import { NewMJContext } from 'context/NewMJProvider';

const InputBrief = ({ form }) => {
  const MJcontext = useContext(NewMJContext);
  const inputBrief = useRef(null);
  useEffect(() => {
    inputBrief.current.focus();
  }, []);

  const onChangeInput = (e) => {
    MJcontext.setFieldValue('brief', e.target.value);
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
        name="brief"
        label=""
        rules={[
          {
            required: true,
            message: 'Please input the title of the micro-job',
          },
        ]}
      >
        <Input.TextArea
          rows={6}
          placeholder="Type your response..."
          maxLength={255}
          onChange={onChangeInput}
          ref={inputBrief}
        />
      </Form.Item>
    </Form>
  );
};

export default InputBrief;
