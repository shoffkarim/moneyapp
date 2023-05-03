import { checkDateIsEqual } from './checkDateIsEqual';

export const checkIsToday = (date: Date): boolean => {
  const today = new Date()

  return checkDateIsEqual(today, date)
}
