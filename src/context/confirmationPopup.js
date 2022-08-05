/* eslint-disable no-unused-vars */

/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';

const ConfirmationPopupContext = createContext();

export const ConfirmationPopupProvider = ({ children }) => {
  const [modalPopup, setModalPopup] = useState(false);
  const [text, setText] = useState([]);
  const [content, setContent] = useState();
  const [saveColor, setSaveColor] = useState();
  const [handleClose, setHandleClose] = useState(() => {});
  const [handleSave, setHandleSave] = useState(() => {});

  const value = {
    modalPopup,
    setModalPopup,
    text,
    setText,
    handleClose,
    setHandleClose,
    handleSave,
    setHandleSave,
    content,
    setContent,
    saveColor,
    setSaveColor,
  };

  return (
    <ConfirmationPopupContext.Provider value={value}>
      {children}
    </ConfirmationPopupContext.Provider>
  );
};

export function useConfirmationPopup() {
  const {
    modalPopup,
    setModalPopup,
    text,
    setText,
    handleClose,
    setHandleClose,
    handleSave,
    setHandleSave,
    content,
    setContent,
    saveColor,
    setSaveColor,
  } = useContext(ConfirmationPopupContext);

  return {
    modalPopup,
    setModalPopup,
    text,
    setText,
    handleClose,
    setHandleClose,
    handleSave,
    setHandleSave,
    content,
    setContent,
    saveColor,
    setSaveColor,
  };
}
