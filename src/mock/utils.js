import dayjs from 'dayjs';
import {getRandomInteger} from '../utils';
import {Duration} from './const';

let date = dayjs().subtract(getRandomInteger(0, Duration.DAY), 'day').toDate();

const getRandomDate = ({next}) => {
  const daysGap = getRandomInteger(0, Duration.DAY);
  const hoursGap = getRandomInteger(1, Duration.HOUR);
  const minsGap = getRandomInteger(0, Duration.MIN);

  if (next) {
    date = dayjs(date)
      .add(daysGap, 'days')
      .add(hoursGap, 'hours')
      .add(minsGap, 'minutes');
  }

  return date;
};

export {getRandomDate};
