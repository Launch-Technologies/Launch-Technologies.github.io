import React from 'react';
import { Button as ButtonAntd } from 'antd';
import './Button.scoped.css';

const Button = ({ props }) => {
  return <ButtonAntd className="button_l" {...props}></ButtonAntd>;
};

export default Button;
