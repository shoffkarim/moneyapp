import { Typography } from '@mui/material'
import { CardIconStyled, CardStyled, CardWrapperStyled } from 'components/card/card.styled'
import { IMainIconObj } from 'types'
import { icons } from 'components/utils/icons'
import React from 'react'

export interface CardNewProps {
  type: string
  text: string
  handleCreatePopupOpen: (value: boolean) => void
  handleCreatePopupType: (value: string) => void
}

const iconProps = {
  size: "50px",
  color: "white",
}

export const CardNew: React.FC<CardNewProps> = ({
  type,
  text,
  handleCreatePopupOpen,
  handleCreatePopupType
}) => {

  const MainIcon: IMainIconObj = icons("plus")
  return (
    <>
      <CardStyled
        onClick={() => {
          handleCreatePopupOpen(true)
          handleCreatePopupType(type)
        }}
      >
        <CardWrapperStyled>
          <Typography variant="body1" mb={'10px'} color="white" textAlign="center">{text}</Typography>
          <CardIconStyled style={{ backgroundColor: "#000000" }}>
            <MainIcon.Icon {...iconProps} />
          </CardIconStyled>
        </CardWrapperStyled>
      </CardStyled>
    </>
  )
}
