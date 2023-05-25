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
import { BtnCloseStyled } from "pages/main/main.styled"

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

  const handlerTransactionValue = (val: number) => {
    setData({ ...data, value: val })
  }

  const handlerTransactionComment = (text: string) => {
    setData({ ...data, comment: text })
  }

  const handlerTransactionDate = (date: string) => {
    setData({ ...data, date: date })
  }

  const handlerTransactionTags = (tags: Array<Tag | undefined>) => {
    setData({ ...data, tags: tags })
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

  return (
    <TransactionStyled>
      <TransactionOverlayStyled/>
      <TransactionContainerStyled>
        <Cards/>
        <Value handlerTransaction={handlerTransactionValue}/>
        <TransactionDate handlerTransaction={handlerTransactionDate}/>
        <Comment handlerTransaction={handlerTransactionComment}/>
        <Tags handlerTransaction={handlerTransactionTags}/>
        <button onClick={handlerDone}>Done</button>
        <BtnCloseStyled onClick={() => handlerClose(false)}></BtnCloseStyled>
      </TransactionContainerStyled>
    </TransactionStyled>
  )
}
