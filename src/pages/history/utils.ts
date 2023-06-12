import { ACCOUNTS, INCOMES } from 'components/constants'
import { DBCard, DBCardsCollection, TransactionItem } from './types'

export const assignItemsWithCards = (items: Array<TransactionItem>, cards: DBCardsCollection) => {
  return items.map((item: TransactionItem) => {
    const itemsCardFrom = item.typeFrom === INCOMES ? cards?.user.incomes : cards?.user.accounts
    const itemsCardTo = item.typeTo === ACCOUNTS ? cards?.user.accounts : cards?.user.expenses

    const cardFrom = itemsCardFrom?.find((cardsItem: DBCard) => cardsItem.id === item.idFrom)

    const cardTo = itemsCardTo?.find((cardsItem: DBCard) => cardsItem.id === item.idTo)

    return item = {
      ...item,
      cardFrom,
      cardTo
    }
  })
}