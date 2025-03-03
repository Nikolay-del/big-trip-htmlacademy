import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

const getRandomArrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const formatDateToMonthDay = (date) => dayjs(date).format('MMM D');

const formatDateToTime = (date) => dayjs(date).format('HH:mm');

dayjs.extend(duration);

const formatDurationDifference = (dateFrom, dateTo) => {
  const durationDate = dayjs.duration(dayjs(dateTo).diff(dateFrom));
  const days = durationDate.days();
  const hours = durationDate.hours().toString().padStart(2, '0');
  const minutes = durationDate.minutes().toString().padStart(2, '0');

  return days > 0 ? `${days.toString().padStart(2, '0')}D ${hours}H ${minutes}M` : `${hours}H ${minutes}M`;
};

export { getRandomArrayElement, formatDateToMonthDay, formatDateToTime, formatDurationDifference };
