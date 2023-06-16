import { TransactionItem } from "pages/history/types"
import { formateDate } from "./fortmateDate"

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

export const handleData = (data?: DataType) => {
  if (data) {
    return data.transactions.reduce((acc: any, item: TransactionItem, index: number, arr: Array<TransactionItem>) => {


      if(index === 0) {
        const tempObject: ResultData = {
          date: formateDate( new Date(item.date), 'MM-DD-YYYY' ),
          description: {
            title: 'Total',
            subTitle: item.value
          },
          items: [
            {
              id: item.id,
              title: item.idTo,
              backgroundColor: item.typeTo,
              value: item.value,
            }
          ]
        }
        acc.push(tempObject)
      }

      if(index !== 0 && acc.some((accItem: any) => accItem.date !== formateDate(new Date(item.date), 'MM-DD-YYYY'))) {
        const tempObject: ResultData = {
          date: formateDate( new Date(item.date), 'MM-DD-YYYY' ),
          description: {
            title: 'Total',
            subTitle: item.value
          },
          items: [
            {
              id: item.id,
              title: item.idTo,
              backgroundColor: item.typeTo,
              value: item.value,
            }
          ]
        }
        acc.push(tempObject)
      }


      return acc


    },[])
  }
}