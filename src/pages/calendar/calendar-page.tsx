import React, { useState } from 'react'
import { Calendar } from './calendar'
import { CalendarData } from './sampleDataCalendar'
import { CalendarStateReturn } from './types'
import { useQuery } from "@apollo/client"
import { GET_TRANSACTIONS_CALENDAR } from '__data__/queries/transactions'
import { handleData } from './utils/handleData'

export const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const { data } = useQuery(GET_TRANSACTIONS_CALENDAR,
    { variables: {
      id: '647db351529d7960cb8ce476',
      firstDay: '2023-05-10T10:22:13.000Z',
      lastDay: '2023-06-16T10:20:00.356Z'
    } }
  )

  console.log(handleData(data))
  const handleCalendarDate = (state: CalendarStateReturn) => {
    // console.log(state)
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
