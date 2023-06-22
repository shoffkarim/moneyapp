import { Typography } from '@mui/material'
import { CardIconStyled, CardStyled, CardWrapperStyled } from 'components/card/card.styled'
import { IMainIconObj } from 'types'
import { icons } from 'components/utils/icons'
import React from 'react'
import { openCreatePopup } from '__data__/reducers/createPopup'
import { useAppDispatch } from 'hooks'

export interface CardNewProps {
  type: string
}

const iconProps = {
  size: "50px",
  color: "white",
}

export const CardNew: React.FC<CardNewProps> = ({
  type,
}) => {

  const dispatch = useAppDispatch()

  const MainIcon: IMainIconObj = icons("plus")
  return (
    <>
      <CardStyled
        onClick={() => {
          dispatch(openCreatePopup({ open: true, type: type }))
        }}
      >
        <CardWrapperStyled>
          <Typography variant="body1" mb={'10px'} color="white" textAlign="center">Add</Typography>
          <CardIconStyled style={{ backgroundColor: "#000000" }}>
            <MainIcon.Icon {...iconProps} />
          </CardIconStyled>
        </CardWrapperStyled>
      </CardStyled>
    </>
  )
}
