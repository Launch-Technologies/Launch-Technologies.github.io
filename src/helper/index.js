import _ from "lodash";

export function isObjectEmpty(object) {
  return _.isEmpty(object) || object === 'None'
}

export function isFalsePy(object) {
  return !object || object === 'None' || object === 'False' || object === 'undefined' || object === false
}

export const isValidEmail = (email) => {
  const pattern = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/
  return email.match(pattern)
}

export const EVENT_TYPE = {
  "weekly_group_meeting": 1,
  "weekly_random_meeting": 2,
  "wide_cohort_meeting": 3
}

export const NOTIFICATION_TYPE = {
  CONFIRM_AVAILABILITY: "Confirm availabilities",
  JOINED_GROUP: "New Group Member",
  NEW_COHORT_VIDEO_POSTED: "New Cohort Video Posted",
  MODULE_COMPLETE: "Module Complete",
  REMINDER_TO_COMPLETE_BIO: "Reminder to complete bio",
  EVENT_REMINDER: "Event reminder",
  FIVE_MINUTE_EVENT: "Reminder 5 minutes left to event",
  COHORT_REMINDER: "Cohort Reminder"
}

export const EmitEventType = {
  MESSAGE: "message",
  NOTIFICATION: "notification",
  LESSON_COMPLETE: "lesson-complete",
  UPDATE_STUDENT_PROFILE: "update-student-profile",
  NEW_BIO_MESSAGE: "new-bio-message",
  NEW_GROUP_MEMBER: "new-group-member",
  NEW_CHAT_MESSAGE: "new-chat-message"
}

export const ListenEventType = {
  REQUEST_NOTIFICATION: "request-notification",
  JOIN: "join",
  LEAVE: "leave",
  SEND_CHAT: "send-chat"
}

/**
 * 
 * @param {*} date (string)
 * @returns return date in UTC date
 */
export const dateToUtc = (date) => {
  try {
    const datetime = date.split(" ");
    const [year, month, day] = datetime[0].split("-");
    const [hour, minute, second] = datetime[1].split(":");
    return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second)));
  } catch(err) {
    console.error('failed to parse date')
    return ''
  }
}

export const makeUrl = (url='') => {
  const httpsLink = 'https://'
  const httpLink = 'http://'
  if(!url.includes(httpsLink) && !url.includes(httpLink)) {
    url = httpsLink + url
  }
  return url
}

export const medalOrder = ["bronze", "silver", "gold", "diamond"];

export function createFormData(form) {
  const formData = new FormData();
  for(let [key,val] of Object.entries(form)) {
    formData.append(key, val);
  }
  return formData
}

export function isTrue(value) {
  return value === true || value === 'True'
}

export function isFalse(value) {
  return value === false || value === 'False'
}

/**
 * 
 * @param {*} date 
 * @returns change UTC date to client local timezone
 */
export const formatDate = (date) => {
  let result = ''
  if(date) {
    const utcDate = dateToUtc(date)
    const dateTime = utcDate.getTime() - new Date().getTimezoneOffset()
    result = new Date(dateTime).toLocaleTimeString();
  }
  return result
}

export const formatDateTime = (date) => {
  let result = ''
  if(date) {
    const utcDate = dateToUtc(date)
    const dateTime = utcDate.getTime() - new Date().getTimezoneOffset()
    result = new Date(dateTime).toLocaleString();
  }
  return result
}

export function copyToClipboard(elementId) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(elementId).getAttribute('link'));
  document.body.appendChild(aux);  
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

export const getDateInfo = (date) => {
  const utcDate = dateToUtc(date)
  const dateTime = utcDate.getTime() - new Date().getTimezoneOffset()
  let t = new Date(dateTime);
  let ampm = t.toLocaleString('en-US', {hour12: true}).split(' ')[2]
  let zone = t.toLocaleTimeString('en-US', {timeZoneName:'short'}).split(' ')[2]
  return [t, ampm, zone]
}

export const toLocaleFormat = (date) => {
  let result = '-'
  try {
    if(date) {
      const [t, ampm, zone] = getDateInfo(date)
      let hours = t.getHours()
      let minutes = t.getMinutes()
      if(`${hours}`.length === 1) hours = `0${hours}`
      if(`${minutes}`.length === 1) minutes =`0${minutes}`
      result = `${hours}:${minutes} ${ampm} (${zone}), ${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`
    }
  } catch(err) {
    console.error(err)
  }
  return result
}