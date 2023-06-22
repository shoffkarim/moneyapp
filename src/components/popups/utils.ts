import { ACCOUNTS, EXPENSES, INCOMES } from './../constants'
export type SetCard = {
  name: string
  icon: string
  color: string
  value: string
}

export type PopupFormElementName = "name" | "value" | "icon" | "color"

export const getPopupTitle = (popupType: string, type: string) => {
  if(popupType === "create") {
    switch (type) {
    case INCOMES:
      return "Create income"
    case ACCOUNTS:
      return "Create account"
    case EXPENSES:
      return "Create expense"
    default:
      return ''
    }
  }
}