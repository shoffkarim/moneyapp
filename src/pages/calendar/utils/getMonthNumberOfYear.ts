export const getMonthNumberOfYear = (monthIndex: number, yearNumber: number = new Date().getFullYear()): number => new Date(yearNumber, monthIndex + 1, 0).getDate()