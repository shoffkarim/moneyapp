import React from "react";
import { BiRuble } from "react-icons/bi";
import { formatMoney } from "components/utils/format";
import { themeColor } from "components/utils/color";
import { icons } from "components/utils/icons";
import { BsCheckCircleFill } from "react-icons/bs";

export interface ITransactionCard {
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

export const TransactionCard: React.FC<ITransactionCard> = ({
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
      <div
        className="card"
        onClick={() => {
          handlerClick(id);
        }}
      >
        <div className="card-wrapper">
          <p className="card-name">{name}</p>
          <div className="card-icon" style={{ backgroundColor: theme }}>
            <MainIcon.Icon {...iconProps} />
          </div>
          <div className="card-value">
            <span>{money}</span>
            <BiRuble />
          </div>
        </div>
        {id === check && (
          <div className="check-container">
            <BsCheckCircleFill size="25px" color={"green"} />
          </div>
        )}
      </div>
    </>
  );
};
