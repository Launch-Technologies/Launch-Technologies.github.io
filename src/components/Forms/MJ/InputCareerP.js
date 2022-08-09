import React, { useContext, useEffect, useRef } from 'react';
import { Form, Input } from 'antd';
import { NewMJContext } from 'context/NewMJProvider';

const InputCareerP = ({ form }) => {
  const MJcontext = useContext(NewMJContext);

  const inputCareerP = useRef(null);
  useEffect(() => {
    inputCareerP.current.focus();
  }, []);

  const onChangeInput = (e) => {
    MJcontext.setFieldValue('career_prospects', e.target.value);
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
        name="career_prospect"
        label=""
        rules={[
          {
            required: true,
            message: 'Please input the career path of the micro-job',
          },
        ]}
      >
        <Input.TextArea
          rows={6}
          placeholder="Type your response..."
          maxLength={255}
          ref={inputCareerP}
          onChange={onChangeInput}
        />
      </Form.Item>
    </Form>
  );
};

export default InputCareerP;
