import React, { useState } from 'react';
import { Form, Modal } from 'antd';
import { NewForms, title } from 'components/Forms/MJ';
import './Modal.scoped.css'

const NewMicroJobModal = ({ visible, setshowForm }) => {
  const [order, setorder] = useState(1);
  const [form] = Form.useForm();

  const formValidate = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        // onCreate(values);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  }
  console.log("🚀 ~ formValidate", formValidate)

  const onNext = () => {
    return setorder(order + 1);
  }

  const onPrevious = () => {
    return setorder(order - 1);
  }

  const onHideModal = () => {
    return setshowForm(false);
  }

  const onCancel = () => {
    return onHideModal();
  }

  const onFinish = () => {
    setorder(1);
    return setshowForm(false);
  }

  return (
    <Modal
      className='modal_new'
      closable={true}
      visible={visible}
      title={title[order]}
      okText={order === 9 ? "Finish" : "Next"}
      cancelText={order === 1 ? "Close" : "Previous"}
      onCancel={order === 1 ? onCancel : onPrevious}
      onOk={order === 9 ? onFinish : onNext}
      width={500}
    >
      <NewForms order={order} {...{ form }} />
    </Modal>
  )
};

export default NewMicroJobModal