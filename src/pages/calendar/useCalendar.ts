import { createDate, createMonth, getMonthesNames } from './utils';
import { useMemo, useState } from "react"

interface UseCalendarParams {
  locale?: string
  selectedDate: Date
}

export const useCalendar = ({ locale = 'default', selectedDate: date}: UseCalendarParams) => {
  const [mode, setMode] = useState<'days' | 'monthes' | 'years'>('days')
  const [selectedDate, setSelectedDate] = useState(createDate({ date }))
  const [selectedMonth, setSelectedMonth] = useState(createMonth({ locale, date: new Date(selectedDate.year, selectedDate.monthIndex) }))
  const [selectedYear, setSelectedYear] = useState(selectedDate.year)

  const monthesNames = useMemo(() => getMonthesNames(locale), [locale])
  console.log(monthesNames)

  return {}
}