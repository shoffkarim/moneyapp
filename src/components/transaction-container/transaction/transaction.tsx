import React from 'react'
import { Cards } from "./cards"
import { Comment } from "./comment"
import { TransactionDate } from "./transaction-date"
import { Tags } from "./tags"
import { Value } from "./value"
import { TransactionContainerStyled, TransactionOverlayStyled, TransactionStyled, CloseButtonStyled } from "./transaction.styled"
import { Button } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TransactionValues } from './utils'
import { useMutation } from '@apollo/client'
import { SET_TRANSACTION } from '__data__/mutations/transactions'
import CloseIcon from '@mui/icons-material/Close'


interface TransactionProps {
  handleTransactionOpen: (value: boolean) => void
}

export const Transaction: React.FC<TransactionProps> = ({ handleTransactionOpen }) => {

  const { control, handleSubmit, formState: { errors } } = useForm<TransactionValues>()

  const [setTransaction] = useMutation(SET_TRANSACTION)

  const handleOnSubmit: SubmitHandler<TransactionValues> = (data) => {
    setTransaction({ variables:
      {
        id: '647db351529d7960cb8ce476',
        idFrom: '647db3d9529d7960cb8ce484',
        idTo: '647db3ee529d7960cb8ce488',
        value: Number(data.value),
        comment: data.comment,
        date: new Date(),
        tags: [ { tagId: '1', name: 'food' } ]
      }
    })
    console.log(data, errors)
  }

  return (
    <TransactionStyled>
      <TransactionOverlayStyled/>
      <TransactionContainerStyled>
        <CloseButtonStyled aria-label="close" onClick={() => handleTransactionOpen(false)}>
          <CloseIcon htmlColor="#fff" fontSize='large' />
        </CloseButtonStyled>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <Cards/>
          <Value control={control}/>
          <TransactionDate control={control}/>
          <Comment control={control}/>
          <Tags control={control}/>
          <Button variant='contained' type="submit">Submit</Button>
        </form>
      </TransactionContainerStyled>
    </TransactionStyled>
  )
}
