import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form, Input } from 'antd';
import { NewMJContext } from 'context/NewMJProvider';

const InputCheckPoint = ({ form }) => {
  const { forms, setFieldValue } = useContext(NewMJContext);
  const inputRef = useRef(null);
  const [checkpoints, setcheckpoints] = useState({});

  useEffect(() => {
    const cp = JSON.parse(forms.get('checkpoints'));
    setcheckpoints(cp);
    inputRef.current.focus();
  }, []);

  const handleChange = (e, target) => {
    let newCheckpoint = { ...checkpoints };
    newCheckpoint[target] = e.target.value;
    setcheckpoints(newCheckpoint);
    setFieldValue('checkpoints', JSON.stringify(newCheckpoint));
  };

  return (
    <Form
      form={form}
      layout="horizontal"
      name="form_in_modal"
      initialValues={JSON.parse(forms.get('checkpoints'))}
    >
      <Form.Item name="cp0" label="0%">
        <Input
          ref={inputRef}
          placeholder="Type your response"
          onChange={(value) => handleChange(value, 'cp0')}
        />
      </Form.Item>
      <Form.Item name="cp20" label="20%">
        <Input
          placeholder="Type your response"
          onChange={(value) => handleChange(value, 'cp20')}
        />
      </Form.Item>
      <Form.Item name="cp40" label="40%">
        <Input
          placeholder="Type your response"
          onChange={(value) => handleChange(value, 'cp40')}
        />
      </Form.Item>
      <Form.Item name="cp60" label="60%">
        <Input
          placeholder="Type your response"
          onChange={(value) => handleChange(value, 'cp60')}
        />
      </Form.Item>
      <Form.Item name="cp80" label="80%">
        <Input
          placeholder="Type your response"
          onChange={(value) => handleChange(value, 'cp80')}
        />
      </Form.Item>
      <Form.Item name="cp100" label="100%">
        <Input
          placeholder="Type your response"
          onChange={(value) => handleChange(value, 'cp100')}
        />
      </Form.Item>
    </Form>
  );
};

export default InputCheckPoint;
