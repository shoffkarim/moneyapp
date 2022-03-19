import React, { useState } from "react";
import "./card.sass";
import { BiRuble } from "react-icons/bi";
import { GrFormEdit } from "react-icons/gr";
import { formatMoney } from "components/utils/format";
import { themeColor } from "components/utils/color";
import { icons } from "components/utils/icons";
import { EditPopup } from "components/editPopup";

export interface ICard {
  id: number;
  name: string;
  icon: string;
  color: string;
  value: number;
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

export const Card: React.FC<ICard> = ({ id, name, icon, color, value }) => {
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visiblePopup, setVisiblePopup] = useState(false);

  const money: string = formatMoney(value);
  const theme: string = themeColor(color);
  const MainIcon: IMainIconObj = icons(icon);

  return (
    <>
      <div
        className="card"
        onMouseEnter={() => setVisibleEdit(!visibleEdit)}
        onMouseLeave={() => setVisibleEdit(!visibleEdit)}
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
        {visibleEdit && (
          <div
            className="edit-container"
            onClick={() => setVisiblePopup(!visiblePopup)}
          >
            <GrFormEdit size="25px" />
          </div>
        )}
      </div>
      {visiblePopup && (
        <EditPopup
          id={id}
          iconName={icon}
          iconProps={iconProps}
          color={theme}
          name={name}
          value={value}
        />
      )}
    </>
  );
};
