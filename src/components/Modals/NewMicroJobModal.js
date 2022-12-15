import React, { useContext, useEffect, useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal, message } from 'antd';
import MicroJobService from 'api/micro-job';
import { NewMJContext } from 'context/NewMJProvider';
import { useUser } from 'context/user';
import { NewForms, title } from 'components/Forms/MJ';
import './Modal.scoped.css';

const { confirm } = Modal;

const NewMicroJobModal = ({ visible, setshowForm }) => {
  const { userData } = useUser();
  const {
    resetForm,
    forms,
    setFieldValue,
    selected_badge_skills,
    upload_relevant_files,
  } = useContext(NewMJContext);
  const microjobService = new MicroJobService();
  const [order, setorder] = useState(1);
  const formsCount = Object.keys(title).length + 1;

  useEffect(() => {
    setFieldValue('company_id', userData.id);
  }, []);

  const onNext = () => {
    return setorder(order + 1);
  };

  const onPrevious = (e) => {
    if (['BUTTON', 'SPAN'].includes(e.target.nodeName) && order > 1) {
      return setorder(order - 1);
    }
    return onHideModal();
  };

  const onHideModal = () => {
    setorder(1);
    return setshowForm(false);
  };

  const onCancel = (e) => {
    if (['BUTTON', 'SPAN'].includes(e.target.nodeName)) {
      return onPrevious(e);
    }
    return onHideModal();
  };

  const onFinish = async () => {
    confirm({
      title: 'You are going to post a micro-job..',
      icon: <ExclamationCircleOutlined />,
      className: 'modal_new',
      onOk() {
        const res = microjobService.postMicroJob(forms);
        res.then((e) => {
          if (e.status == 'Ok') {
            selected_badge_skills.map((badge_skill_id) => {
              microjobService.postMicroJobBadgeSkill({
                micro_job_id: e.data.id,
                badge_skill_id,
              });
            });

            upload_relevant_files.map((g) => {
              let fd = new FormData();
              fetch(g.url)
                .then((res) => res.blob())
                .then((blob) => {
                  fd.append('micro_job_id', e.data.id);
                  fd.append('file_path', blob, 'file.jpg');
                  microjobService.postMicroJobFiles(fd);
                });
            });

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
      okText={order === formsCount ? 'Finish' : 'Next'}
      cancelText={order === 1 ? 'Close' : 'Previous'}
      onCancel={order === 1 ? onCancel : onPrevious}
      onOk={order === formsCount ? onFinish : onNext}
      width={500}
    >
      <NewForms order={order} />
    </Modal>
  );
};

export default NewMicroJobModal;
