import { Fab } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { MainButtonContainer } from './mainButton.styled'
import { useAppDispatch } from 'hooks'
import { setTransactionCardTypeFrom, setTransactionCardTypeTo } from '__data__/reducers/transaction'
import { ACCOUNTS, INCOMES } from 'components/constants'

type MainButtonProps = {
  action: (open: boolean) => void
}
export const MainButton: React.FC<MainButtonProps> = ({ action }) => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(setTransactionCardTypeFrom(INCOMES))
    dispatch(setTransactionCardTypeTo(ACCOUNTS))
    action(true)

  }
  return (
    <MainButtonContainer>
      <Fab color="primary" aria-label="add" onClick={handleClick}>
        <AddIcon />
      </Fab>
    </MainButtonContainer>
  )
}
