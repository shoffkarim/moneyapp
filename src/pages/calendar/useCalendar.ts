import { getYearsInterval } from './utils/getYearsInterval';
import { getMonthNumberOfDays } from './utils/getMonthNumberOfDays';
import { getMonthNumberOfYear } from './utils/getMonthNumberOfYear';
import { getWeekDaysNames } from './utils/getWeekDaysNames';
import { createDate, createMonth, getMonthesNames } from './utils';
import { useMemo, useState } from "react"

export const DAYS_IN_WEEK = 7

interface UseCalendarParams {
  locale?: string
  selectedDate: Date
  firstWeekDay?: number
}

export const useCalendar = ({ locale = 'default', selectedDate: date, firstWeekDay = 2}: UseCalendarParams) => {
  const [mode, setMode] = useState<'days' | 'monthes' | 'years'>('days')
  const [selectedDate, setSelectedDate] = useState(createDate({ date }))
  const [selectedMonth, setSelectedMonth] = useState(createMonth({ locale, date: new Date(selectedDate.year, selectedDate.monthIndex) }))
  const [selectedYear, setSelectedYear] = useState(selectedDate.year)

  const [selectedYearsInterval, setSelectedYearsInterval] = useState(getYearsInterval(selectedDate.year))

  const monthesNames = useMemo(() => getMonthesNames(locale), [locale])
  const weekDaysNames = useMemo(() => getWeekDaysNames(firstWeekDay, locale), [locale, firstWeekDay])

  const days = useMemo(() => selectedMonth.createMonthDays(), [selectedMonth])

  const calendarDays = useMemo(() => {
    const monthNumberOfDays = getMonthNumberOfDays(selectedMonth.monthIndex, selectedYear)

    const prevMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex - 1),
      locale
    }).createMonthDays()

    const nextMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex + 1),
      locale
    }).createMonthDays()

    const firstDay = days[0]
    const lastDay = days[monthNumberOfDays - 1]
    const shiftIndex = firstWeekDay - 1

    const numberOfPrevDays = firstDay.dayNumberInWeek - 1 - shiftIndex < 0
      ? DAYS_IN_WEEK - (firstWeekDay - firstDay.dayNumberInWeek)
      : firstDay.dayNumberInWeek - 1 - shiftIndex

    const numberOfNextDays = DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex > 6
      ? DAYS_IN_WEEK - lastDay.dayNumberInWeek - (DAYS_IN_WEEK - shiftIndex)
      : DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex

    const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays

    const result = []

    for (let i = 0; i < numberOfPrevDays; i += 1) {
      const inverted = numberOfPrevDays - i
      result[i] = prevMonthDays[prevMonthDays.length - inverted]
    }

    for (let i = numberOfPrevDays; i < totalCalendarDays - numberOfNextDays; i += 1) {
      result[i] = days[i - numberOfPrevDays]
    }

    for (let i = totalCalendarDays - numberOfNextDays; i < totalCalendarDays; i += 1) {
      result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays]
    }

    return result

  }, [selectedMonth.year, selectedMonth.monthIndex, selectedYear])

  return {
    state: {
      mode,
      calendarDays,
      weekDaysNames,
      monthesNames,
      selectedDate,
      selectedMonth,
      selectedYear,
      selectedYearsInterval
    },
    functions: {
      setMode,
      setSelectedDate
    }
  }
}