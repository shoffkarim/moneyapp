import { Fab } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { MainButtonContainer } from './mainButton.styled'
import { useAppDispatch } from 'hooks'
import { setTransactionCardTypeFrom, setTransactionCardTypeTo, setTransactionStart } from '__data__/reducers/transaction'
import { ACCOUNTS, INCOMES } from 'components/constants'


export const MainButton: React.FC = () => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(setTransactionCardTypeFrom(INCOMES))
    dispatch(setTransactionCardTypeTo(ACCOUNTS))
    dispatch(setTransactionStart({ open: true }))

  }
  return (
    <MainButtonContainer>
      <Fab color="primary" aria-label="add" onClick={handleClick}>
        <AddIcon />
      </Fab>
    </MainButtonContainer>
  )
}
