import React from 'react'
import { useCalendar } from './useCalendar'

interface CalendarProps {
  locale?: string
  selectedDate: Date
  selectDate: (date: Date) => void
  firstWeekDay?: number
}

export const Calendar: React.FC<CalendarProps> = ({ locale = 'default', selectedDate, selectDate, firstWeekDay = 2}) => {
  const { state } = useCalendar({ locale, selectedDate, firstWeekDay })
  console.log(state)
  return (
    <></>
  )
}
