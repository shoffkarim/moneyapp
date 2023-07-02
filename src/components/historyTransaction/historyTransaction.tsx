import { Table, TableBody } from '@mui/material'
import React from 'react'
import HistoryTableHeader from './historyTableHeader'
import { HistoryTransactionElement } from './historyTransactionElement'
import { useQuery } from "@apollo/client"
import { GET_USER_CARDS } from "__data__/queries/cards"
import { assignItemsWithCards } from './utils'
import { TransactionItem } from './types'

interface HistoryTransactionProps {
  items: Array<TransactionItem>
}

export const HistoryTransaction: React.FC<HistoryTransactionProps> = ({ items }) => {
  const { data } = useQuery(GET_USER_CARDS,
    { variables: {
      id: '647db351529d7960cb8ce476'
    } })

  const processedItems = assignItemsWithCards(items, data).reverse()

  return (
    <Table stickyHeader aria-label="sticky table">
      <HistoryTableHeader />
      <TableBody>
        {processedItems && processedItems.map((item: TransactionItem, index: number) =>
          <HistoryTransactionElement
            key={item.id}
            {...item}
            index={index}
          />
        )}
      </TableBody>
    </Table>
  )
}
