export const checkDateIsEqual = (date1: Date, date2: Date): boolean => {

  const handledDate1 = new Date(date1)
  const handledDate2 = new Date(date2)


  return handledDate1?.getFullYear() === handledDate2?.getFullYear() &&
  handledDate1?.getMonth() === handledDate2?.getMonth() &&
  handledDate1?.getDate() === handledDate2?.getDate()
}
