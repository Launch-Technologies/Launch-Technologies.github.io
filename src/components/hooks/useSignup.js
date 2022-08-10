import { useState } from 'react';
import AuthService from 'api/auth';
import { useUser } from 'context/user';
import { isValidEmail } from 'helper';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useInput } from './useInput';

export const useSignup = (emailAcc, validate = false) => {
  // Variable Form Input
  const [fullName, changeFullName] = useInput('');
  const [email, changeEmail] = useInput(emailAcc || '');
  const [password, changePassword] = useInput('');
  const [password2, changePassword2] = useInput('');
  const [errorMsgUplaod, setErrorMsgUplaod] = useState();
  const [checkToc, setCheckToc] = useState(false);
  const authService = new AuthService();
  const userData = useUser();
  const navigate = useNavigate();

  async function onSignup(data, direct_to) {
    console.log('tokenResponse signup', data);
    if (validate) {
      if (!checkToc) {
        setErrorMsgUplaod('You must agree to Joblaunch terms');
        return;
      } else if (!email || email === '') {
        setErrorMsgUplaod("Email can't be empty");
        return;
      } else if (!isValidEmail(email)) {
        setErrorMsgUplaod('Please input a valid email');
        return;
      } else if (!password) {
        setErrorMsgUplaod("Password can't be empty");
        return;
      } else if (password !== password2) {
        setErrorMsgUplaod('Password mismatch');
        return;
      }
    }
    setErrorMsgUplaod(null);
    const token = await authService.register(data);
    if (!_.isEmpty(token)) {
      setErrorMsgUplaod('');
      userData.setUserData(token.user);
      console.log('User has been registered, login to use application', {
        appearance: 'success',
      });
      navigate(direct_to || '/micro-jobs');
    } else {
      setErrorMsgUplaod('Email already registered');
    }
  }
  return {
    onSignup,
    fullName,
    changeFullName,
    email,
    changeEmail,
    password,
    changePassword,
    password2,
    changePassword2,
    errorMsgUplaod,
    setErrorMsgUplaod,
    checkToc,
    setCheckToc,
  };
};
