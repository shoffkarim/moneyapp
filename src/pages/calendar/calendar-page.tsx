import React, { useState } from 'react'
import { Calendar } from './calendar'

export const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  return (
    <Calendar selectedDate={selectedDate} selectDate={setSelectedDate} locale="en-US"/>
  )
}
