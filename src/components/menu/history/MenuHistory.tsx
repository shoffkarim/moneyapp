import { Button } from '@mui/material'
import React from 'react'

type MenuHistoryProps = {
  handleOpenHistory: () => void
}
export const MenuHistory: React.FC<MenuHistoryProps> = ({handleOpenHistory}) => {
  return (
    <Button onClick={() => handleOpenHistory()} variant="contained">history</Button>
  )
}
