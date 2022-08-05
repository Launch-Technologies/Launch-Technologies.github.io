import { useEffect, useState } from 'react';
import { dateToUtc } from 'helper';
import { calculateTimeLeft } from '../common/CountingDown';

export default function useCountDown(end_date) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const [endDate, setEndDate] = useState(end_date);

  useEffect(() => {
    const id = setTimeout(() => {
      if (endDate && endDate !== 'None') setTimeLeft(getTimeDiff());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  function getTimeDiff() {
    if (endDate) {
      const endDateFormat = dateToUtc(endDate);
      const newTimeLeft = calculateTimeLeft(endDateFormat);
      // if (newTimeLeft.days > 0) {
      //   newTimeLeft.hours += newTimeLeft.days * 24;
      //   newTimeLeft.days = 0;
      // }
      newTimeLeft.days = newTimeLeft.days.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      newTimeLeft.hours = newTimeLeft.hours.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      newTimeLeft.minutes = newTimeLeft.minutes.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      newTimeLeft.seconds = newTimeLeft.seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
      });
      return newTimeLeft;
    }
  }

  return [timeLeft, setEndDate];
}
