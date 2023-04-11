import { Table, TableBody } from '@mui/material'
import React from 'react'
import HistoryTableHeader from './history-table-header'
import { HistoryTransactionElement } from './history-transaction-element'

export const HistoryTransaction: React.FC = () => {
  return (
    <Table stickyHeader aria-label="sticky table">
      <HistoryTableHeader />
      <TableBody>
        <HistoryTransactionElement/>
        <HistoryTransactionElement/>
        <HistoryTransactionElement/>
        <HistoryTransactionElement/>
        <HistoryTransactionElement/>
        <HistoryTransactionElement/>
        <HistoryTransactionElement/>
        <HistoryTransactionElement/>
        <HistoryTransactionElement/>
      </TableBody>
    </Table>
  )
}
