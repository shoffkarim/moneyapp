import React from 'react'
import { useCalendar } from './useCalendar'

interface CalendarProps {
  locale?: string
  selectedDate: Date
  selectDate: (date: Date) => void
}

export const Calendar: React.FC<CalendarProps> = ({ locale = 'default', selectedDate, selectDate }) => {
  const {} = useCalendar({ locale, selectedDate })
  return (
    <></>
  )
}
