import React, { useState } from "react"
import { GrFormEdit } from "react-icons/gr"
import { formatMoney } from "components/utils/format"
import { themeColor } from "components/utils/color"
import { icons } from "components/utils/icons"
import { EditPopup } from "components/popups/edit-popup"
import { DragPreviewImage, useDrag } from "react-dnd"
import { ICard, IMainIconObj } from "components/interfaces"
import { Typography } from "@mui/material"
import { CurrencyRuble } from "@mui/icons-material"
import { CardIconStyled, CardStyled, CardValueStyled, CardWrapperStyled } from "./card.styled"
import { EditContainerStyled } from "components/popups/edit-popup/edit-popup.styled"



const iconProps = {
  size: "50px",
  color: "white",
}

export const Card: React.FC<ICard> = ({ id, name, icon, color, value, type }) => {
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [visiblePopup, setVisiblePopup] = useState(false)

  const [{isDragging}, drag, preview] = useDrag(() => ({
    type: "card",
    item: {id: id, type: type},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  const money: string = formatMoney(value)
  const theme: string = themeColor(color)
  const MainIcon: IMainIconObj = icons(icon)

  return (
    <>
      <CardStyled
        isDragging={isDragging}
        onMouseEnter={() => setVisibleEdit(!visibleEdit)}
        onMouseLeave={() => setVisibleEdit(!visibleEdit)}
      >
        <CardWrapperStyled >
          <Typography variant="body1" mb={'10px'}>{name}</Typography>
          <CardIconStyled
            ref={drag}
            style={{ backgroundColor: theme }}
            >
            <DragPreviewImage connect={preview} src="moneySvg.svg"/>
            <MainIcon.Icon {...iconProps} />
          </CardIconStyled>
          <CardValueStyled>
            <Typography component={'span'}>{money}</Typography>
            <CurrencyRuble sx={{fontSize: 18}} />
          </CardValueStyled>
        </CardWrapperStyled>
        {/* TODO: move EditContainerStyled out of here */}
        {visibleEdit && (
          <EditContainerStyled
            onClick={() => setVisiblePopup(!visiblePopup)}
          >
            <GrFormEdit size="25px" />
          </EditContainerStyled>
        )}
      </CardStyled>
      {visiblePopup && (
        <EditPopup
          id={id}
          iconName={icon}
          iconProps={iconProps}
          color={theme}
          name={name}
          value={value}
          type={type}
          handlerClose={setVisiblePopup}
        />
      )}
    </>
  )
}
