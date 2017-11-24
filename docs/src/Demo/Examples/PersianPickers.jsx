import React, { Component } from 'react';
import moment from 'moment';
import jMoment from 'moment-jalaali';
import { Typography } from 'material-ui';
import { DateTimePicker, DatePicker } from 'material-ui-pickers';

jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true });

export default class BasicUsage extends Component {
  state = {
    selectedDate: moment(),
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  render() {
    const { selectedDate } = this.state;

    return [
      <div key="basic_day" className="picker">
        <Typography type="headline" align="center" gutterBottom>
          Date picker
        </Typography>

        <DatePicker
          okLabel="تأیید"
          cancelLabel="لغو"
          labelFunc={date => jMoment(date).format('jYYYY/jMM/jDD')}
          value={selectedDate}
          onChange={this.handleDateChange}
          animateYearScrolling={false}
        />
      </div>,

      <div key="basic_time" className="picker">
        <Typography type="headline" align="center" gutterBottom>
          DateTime picker
        </Typography>

        <DateTimePicker
          okLabel="تأیید"
          cancelLabel="لغو"
          labelFunc={date => jMoment(date).format('jYYYY/jMM/jDD hh:mm A')}
          value={selectedDate}
          onChange={this.handleDateChange}
        />
      </div>,
    ];
  }
}
