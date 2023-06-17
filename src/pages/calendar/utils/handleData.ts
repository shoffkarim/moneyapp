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

    const groupedData: any = {}

    for (const item of data.transactions) {
      const date: any = formateDate(new Date(item.date), 'MM-DD-YYYY')
      if(date in groupedData) {
        groupedData[date].push(item)
      } else {
        groupedData[date] = [item]
      }

    }
    return Object.values(groupedData)



  
  }
}