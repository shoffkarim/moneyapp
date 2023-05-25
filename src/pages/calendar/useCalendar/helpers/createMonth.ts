import { CreateMonthReturn } from '../../types'
import { getMonthNumberOfYear } from './getMonthNumberOfYear'
import { createDate } from './createDate'
interface CreateMonthParams {
  locale?: string
  date?: Date
}

export const createMonth = (params?: CreateMonthParams): CreateMonthReturn => {
  const locale = params?.locale ?? 'default'

  const date = params?.date ?? new Date()

  const createdDate = createDate({ locale, date })

  const { month: monthName, year, monthNumber, monthIndex } = createdDate

  const getDay = (dayNumber: number) => createDate({ locale, date: new Date(year, monthIndex, dayNumber) })

  const createMonthDays = () => {
    const days = []

    for (let i = 0; i <= getMonthNumberOfYear(monthIndex, year) - 1; i+=1) {
      days[i] = getDay(i + 1)
    }
    return days
  }

  return {
    getDay,
    monthName,
    monthIndex,
    monthNumber,
    year,
    createMonthDays
  }
}