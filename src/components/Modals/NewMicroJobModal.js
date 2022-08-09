import React, { useContext, useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Form, Modal, message } from 'antd';
import MicroJobService from 'api/micro-job';
import { NewMJContext } from 'context/NewMJProvider';
import { NewForms, title } from 'components/Forms/MJ';
import './Modal.scoped.css';

const { confirm } = Modal;

const NewMicroJobModal = ({ visible, setshowForm }) => {
  const { resetForm, forms } = useContext(NewMJContext);
  const microjobService = new MicroJobService();
  const [order, setorder] = useState(1);
  const [form] = Form.useForm();

  const onNext = () => {
    return setorder(order + 1);
  };

  const onPrevious = () => {
    return setorder(order - 1);
  };

  const onHideModal = () => {
    return setshowForm(false);
  };

  const onCancel = () => {
    return onHideModal();
  };

  const onFinish = async () => {
    confirm({
      title: 'You are going to post a micro-job..',
      icon: <ExclamationCircleOutlined />,
      className: 'modal_new',
      onOk() {
        const res = microjobService.postMicroJob([forms]);
        res.then((e) => {
          if (e.status == 'Ok') {
            setorder(1);
            setshowForm(false);
            resetForm();
            message.success('micro-job successfully created!', 3);
          } else {
            message.error(
              'something went wrong when trying to post micro-job',
              3
            );
          }
        });
      },
      onCancel() {},
    });
  };

  return (
    <Modal
      className="modal_new"
      closable={true}
      visible={visible}
      title={title[order]}
      okText={order === 9 ? 'Finish' : 'Next'}
      cancelText={order === 1 ? 'Close' : 'Previous'}
      onCancel={order === 1 ? onCancel : onPrevious}
      onOk={order === 9 ? onFinish : onNext}
      width={500}
    >
      <NewForms order={order} {...{ form }} />
    </Modal>
  );
};

export default NewMicroJobModal;
