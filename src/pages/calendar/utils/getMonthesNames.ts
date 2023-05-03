import { createDate } from './createDate';

export const getMonthesNames = (locale: string = 'default') => {
  const monthesNames: {
    month: ReturnType<typeof createDate>['month']
    monthShort: ReturnType<typeof createDate>['monthShort']
    monthIndex: ReturnType<typeof createDate>['monthIndex']
    date: ReturnType<typeof createDate>['date']
    year: ReturnType<typeof createDate>['year']
  }[] = Array.from({length: 12})

  const today = new Date()

  monthesNames.forEach((_, i) => {
    const { month, monthIndex, monthShort, date, year} = createDate({
      locale,
      date: new Date(today.getFullYear(), today.getMonth() + i, 1)
    })

    monthesNames[monthIndex] = { month, monthIndex, monthShort, date, year }
  })

  return monthesNames
}