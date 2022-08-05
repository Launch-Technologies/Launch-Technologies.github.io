/* eslint-disable no-unused-vars */

/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';
import { NOTIFICATION_TYPE } from 'helper';
import { useHistory } from 'react-router-dom';
import NotificationService from '../api/notification';
import { useUser } from './user';

const ModalPopupContext = createContext();

export const NotificationPopupProvider = ({ children }) => {
  const [modalPopup, setModalPopup] = useState(false);
  const [notifData, setNotifData] = useState([]);
  const [shownData, setShownData] = useState({});
  const value = {
    modalPopup,
    setModalPopup,
    notifData,
    setNotifData,
    shownData,
    setShownData,
  };

  return (
    <ModalPopupContext.Provider value={value}>
      {children}
    </ModalPopupContext.Provider>
  );
};

export function useNotificationPopup() {
  const history = useHistory();
  const { userData } = useUser();
  const {
    modalPopup,
    setModalPopup,
    notifData,
    setNotifData,
    shownData,
    setShownData,
  } = useContext(ModalPopupContext);

  const notificationService = new NotificationService();
  const REGISTERED_PAGE = {
    '*': [NOTIFICATION_TYPE.JOINED_GROUP, NOTIFICATION_TYPE.COHORT_REMINDER],
    '/cohort/': [
      NOTIFICATION_TYPE.CONFIRM_AVAILABILITY,
      NOTIFICATION_TYPE.EVENT_REMINDER,
    ],
  };

  useEffect(() => {
    if (notifData && notifData.length) {
      const path = history.location.pathname;
      let matchedNotif = [...REGISTERED_PAGE['*']];
      Object.keys(REGISTERED_PAGE).map((key) => {
        if (path.includes(key))
          matchedNotif = [...matchedNotif, ...REGISTERED_PAGE[key]];
        return key;
      });
      // setIsShown(modalPopup && shownData && shownData.desc && isTheRightPage)
      for (let x of notifData) {
        const notifType = x?.type;
        const isTheRightPage = matchedNotif.includes(notifType);
        if (x.popup_shown === false && isTheRightPage) {
          setShownData(x);
          setModalPopup(true);
        }
      }
    } else {
      // setModalPopup(false);
    }
  }, [notifData, history]);

  async function onRead(notif) {
    let result = await notificationService.readNotification(notif.student_id, {
      popup: true,
      popup_shown: true,
      sn_id: notif.id,
    });
    if (!result || !result.length) setModalPopup(false);
    const popUpNotification = await notificationService.getNotification(
      userData.id,
      {
        popup: true,
        popup_shown: false,
      }
    );

    setNotifData(popUpNotification);
    // const newNotif = notifData.map(nd => {
    //   if(nd.id && result[0] && result[0].id && nd.id === result[0].id) {
    //     nd.popup_shown = true
    //     nd.read = true
    //   }
    //   return nd
    // })
    // setNotifData(newNotif);
  }

  // if (context === undefined) {
  //   throw new Error("useModalPopup must be used within an App");
  // }

  return {
    modalPopup,
    setModalPopup,
    notifData,
    setNotifData,
    shownData,
    setShownData,
    onRead,
  };
}
