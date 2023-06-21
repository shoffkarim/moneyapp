import { Skeleton, Table, TableBody, TableCell } from '@mui/material'
import React from 'react'
import HistoryTableHeader from './history-table-header'
import { HistoryItemCellStyled, HistoryItemCircularSkeletonStyled, HistoryItemStyled } from './history-transaction.styled'

export const HistoryTransactionElementSkeleton = () => {
  return (
    <HistoryItemStyled>
      <TableCell>
        <Skeleton variant='rounded' width={100} height={20}/>
      </TableCell>
      <TableCell>
        <HistoryItemCellStyled>
          <HistoryItemCircularSkeletonStyled variant="circular" width={30} height={30}/>
          <Skeleton variant='rounded' width={80} height={20}/>
        </HistoryItemCellStyled>
      </TableCell>
      <TableCell>
        <HistoryItemCellStyled>
          <HistoryItemCircularSkeletonStyled variant="circular" width={30} height={30}/>
          <Skeleton variant='rounded' width={80} height={20}/>
        </HistoryItemCellStyled>
      </TableCell>
      <TableCell>
        <Skeleton variant='rounded' width={100} height={20}/>
      </TableCell>
      <TableCell>
        <Skeleton variant='rounded' width={100} height={20}/>
      </TableCell>
    </HistoryItemStyled>
  )
}

export const HistoryTransactionSkeleton = () => {
  return (
    <Table stickyHeader aria-label="sticky table">
      <HistoryTableHeader />
      <TableBody>
        <HistoryTransactionElementSkeleton/>
        <HistoryTransactionElementSkeleton/>
        <HistoryTransactionElementSkeleton/>
        <HistoryTransactionElementSkeleton/>
      </TableBody>
    </Table>
  )
}
