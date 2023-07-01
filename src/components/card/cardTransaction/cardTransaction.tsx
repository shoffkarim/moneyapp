import React from "react"
import { BiRuble } from "react-icons/bi"
import { formatMoney } from "components/utils/format"
import { themeColor } from "components/utils/color"
import { icons } from "components/utils/icons"
import CheckIcon from '@mui/icons-material/Check'
import { CardNameStyled, CardStyled, CardValueStyled, CardWrapperStyled, CardIconStyled } from "components/card/card.styled"
import { CheckContainerStyled } from "../../transactionContainer/transaction/transaction.styled"

export interface CardTransactionProps {
  id: number | string
  name: string
  icon: string
  color: string
  value: number
  check: boolean
  handlerClick: (id: number | string) => void
}

export interface IMainIcon {
  size: string
  color: string
}

export interface IMainIconObj {
  Icon: React.FC<IMainIcon>
  iconName: string
}

const iconProps = {
  size: "50px",
  color: "white",
}

export const CardTransaction: React.FC<CardTransactionProps> = ({
  id,
  name,
  icon,
  color,
  value,
  check,
  handlerClick,
}) => {

  const money: string = formatMoney(value)
  const theme: string = themeColor(color)
  const MainIcon: IMainIconObj = icons(icon)

  return (
    <>
      <CardStyled
        onClick={() => {
          handlerClick(id)
        }}
      >
        <CardWrapperStyled>
          <CardNameStyled>{name}</CardNameStyled>
          <CardIconStyled style={{ backgroundColor: theme }}>
            <MainIcon.Icon {...iconProps} />
          </CardIconStyled>
          <CardValueStyled>
            <span>{money}</span>
            <BiRuble />
          </CardValueStyled>
        </CardWrapperStyled>
        {check && (
          <CheckContainerStyled>
            <CheckIcon htmlColor="#ffffff" fontSize="small"/>
          </CheckContainerStyled>
        )}
      </CardStyled>
    </>
  )
}
