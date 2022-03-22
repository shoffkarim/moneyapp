import React, { useState } from "react";
import { BiRuble } from "react-icons/bi";
import { formatMoney } from "components/utils/format";
import { themeColor } from "components/utils/color";
import { icons } from "components/utils/icons";
import { BsCheckCircleFill } from "react-icons/bs";

export interface IOperationCard {
  id: number;
  name: string;
  icon: string;
  color: string;
  value: number;
  check: boolean;
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

export const OperationCard: React.FC<IOperationCard> = ({ id, name, icon, color, value, check }) => {

  const [visibleCheck, setVisibleCheck] = useState(check)

  const money: string = formatMoney(value);
  const theme: string = themeColor(color);
  const MainIcon: IMainIconObj = icons(icon);

  return (
    <>
      <div
        className="card"
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
        <div className="check-container">
          <BsCheckCircleFill size="25px" color={"green"} />
        </div>
      </div>
    </>
  );
};
