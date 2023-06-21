import { Tag } from "types"

export type TransactionItem = {
  index: number
  id: string
  value: number
  idFrom: string
  typeFrom: string
  idTo: string
  typeTo: string
  date: string
  comment: string
  tags: Array<Tag>
  cardFrom?: {
    id: string
    icon: string
    color: string
    name: string
    value: number
  }
  cardTo?: {
    id: string
    icon: string
    color: string
    name: string
    value: number
  }
}

export type DBCard = {
  id: string
  icon: string
  color: string
  name: string
  value: number
}

export type DBUserCards = {
  incomes: Array<DBCard>
  accounts: Array<DBCard>
  expenses: Array<DBCard>
}

export type DBCardsCollection = {
  user: DBUserCards
}