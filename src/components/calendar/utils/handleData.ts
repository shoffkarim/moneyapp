import { DBCard, DBCardsCollection, TransactionItem } from "components/historyTransaction/types"
import { formateDate } from "./fortmateDate"
import { ACCOUNTS } from "components/constants"

type DataType = {
  transactions: Array<TransactionItem>
}

type ResultData = {
  date: string
  description: {
    title: string
    subTitle: number
  }
  items: Array<{
    id: string
    title: string
    backgroundColor: string
    value: number
  }>
}
// Array<ResultData>

const getCard = (id: string, type: string,  cards: DBCardsCollection) => {
  const itemsCardTo = type === ACCOUNTS ? cards?.user.accounts : cards?.user.expenses

  const cardTo = itemsCardTo.find((cardsItem: DBCard) => cardsItem.id === id)

  return cardTo
}

export const handleData = (cards: DBCardsCollection, data?: DataType, ) => {
  if (data && cards) {

    const groupedData: any = {}

    for (const item of data.transactions) {
      const date: any = formateDate(new Date(item.date), 'MM-DD-YYYY')
      if(date in groupedData) {
        groupedData[date].push(item)
      } else {
        groupedData[date] = [item]
      }
    }
    const arrayOfGroups = Object.values(groupedData)

    const newArr = arrayOfGroups.map((array: any) => {
      const counted = array.reduce((acc: any, item: any) => {
        const returnObject = {
          ...acc,
          date: new Date(item.date),
          description: {
            title: 'Total',
            subTitle: Number(acc.description?.subTitle || 0) + Number(item.value),
          },
        }

        return returnObject
      },{})

      return counted
    })

    const newData = arrayOfGroups.map((array: any) => {
      return array.map((item: any) => {
        const card = getCard(item.idTo, item.typeTo, cards)
        return {
          id: item.id,
          title: card?.name,
          backgroundColor: card?.color,
          value: item.value
        }
      })
    })

    const handled = newArr.map((obj: any, index: number) => {
      return {
        ...obj,
        items: newData[index]
      }
    })

    return handled
  }
}