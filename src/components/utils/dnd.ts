import { ACCOUNTS, EXPENSES, INCOMES } from "components/constants"
import { dndItem } from "types"

export const dndCanDrop = (item: dndItem, id: number, type: string) => {
  if(item.type === INCOMES && type === ACCOUNTS) {
    return true
  } else if(item.type === ACCOUNTS && type === EXPENSES) {
    return true
  } else if(item.type === ACCOUNTS && type === ACCOUNTS) {
    return true
  } else {
    return false
  }
}