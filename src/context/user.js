/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';
import _ from 'lodash';
import StudentService from '../api/student';
import { getToken } from '../auth';

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(getToken() ? getToken().user : {});
  const value = { userData, setUserData };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export function useUser() {
  const userService = new StudentService();
  const context = useContext(userContext);
  useEffect(() => {
    // getUserData();
    // userService.getStudents({ populate: 'student_cohort' });
  }, []);

  async function getUserData() {
    // Update user data with the most recent data rather than the most recent login data.
    let userData = context.userData;
    if (!_.isEmpty(userData)) {
      let newUserData = await userService.getById(userData.id);
      newUserData = newUserData.data;
      window.heap.identify(newUserData.id);
      window.heap.addUserProperties({
        Email: newUserData.email,
        City: newUserData.city,
      });
      context.setUserData(newUserData);
    }
  }

  if (context === undefined) {
    throw new Error('useUser must be used within a useAdmin');
  }
  return { ...context, getUserData };
}
