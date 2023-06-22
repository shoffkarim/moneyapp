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

  const processedItems = assignItemsWithCards(items, data)

  return (
    <Table stickyHeader aria-label="sticky table">
      <HistoryTableHeader />
      <TableBody>
        <HistoryTransactionElement
          value={100}
          comment="dsafdsf dsafdsf dsafdsfsadfdas dsafdsf asdfasd adsafdsf s dsafdsf"
          index={0}
          tags={[
            {
              tagId: '1',
              name: "bank"
            },
            {
              tagId: '2',
              name: "asdfsadfadsf"
            },
          ]}
          id="142341234"
          date={'10-10-2022'}
          idFrom="1"
          idTo='2'
          typeFrom='incomes'
          typeTo='accounts'
        />
        {/* {processedItems && processedItems.map((item: TransactionItem, index: number) =>
          <HistoryTransactionElement
            key={item.id}
            {...item}
            index={index}
          />
        )} */}
      </TableBody>
    </Table>
  )
}
