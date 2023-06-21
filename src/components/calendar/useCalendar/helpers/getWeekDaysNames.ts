import { WeekDaysNamesReturn } from '../../types'
import { createDate } from './createDate'

export const getWeekDaysNames = ( firstWeekDay = 1, locale = 'default' ): Array<WeekDaysNamesReturn> => {
  const weekDaysNames: Array<WeekDaysNamesReturn> = Array.from({ length: 7 })

  const today = new Date()

  weekDaysNames.forEach((_, i) => {
    const { day, dayNumberInWeek, dayShort } = createDate({
      locale,
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + i)
    })

    weekDaysNames[dayNumberInWeek - 1] = { day, dayShort }
  })

  return [...weekDaysNames.slice(firstWeekDay - 1), ...weekDaysNames.slice(0, firstWeekDay - 1)]
}