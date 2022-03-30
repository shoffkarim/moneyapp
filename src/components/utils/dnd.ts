import { ACCOUNTS, EXPENSES, INCOMES } from "components/constants"
import { dndItem } from "components/interfaces"

export const dndCanDrop = (item: dndItem, id: number, type: string) => {
  if(item.type === type) {
    return false
  } else if(item.type === INCOMES && type === ACCOUNTS) {
    return true
  } else if(item.type === ACCOUNTS && type === EXPENSES) {
    return true
  } else {
    return false
  }
}