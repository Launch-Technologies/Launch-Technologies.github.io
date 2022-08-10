import React, { createContext, useReducer } from 'react';
import BadgeService from 'api/badge';
import NewMJReducer from './NewMJReducer';

export const NewMJContext = createContext();

const NewMicroJobContext = ({ children }) => {
  const fd = new FormData();
  fd.set(
    'checkpoints',
    '{"cp0":"not yet started","cp100":"Micro-Job Completed"}'
  );
  const initialState = {
    forms: fd,
    skills: [],
    selected_skills: [],
    cover_photo: null,
    remuneration: '',
    expectations: '',
    career_prospects: '',
    checkpoints: '',
    upload_relevant_files: [],
  };

  const [state, dispatch] = useReducer(NewMJReducer, initialState);
  const badgeService = new BadgeService();

  const setFieldValue = (field, value, isFile = false) => {
    dispatch({
      type: 'SET_FIELD_VALUE',
      payload: {
        field: field,
        value: value,
        isFile: isFile,
      },
    });
  };

  const fetchSkills = async () => {
    let response = await badgeService.getSkills();
    dispatch({
      type: 'GET_SKILLS',
      payload: response,
    });
  };

  const resetForm = () => {
    dispatch({
      type: 'RESET_FORM',
    });
  };

  return (
    <NewMJContext.Provider
      value={{
        ...state,
        setFieldValue,
        fetchSkills,
        resetForm,
      }}
    >
      {children}
    </NewMJContext.Provider>
  );
};

export default NewMicroJobContext;
