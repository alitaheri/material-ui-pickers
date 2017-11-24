import Moment from 'moment';
import jMoment from 'moment-jalaali';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

function toJMoment(date) {
  return jMoment(date ? date.clone() : undefined).locale('fa');
}

export function getCalendarHeaderText(date) {
  return toJMoment(date).format('jMMMM jYYYY');
}

export function getDatePickerHeaderText(date) {
  return toJMoment(date).format('ddd, jMMM jDD');
}

export function getDateTimePickerHeaderText(date) {
  return toJMoment(date).format('jMMM jDD');
}

export function getDayText(date) {
  return toJMoment(date).format('jD');
}

export function getYearText(date) {
  return toJMoment(date).format('jYYYY');
}

export function getMonthNumber(date) {
  return toJMoment(date).jMonth();
}

export function getStartOfMonth(date) {
  return toJMoment(date).startOf('jMonth');
}

export function getNextMonth(date) {
  return toJMoment(date).add(1, 'jMonth');
}

export function getPreviousMonth(date) {
  return toJMoment(date).subtract(1, 'jMonth');
}

export function getYear(date) {
  return toJMoment(date).jYear();
}

export function setYear(date, year) {
  return toJMoment(date).jYear(year);
}

export function getWeekdays() {
  return [0, 1, 2, 3, 4, 5, 6].map(dayOfWeek => toJMoment().weekday(dayOfWeek).format('dd'));
}

export function getWeekArray(date) {
  const start = toJMoment(date).startOf('jMonth').startOf('week');
  const end = toJMoment(date).endOf('jMonth').endOf('week');

  const weeks = Array.from(moment.range(start, end).by('week'));

  const nestedWeeks = [];

  weeks.forEach((week) => {
    const end = week.clone().endOf('week');
    nestedWeeks.push(Array.from(moment.range(week, end).by('day')));
  });


  return nestedWeeks;
}

export function __getCalendarHeaderText(date) {
  return date.format('MMMM YYYY');
}

export function __getDatePickerHeaderText(date) {
  return date.format('ddd, MMM DD');
}

export function __getDateTimePickerHeaderText(date) {
  return date.format('MMM DD');
}

export function __getDayText(date) {
  return date.format('DD');
}

export function __getYearText(date) {
  return date.format('YYYY');
}

export function __getMonthNumber(date) {
  return date.get('month');
}

export function __getStartOfMonth(date) {
  return date.clone().startOf('month');
}

export function __getNextMonth(date) {
  return date.clone().add(1, 'month');
}

export function __getPreviousMonth(date) {
  return date.clone().subtract(1, 'month');
}

export function __getYear(date) {
  return date.get('year');
}

export function __setYear(date, year) {
  return date.clone().set('year', year);
}

export function __getWeekdays() {
  return [0, 1, 2, 3, 4, 5, 6].map(dayOfWeek => moment().weekday(dayOfWeek).format('dd'));
}

export function __getWeekArray(date) {
  const start = date.clone().startOf('month').startOf('week');
  const end = date.clone().endOf('month').endOf('week');

  const weeks = Array.from(moment.range(start, end).by('week'));

  const nestedWeeks = [];

  weeks.forEach((week) => {
    const end = week.clone().endOf('week');
    nestedWeeks.push(Array.from(moment.range(week, end).by('day')));
  });

  return nestedWeeks;
}
