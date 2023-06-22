import { TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { TableCellValueStyled } from './historyTransaction.styled'

function HistoryTableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
            Date
        </TableCell>
        <TableCell>
            From
        </TableCell>
        <TableCell>
            To
        </TableCell>
        <TableCellValueStyled>
            Value
        </TableCellValueStyled>
        <TableCell>
            Info
        </TableCell>
      </TableRow>
    </TableHead>
  )
}

export default HistoryTableHeader