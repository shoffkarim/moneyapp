import React, { useState } from 'react'
import { Calendar } from './calendar'
import { formateDate } from './utils'

export const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  console.log(formateDate(selectedDate, 'YYYY/MM/DD'))
  return (
    <Calendar selectedDate={selectedDate} selectDate={setSelectedDate}/>
  )
}
