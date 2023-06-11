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
import { setTransaction } from '__data__/reducers/transaction'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '__data__/store'


interface TransactionProps {
  handleTransactionOpen: (value: boolean) => void
}

export const Transaction: React.FC<TransactionProps> = ({ handleTransactionOpen }) => {
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state)
  console.log(state)
  const { control, handleSubmit, formState: { errors } } = useForm<TransactionValues>()

  const [setTransactionApi] = useMutation(SET_TRANSACTION)

  const handleOnSubmit: SubmitHandler<TransactionValues> = (data) => {
    setTransactionApi({ variables:
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
          <Button variant='contained' type="button" onClick={() => dispatch(setTransaction({ idFrom: 20,
            typeFrom: "acconts",
            typeWhere: "expenses",
            value: 100,
            date: "",
            comment: "",
            tags: [],
            isLoaded: true,
            open: true
          }))}>Submit</Button>
        </form>
      </TransactionContainerStyled>
    </TransactionStyled>
  )
}
