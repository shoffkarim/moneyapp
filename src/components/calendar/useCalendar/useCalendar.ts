import { useMemo, useState } from "react"
import { UseCalendarReturn } from '../types'
import { createDate, createMonth, getMonthesNames, getWeekDaysNames, getMonthNumberOfDays, getYearsInterval } from './helpers'

export const DAYS_IN_WEEK = 7

interface UseCalendarParams {
  locale?: string
  // selectedDate: Date
  firstWeekDay?: number
}


export const useCalendar = ({ locale = 'default', firstWeekDay = 2 }: UseCalendarParams): UseCalendarReturn => {
  const today = new Date()
  const [mode, setMode] = useState<'days' | 'monthes' | 'years'>('days')
  const [selectedDate, setSelectedDate] = useState(createDate({ date: today }))
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

  }, [selectedMonth.monthIndex, selectedYear, locale, days, firstWeekDay])

  const onClickArrow = (direction: 'right' | 'left') => {
    if(mode === 'days') {
      const monthIndex = direction === 'left' ? selectedMonth.monthIndex - 1 : selectedMonth.monthIndex + 1


      if(monthIndex === -1) {
        const year = selectedYear - 1
        setSelectedYear(year)
        if(!selectedYearsInterval.includes(year)) {
          setSelectedYearsInterval(getYearsInterval(year))
        }
        return setSelectedMonth(createMonth({ date: new Date(year, 11), locale }))
      }

      if(monthIndex === 12) {
        const year = selectedYear + 1
        setSelectedYear(year)
        if(!selectedYearsInterval.includes(year)) {
          setSelectedYearsInterval(getYearsInterval(year))
        }
        return setSelectedMonth(createMonth({ date: new Date(year, 0), locale }))
      }

      setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex), locale }))
    }

    if(mode === 'monthes' && direction === 'left') {
      const year = selectedYear - 1
      setSelectedYear(year)
      if(!selectedYearsInterval.includes(year)) {
        setSelectedYearsInterval(getYearsInterval(year))
      }
      return setSelectedYear(year)
    }

    if(mode === 'monthes' && direction === 'right') {
      const year = selectedYear + 1
      setSelectedYear(year)
      if(!selectedYearsInterval.includes(year)) {
        setSelectedYearsInterval(getYearsInterval(year))
      }
      return setSelectedYear(year)
    }

    if(mode === 'years' && direction === 'left') {
      return setSelectedYearsInterval(getYearsInterval(selectedYearsInterval[0] - 10))
    }

    if(mode === 'years' && direction === 'right') {
      return setSelectedYearsInterval(getYearsInterval(selectedYearsInterval[0] + 10))
    }
  }


  const setSelectedMonthByIndex = (monthIndex: number) => {
    setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex), locale }))
  }

  const backToToday = () => {
    const today = createDate({ date: new Date() })
    setSelectedYear(today.year)
    if(!selectedYearsInterval.includes(today.year)) {
      setSelectedYearsInterval(getYearsInterval(today.year))
    }
    setSelectedMonth(createMonth({ date: new Date(today.year, today.monthIndex), locale }))
    setMode('days')
  }

  return {
    state: {
      mode,
      calendarDays,
      weekDaysNames,
      monthesNames,
      selectedDate,
      selectedMonth,
      selectedYear,
      selectedYearsInterval,
    },
    functions: {
      setMode,
      setSelectedDate,
      setSelectedMonthByIndex,
      setSelectedYear,
      onClickArrow,
      backToToday
    }
  }
}