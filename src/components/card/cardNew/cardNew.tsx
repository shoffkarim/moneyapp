import { Typography } from '@mui/material'
import { CardIconStyled, CardStyled, CardWrapperStyled } from 'components/card/card.styled'
import { IMainIconObj } from 'types'
import { CreatePopup } from 'components/popups/createPopup'
import { icons } from 'components/utils/icons'
import React, { useState } from 'react'

export interface CardNewProps {
  type: string;
  text: string
}

const iconProps = {
  size: "50px",
  color: "white",
}

export const CardNew: React.FC<CardNewProps> = ({ type, text }) => {

  const [visiblePopup, setVisiblePopup] = useState(false)

  const MainIcon: IMainIconObj = icons("plus")
  return (
    <>
      <CardStyled
        onClick={() => setVisiblePopup(true)}
      >
        <CardWrapperStyled>
          <Typography variant="body1" mb={'10px'} color="white" textAlign="center">{text}</Typography>
          <CardIconStyled style={{ backgroundColor: "#000000" }}>
            <MainIcon.Icon {...iconProps} />
          </CardIconStyled>
        </CardWrapperStyled>
      </CardStyled>
      {visiblePopup && <CreatePopup iconProps={iconProps} type={type} handlerClose={setVisiblePopup}/>}
    </>
  )
}
