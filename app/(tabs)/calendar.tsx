import { CalendarBody, CalendarContainer, CalendarHeader } from '@howljs/calendar-kit';
import React from 'react';

const Calendar = () => {
  'use no memo'
  return (
    <CalendarContainer>
      <CalendarHeader />
      <CalendarBody />
    </CalendarContainer>
  );
};

export default Calendar;