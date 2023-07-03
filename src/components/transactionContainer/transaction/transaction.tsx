import React from 'react'
import { Cards } from "./cards"
import { Comment } from "./comment"
import { TransactionDate } from "./transactionDate"
import { Tags } from "./tags"
import { Value } from "./value"
import { TransactionContainerStyled, TransactionOverlayStyled, TransactionStyled, CloseButtonStyled, TransactionWrapperStyled } from "./transaction.styled"
import { Button } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TransactionValues } from './utils'
import { useMutation } from '@apollo/client'
import { EDIT_TRANSACTION, SET_TRANSACTION } from '__data__/mutations/transactions'
import CloseIcon from '@mui/icons-material/Close'
import { useSelector } from 'react-redux'
import { RootState } from '__data__/store'
import { GET_USER_CARDS } from '__data__/queries/cards'
import { GET_USER_TOTAL } from '__data__/queries/total'
import { useAppDispatch } from 'hooks'
import { closeTransactionPopup } from '__data__/reducers/transaction'
import { CardsEdit } from './cardsEdit'
import { GET_USER_TRANSACTIONS } from '__data__/queries/transactions'
import { openErrorAlert, openSuccessAlert } from '__data__/reducers/alerts'


export const Transaction: React.FC = () => {

  const { idFrom, typeFrom, idTo, typeTo, value, comment, date, tags, status, transactionId } = useSelector((state: RootState) => state.transaction)


  const dispatch = useAppDispatch()
  const handleClosePopup = () => {
    dispatch(closeTransactionPopup())
  }

  const { control, handleSubmit, formState: { errors } } = useForm<TransactionValues>()

  const [setTransaction] = useMutation(SET_TRANSACTION)
  const [editTransaction] = useMutation(EDIT_TRANSACTION)

  const handleOnSubmit: SubmitHandler<TransactionValues> = (data) => {
    try {
      if(status === "new") {
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
              {
                query: GET_USER_TRANSACTIONS,
                variables: {
                  id: '647db351529d7960cb8ce476'
                }
              }
            ]
          }
        ).then(() => {
          handleClosePopup()
          dispatch(openSuccessAlert({
            open: true,
            text: 'Transaction has been added'
          }))
        })
      }
      if(status === "edit") {
        editTransaction(
          {
            variables: {
              id: '647db351529d7960cb8ce476',
              transactionId,
              idFrom,
              typeFrom,
              idTo,
              typeTo,
              value: Number(data.value),
              comment: data.comment,
              date: data.date,
              tags: data.tags,
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
              {
                query: GET_USER_TRANSACTIONS,
                variables: {
                  id: '647db351529d7960cb8ce476'
                }
              }
            ]
          }
        ).then(() => {
          handleClosePopup()
          dispatch(openSuccessAlert({
            open: true,
            text: 'Transaction has been edited'
          }))
        })
      }
    } catch (error) {
      console.log(errors)
      dispatch(openErrorAlert({
        open: true,
        text: 'Something went wrong'
      }))
    }
  }

  return (
    <TransactionStyled>
      <TransactionOverlayStyled/>
      <TransactionContainerStyled>
        <CloseButtonStyled aria-label="close" onClick={() => handleClosePopup()}>
          <CloseIcon htmlColor="#fff" fontSize='large' />
        </CloseButtonStyled>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          {status === "new" && <Cards/>}
          {status === "edit" && <CardsEdit/>}
          <Value control={control} defaultValue={value}/>
          <TransactionDate control={control} defaultValue={date}/>
          <Comment control={control} defaultValue={comment}/>
          <Tags control={control} defaultValue={tags}/>
          <TransactionWrapperStyled>
            <Button variant="contained" disabled={idFrom === "" || idTo === ""} type="submit">Submit</Button>
          </TransactionWrapperStyled>
        </form>
      </TransactionContainerStyled>
    </TransactionStyled>
  )
}
