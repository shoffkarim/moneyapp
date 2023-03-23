import { TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

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
          <TableCell>
            Value
          </TableCell>
          <TableCell>
            Info
          </TableCell>
        </TableRow>
      </TableHead>
  )
}

export default HistoryTableHeader