import React, { useEffect } from 'react'
import { Alert } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { TransactionAlertWrapperStyled } from "../transaction/transaction.styled"

interface TransactionAlertProps {
  transactionAlert: boolean
  handleAlert: (value: boolean) => void
}

export const TransactionAlert: React.FC<TransactionAlertProps> = ({ transactionAlert, handleAlert }) => {

  useEffect(() => {
    setTimeout(() => {
      handleAlert(false)
    }, 3000)
  }, [transactionAlert])

  return (
    <TransactionAlertWrapperStyled visible={transactionAlert}>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">Transaction has been added</Alert>
    </TransactionAlertWrapperStyled>
  )
}
