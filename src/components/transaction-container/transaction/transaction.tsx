import React from 'react'
import { Cards } from "./cards"
import { Comment } from "./comment"
import { TransactionDate } from "./transaction-date"
import { Tags } from "./tags"
import { Value } from "./value"
import { useDispatch, useSelector } from "react-redux"
import { addNewTransaction, closePopupTransaction, setTransactionData } from "__data__/actions/transaction"
import { useState } from "react"
import { Tag } from "components/interfaces"
import { RootState } from "__data__/store"
import { TransactionContainerStyled, TransactionOverlayStyled, TransactionStyled } from "./transaction.styled"
import { Button } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TransactionValues } from './utils'

type TransactionData = {
  id: string,
  value: number,
  date: string,
  comment: string,
  tags: Array<Tag | undefined>
}



const initTransactionData: TransactionData = {
  id: "",
  value: 0,
  date: "",
  comment: "",
  tags: []
}

export const Transaction: React.FC = () => {
  const [data, setData] = useState<TransactionData>(initTransactionData)

  const dispatch = useDispatch()

  const { idFrom, typeFrom, idWhere, typeWhere } = useSelector((state: RootState) => state.Transaction)

  const handlerClose = (close: boolean) => {
    dispatch(closePopupTransaction(close))
  }


  const handlerDone = () => {
    dispatch(setTransactionData(data))
    const item = JSON.stringify({
      ...data,
      id: String(Date.now()),
      idFrom,
      typeFrom,
      idWhere,
      typeWhere
    })
    addNewTransaction(item)
    handlerClose(false)
  }

  const { control, handleSubmit, formState: { errors } } = useForm<TransactionValues>()
  console.log(errors)
  const handleOnSubmit: SubmitHandler<TransactionValues> = (data) => {
    console.log(data)
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
