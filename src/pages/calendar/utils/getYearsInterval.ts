export const getYearsInterval = (year: number): Array<number> => {
  const startYear = Math.floor(year / 10) * 10
  return [...Array(10)].map((_, i) => startYear + i)
}