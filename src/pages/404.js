import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const backHomeButton = () => {
    return (
      <Link to="/">
        <Button type="primary">Back Home</Button>
      </Link>
    );
  };
  return (
    <Result
      style={{ marginTop: '10%' }}
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={backHomeButton()}
    />
  );
};

export default NotFound;
