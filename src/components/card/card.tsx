import React, { useState } from "react"
import { GrFormEdit } from "react-icons/gr"
import { formatMoney } from "components/utils/format"
import { themeColor } from "components/utils/color"
import { icons } from "components/utils/icons"
import { DragPreviewImage, useDrag } from "react-dnd"
import { ICard, IMainIconObj } from "types"
import { Typography } from "@mui/material"
import { CurrencyRuble } from "@mui/icons-material"
import { CardIconStyled, CardStyled, CardValueStyled, CardWrapperStyled } from "./card.styled"
import { EditContainerStyled } from "components/popups/editPopup/editPopup.styled"
import { openEditPopup } from "__data__/reducers/editPopup"
import { useAppDispatch } from "hooks"



const iconProps = {
  size: "50px",
  color: "white",
}

export const Card: React.FC<ICard> = ({ id, name, icon, color, value, type }) => {

  const dispatch = useAppDispatch()

  const [visibleEdit, setVisibleEdit] = useState(false)

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: "card",
    item: { id: id, type: type },
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
          <Typography variant="body1" mb={'10px'} color="white">{name}</Typography>
          <CardIconStyled
            ref={drag}
            style={{ backgroundColor: theme }}
          >
            <DragPreviewImage connect={preview} src="moneySvg.svg"/>
            <MainIcon.Icon {...iconProps} />
          </CardIconStyled>
          <CardValueStyled>
            <Typography component={'span'} color="white">{money}</Typography>
            <CurrencyRuble htmlColor="white" sx={{ fontSize: 18 }} />
          </CardValueStyled>
        </CardWrapperStyled>
        {/* TODO: move EditContainerStyled out of here */}
        {visibleEdit && (
          <EditContainerStyled
            onClick={() => dispatch(openEditPopup({
              id,
              name,
              color,
              iconName: icon,
              type,
              value
            }))}
          >
            <GrFormEdit size="25px" />
          </EditContainerStyled>
        )}
      </CardStyled>
    </>
  )
}
