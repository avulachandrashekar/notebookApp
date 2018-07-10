import React from 'react';
import DatePicker from 'react-datepicker';

export  const DatePickerComponent = (props) => {
        return (
            <DatePicker selected={props.startDate} onChange={props.onDateChange}/>
        )
}