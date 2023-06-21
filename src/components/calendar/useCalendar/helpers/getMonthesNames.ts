import { GetMonthesNamesReturn } from '../../types'
import { createDate } from './createDate'

export const getMonthesNames = (locale = 'default'): Array<GetMonthesNamesReturn> => {
  const monthesNames: Array<GetMonthesNamesReturn> = Array.from({ length: 12 })

  const today = new Date()

  monthesNames.forEach((_, i) => {
    const { month, monthIndex, monthShort, date, year } = createDate({
      locale,
      date: new Date(today.getFullYear(), today.getMonth() + i, 1)
    })

    monthesNames[monthIndex] = { month, monthIndex, monthShort, date, year }
  })

  return monthesNames
}