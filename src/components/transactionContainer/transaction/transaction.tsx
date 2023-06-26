import React from 'react'
import { Cards } from "./cards"
import { Comment } from "./comment"
import { TransactionDate } from "./transactionDate"
import { Tags } from "./tags"
import { Value } from "./value"
import { TransactionContainerStyled, TransactionOverlayStyled, TransactionStyled, CloseButtonStyled } from "./transaction.styled"
import { Button } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TransactionValues } from './utils'
import { useMutation } from '@apollo/client'
import { SET_TRANSACTION } from '__data__/mutations/transactions'
import CloseIcon from '@mui/icons-material/Close'
import { useSelector } from 'react-redux'
import { RootState } from '__data__/store'
import { GET_USER_CARDS } from '__data__/queries/cards'
import { GET_USER_TOTAL } from '__data__/queries/total'


interface TransactionProps {
  handleTransactionOpen: (value: boolean) => void
  handleAlert: (value: boolean) => void
}

export const Transaction: React.FC<TransactionProps> = ({ handleTransactionOpen, handleAlert }) => {

  const { idFrom, typeFrom, idTo, typeTo } = useSelector((state: RootState) => state.transaction)

  const { control, handleSubmit, formState: { errors } } = useForm<TransactionValues>()

  const [setTransaction] = useMutation(SET_TRANSACTION)

  const handleOnSubmit: SubmitHandler<TransactionValues> = (data) => {
    try {
      setTransaction(
        {
          variables: {
            id: '647db351529d7960cb8ce476',
            idFrom,
            typeFrom,
            idTo,
            typeTo,
            value: Number(data.value),
            comment: data.comment,
            date: data.date,
            tags: data.tags
          },
          refetchQueries: [
            {
              query: GET_USER_CARDS,
              variables: {
                id: '647db351529d7960cb8ce476'
              }
            },
            {
              query: GET_USER_TOTAL,
              variables: {
                id: '647db351529d7960cb8ce476'
              }
            },
          ]
        }
      ).then(() => {
        handleTransactionOpen(false)
        handleAlert(true)
      })
    } catch (error) {
      console.log(errors)
    }
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
