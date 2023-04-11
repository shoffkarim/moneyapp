import React from "react";
import { BiRuble } from "react-icons/bi";
import { formatMoney } from "components/utils/format";
import { themeColor } from "components/utils/color";
import { icons } from "components/utils/icons";
import { BsCheckCircleFill } from "react-icons/bs";
import { CardNameStyled, CardStyled, CardValueStyled, CardWrapperStyled } from "components/card/card.styled";
import { CheckContainerStyled } from "../transaction/transaction.styled";

export interface TransactionCardProps {
  id: number;
  name: string;
  icon: string;
  color: string;
  value: number;
  check: number;
  handlerClick: Function;
}

export interface IMainIcon {
  size: string;
  color: string;
}

export interface IMainIconObj {
  Icon: React.FC<IMainIcon>;
  iconName: string;
}

const iconProps = {
  size: "50px",
  color: "white",
};

export const TransactionCard: React.FC<TransactionCardProps> = ({
  id,
  name,
  icon,
  color,
  value,
  check,
  handlerClick,
}) => {

  const money: string = formatMoney(value);
  const theme: string = themeColor(color);
  const MainIcon: IMainIconObj = icons(icon);

  return (
    <>
      <CardStyled
        onClick={() => {
          handlerClick(id);
        }}
      >
        <CardWrapperStyled>
          <CardNameStyled>{name}</CardNameStyled>
          <CardNameStyled style={{ backgroundColor: theme }}>
            <MainIcon.Icon {...iconProps} />
          </CardNameStyled>
          <CardValueStyled>
            <span>{money}</span>
            <BiRuble />
          </CardValueStyled>
        </CardWrapperStyled>
        {id === check && (
          <CheckContainerStyled>
            <BsCheckCircleFill size="25px" color={"green"} />
          </CheckContainerStyled>
        )}
      </CardStyled>
    </>
  );
};
