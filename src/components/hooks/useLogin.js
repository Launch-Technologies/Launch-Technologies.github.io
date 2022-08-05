import { useState } from 'react';
import AuthService from 'api/auth';
import { useUser } from 'context/user';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useInput } from './useInput';

export const useLogin = () => {
  const [errorMsg, setErrMsg] = useState();
  const [email, changeEmail] = useInput('');
  const [password, changePassword] = useInput('');
  const authService = new AuthService();
  const userState = useUser();
  const navigate = useNavigate();

  const clearForm = () => {
    changeEmail('');
    changePassword('');
  };

  async function onLogin(data) {
    const token = await authService.login(data);
    if (!_.isEmpty(token) && token.hasOwnProperty('access_token')) {
      setErrMsg('');
      console.log('Login Success', {
        appearance: 'success',
      });
      clearForm();
      userState.setUserData(token.user);
      navigate('/dashboard');
      return true;
    } else {
      setErrMsg('Not Authorized');
      console.log('Please type in correct email/password', {
        appearance: 'warning',
      });
      return false;
    }
  }

  return {
    errorMsg,
    setErrMsg,
    onLogin,
    email,
    password,
    changeEmail,
    changePassword,
  };
};
