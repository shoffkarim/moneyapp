import React from 'react'

type MenuHistoryProps = {
  handleOpenHistory: () => void
}
export const MenuHistory: React.FC<MenuHistoryProps> = ({handleOpenHistory}) => {
  return (
    <button onClick={() => handleOpenHistory()}>history</button>
  )
}
