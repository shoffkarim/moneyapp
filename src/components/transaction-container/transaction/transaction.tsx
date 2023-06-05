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

  const handleOnSubmit: SubmitHandler<TransactionValues> = (data) => {
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
