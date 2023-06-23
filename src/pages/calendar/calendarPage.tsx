import React, { useState } from 'react'
import { useCalendar } from '../../components/calendar/useCalendar'

import { CalendarWrapper } from './calendarWrapper'

export const CalendarPage: React.FC = () => {

  const [selectedDate, setSelectedDate] = useState(new Date())

  const { state, functions } = useCalendar({ locale: "en-US", selectedDate, firstWeekDay: 2 })

  return (
    <CalendarWrapper
      state={state}
      functions={functions}
      selectDate={setSelectedDate}
    />
  )
}
