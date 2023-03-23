import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { BsBank, BsFillBagCheckFill } from 'react-icons/bs'
import HistoryTableHeader from './history-table-header'
import './history-transaction.sass'

export const HistoryTransaction: React.FC = () => {
  return (
    <Table stickyHeader aria-label="sticky table">
      <HistoryTableHeader />
      <TableBody>
        <TableRow>
          <TableCell>
          <Typography>12-02-2023</Typography>
          </TableCell>
          <TableCell>
            <div className="history-item__cell">
              <div className="history-item__icon">
                <BsBank color="white"/>
              </div>
              <Typography>Tinkoff</Typography>
            </div>
          </TableCell>
          <TableCell>
          <div className="history-item__cell">
              <div className="history-item__icon">
                <BsFillBagCheckFill color="white"/>
              </div>
              <Typography>Purchases</Typography>
            </div>
          </TableCell>
          <TableCell>
          <Typography>2000.00 P</Typography>
          </TableCell>
          <TableCell>
          <Typography>comment</Typography>
          <ul className="history-item__comment-list">
            <li className="history-item__comment-item">
              <Typography fontSize="14px">Business lunch</Typography>
              </li>
            <li className="history-item__comment-item">
              <Typography fontSize="14px">Bank</Typography>
            </li>
            <li className="history-item__comment-item">
              <Typography fontSize="14px">Coffee</Typography>
            </li>
          </ul>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
