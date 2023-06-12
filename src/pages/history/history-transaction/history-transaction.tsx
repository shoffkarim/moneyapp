import { Table, TableBody } from '@mui/material'
import React from 'react'
import HistoryTableHeader from './history-table-header'
import { HistoryTransactionElement } from './history-transaction-element'
import { useQuery } from "@apollo/client"
import { GET_USER_CARDS } from "__data__/queries/cards"
import { assignItemsWithCards } from '../utils'
import { TransactionItem } from '../types'

interface HistoryTransactionProps {
  items: Array<TransactionItem>
}

export const HistoryTransaction: React.FC<HistoryTransactionProps> = ({ items }) => {
  const { data } = useQuery(GET_USER_CARDS,
    { variables: {
      id: '647db351529d7960cb8ce476'
    } })

  const processedItems = assignItemsWithCards(items, data)

  return (
    <Table stickyHeader aria-label="sticky table">
      <HistoryTableHeader />
      <TableBody>
        {processedItems && processedItems.map((item: TransactionItem) =>
          <HistoryTransactionElement
            key={item.id}
            {...item}
          />
        )}
      </TableBody>
    </Table>
  )
}
