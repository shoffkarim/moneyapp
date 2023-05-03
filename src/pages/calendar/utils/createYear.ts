import { CreateYearReturn } from './types';
import { createMonth } from './createMonth';
import { createDate } from './createDate';
interface CreateYearParams {
  year?: number
  locale?: string
  monthNumber?: number
}

export const createYear = (params?: CreateYearParams): CreateYearReturn => {
  const locale = params?.locale ?? 'default'

  const today = createDate()
  const monthCount = 12

  const year = params?.year ?? today.year
  const monthNumber = params?.monthNumber ?? today.monthNumber

  const month = createMonth({locale, date: new Date(year, monthNumber - 1)})

  const getMonthDays = (monthIndex: number) => createMonth({locale, date: new Date(year, monthIndex)}).createMonthDays()

  const createYearMonthes = () => {
    const monthes = []

    for (let i = 0; i <= monthCount - 1; i+=1) {
      monthes[i] = getMonthDays(i)
    }
    return monthes
  }
  console.log({month,
    year})
  return {
    createYearMonthes,
    month,
    year
  }
}