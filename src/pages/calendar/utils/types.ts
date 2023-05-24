import { Dispatch, SetStateAction } from 'react';

interface CalendarDataDayType {
  date: Date,
  description: {
    title: string
    subTitle: string
  },
  items: Array<CalendarDataDayItemsType>
}

interface CalendarDataDaySubItemsType {
  title: string
  value: string
}

interface CalendarDataDayItemsType {
  id: string
  title: string
  backgroundColor: string
  value: string
  subItems: Array<CalendarDataDaySubItemsType>
}

export interface CalendarDataType {
  days: Array<CalendarDataDayType>
}


export type CreateDateReturn = {
  date: Date
  day: string
  dayNumber: number
  dayNumberInWeek: number
  dayShort: string
  month: string
  monthIndex: number
  monthNumber: number
  monthShort: string
  timestamp: number
  week: number
  year: number
  yearShort: string
  description?: {
    title: string
    subTitle: string
  },
  items?: Array<CalendarDataDayItemsType>
}

export type CreateMonthReturn = {
  createMonthDays: () => Array<CreateDateReturn>
  getDay: (dayNumber: number) => CreateDateReturn
  monthIndex: number
  monthName: string
  monthNumber: number
  year: number
}

export type CreateYearReturn = {
  month: CreateMonthReturn
  year: number
  createYearMonthes: () => Array<Array<CreateDateReturn>>
}

export type GetMonthesNamesReturn = {
  date: Date
  month: string
  monthIndex: number
  monthShort: string
  year: number
}

export type WeekDaysNamesReturn = {
  day: string
  dayShort: string
}

export type UseCalendarStateReturn = {
  mode: string
  calendarDays: Array<CreateDateReturn>
  weekDaysNames: Array<WeekDaysNamesReturn>
  monthesNames: Array<GetMonthesNamesReturn>
  selectedDate: CreateDateReturn
  selectedMonth: CreateMonthReturn
  selectedYear: number
  selectedYearsInterval: Array<number>
}

export type UseCalendarFuncsReturn = {
  setMode: Dispatch<SetStateAction<"days" | "monthes" | "years">>
  setSelectedDate: Dispatch<SetStateAction<CreateDateReturn>>
  setSelectedMonthByIndex: (monthIndex: number) => void
  setSelectedYear: (year: number) => void
  onClickArrow: (direction: 'right' | 'left') => void
}

export type UseCalendarReturn = {
  state: UseCalendarStateReturn
  functions: UseCalendarFuncsReturn
}

export type CalendarStateDaysReturn = {
  mode: string
  firstDay: Date
  lastDay: Date
  monthIndex: number
  monthName: string
  year: number
}

export type CalendarStateMonthesReturn = {
  mode: string
  firstMonthIndex: number
  firstMonthName: string
  lastMonthIndex: number
  lastMonthName: string
  year: number
}

export type CalendarStateYearsReturn = {
  mode: string
  firstYear: number
  lastYear: number
  year: number
}

export type CalendarStateReturn = CalendarStateDaysReturn | CalendarStateMonthesReturn | CalendarStateYearsReturn