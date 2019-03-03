import { Calendar, DatePicker } from 'antd';
import moment from 'moment';
import React from 'react';

const CalendarRange = () => {
  const handleOnSelect = (val) => {
    console.log(val);
  }
  return (
    <div className="calendar-range">
      <h5 className="text-black"><strong>Date range</strong></h5>
      <DatePicker.RangePicker
        ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
      />
      <h5 className="text-black mt-40"><strong>Working days calendar</strong></h5>
      <Calendar disabled fullscreen={false} onSelect={handleOnSelect} />
    </div>
  );
}

export default CalendarRange;