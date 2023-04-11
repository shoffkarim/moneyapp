import { Button } from '@mui/material'
import React from 'react'
// TODO: change name
type MenuHistoryProps = {
  handleOpenHistory: () => void
}
export const MenuHistory: React.FC<MenuHistoryProps> = ({handleOpenHistory}) => {
  return (
    <Button onClick={() => handleOpenHistory()} variant="contained">history</Button>
  )
}
