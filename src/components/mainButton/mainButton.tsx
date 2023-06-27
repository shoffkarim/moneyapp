import { Fab } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { MainButtonContainer } from './mainButton.styled'

type MainButtonProps = {
  action: (open: boolean) => void
}
export const MainButton: React.FC<MainButtonProps> = ({ action }) => {
  return (
    <MainButtonContainer>
      <Fab color="primary" aria-label="add" onClick={() => action(true)}>
        <AddIcon />
      </Fab>
    </MainButtonContainer>
  )
}
