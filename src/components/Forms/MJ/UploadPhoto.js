import React, { useContext, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Upload, message } from 'antd';
import { NewMJContext } from 'context/NewMJProvider';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const fileIsValid = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }

  return isJpgOrPng && isLt2M;
};

const UploadPhoto = () => {
  const { cover_photo, setFieldValue } = useContext(NewMJContext);
  const [imageUrl, setImageUrl] = useState(cover_photo);

  const onChangeInput = (url) => {
    setFieldValue('cover_photo', url, true);
  };

  const handleChange = (info) => {
    getBase64(info.file.originFileObj, (url) => {
      if (!info.fileList.length > 0) {
        setImageUrl(null);
        onChangeInput(null);
        return;
      } else {
        if (fileIsValid(info.file)) {
          setImageUrl(url);
          onChangeInput(url);
        }
      }
    });
    // }
  };

  const onRemovePhoto = () => {
    setImageUrl(null);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <Upload
      name="cover_photo"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={true}
      multiple={false}
      onChange={handleChange}
      onRemove={onRemovePhoto}
      defaultFileList={imageUrl ? [{ url: imageUrl }] : []}
    >
      {imageUrl == null ? uploadButton : null}
    </Upload>
  );
};

export default UploadPhoto;
