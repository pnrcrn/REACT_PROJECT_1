import React,{useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
 
 function DateSelect() {
     const [selectedDate,setSelectedDate]=useState(null);
   return (
     <div className='dateSelect'>
         <DatePicker
          placeholderText='Select Date'
          selected={selectedDate}
          onChange={date=>setSelectedDate(date)}
          dateFormat='dd/MM/yyyy'
          minDate={new Date()}

         ></DatePicker>
     </div>
   )
 }

 export default DateSelect;
 