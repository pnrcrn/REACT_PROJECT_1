import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateSelect({date,setDate}) {
    return (
      <div className='dateSelect'>
      <DatePicker
          placeholderText='Tarih Seç'
          selected={date}
          onChange={datee => setDate(datee)}
          dateFormat='dd/MM/yyyy'
          minDate={new Date()}

      ></DatePicker>
  </div>
    );
  };
  export default DateSelect;

