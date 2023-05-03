import { Dispatch, SetStateAction } from 'react';

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
