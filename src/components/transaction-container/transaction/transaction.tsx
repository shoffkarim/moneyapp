import React from 'react'
import { Cards } from "./cards"
import { Comment } from "./comment"
import { TransactionDate } from "./transaction-date"
import { Tags } from "./tags"
import { Value } from "./value"
// import { Tag } from "components/interfaces"
import { TransactionContainerStyled, TransactionOverlayStyled, TransactionStyled } from "./transaction.styled"
import { Button } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TransactionValues } from './utils'
import { useMutation } from '@apollo/client'
import { SET_TRANSACTION } from '__data__/mutations/transactions'


// type TransactionData = {
//   id: string,
//   value: number,
//   date: string,
//   comment: string,
//   tags: Array<Tag | undefined>
// }


// const initTransactionData: TransactionData = {
//   id: "",
//   value: 0,
//   date: "",
//   comment: "",
//   tags: []
// }

export const Transaction: React.FC = () => {

  const { control, handleSubmit, formState: { errors } } = useForm<TransactionValues>()

  const [setTransaction] = useMutation(SET_TRANSACTION)

  const handleOnSubmit: SubmitHandler<TransactionValues> = (data) => {
    setTransaction({ variables:
      {
        id: '647db351529d7960cb8ce476',
        idFrom: '647db3d9529d7960cb8ce484',
        idTo: '647db3ee529d7960cb8ce488',
        value: Number(data.value),
        comment: data.comment
      }
    })
    console.log(data, errors)
  }

  return (
    <TransactionStyled>
      <TransactionOverlayStyled/>
      <TransactionContainerStyled>
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
