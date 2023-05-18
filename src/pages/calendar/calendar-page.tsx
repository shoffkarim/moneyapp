import React, { useState } from 'react'
import { Calendar } from './calendar'
import { CalendarData } from './sampleDataCalendar'
import { CalendarStateReturn, UseCalendarStateReturn } from './utils/types'

export const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const handleCalendarDate = (state: CalendarStateReturn) => {
    // a
  }
  return (
    <Calendar
      selectedDate={selectedDate}
      selectDate={setSelectedDate}
      data={CalendarData}
      locale="en-US"
      firstWeekDay={2}
      sendParams={handleCalendarDate}
    />
  )
}
