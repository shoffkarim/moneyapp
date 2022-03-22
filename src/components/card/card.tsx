import React, { useState } from "react";
import "./card.sass";
import { BiRuble } from "react-icons/bi";
import { GrFormEdit } from "react-icons/gr";
import { formatMoney } from "components/utils/format";
import { themeColor } from "components/utils/color";
import { icons } from "components/utils/icons";
import { EditPopup } from "components/editPopup";
import { useDrag, useDrop } from "react-dnd";

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

interface dndItem {
  id: number
}

const iconProps = {
  size: "50px",
  color: "white",
};

export const Card: React.FC<ICard> = ({ id, name, icon, color, value }) => {
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visiblePopup, setVisiblePopup] = useState(false);

  const [{isDragging}, drag] = useDrag(() => ({
    type: "card",
    item: {id: id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  const [{isOver}, drop] = useDrop(() => ({
    accept: "card",
    drop: (item: dndItem) => dndHandler(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  }))

  const dndHandler = (id: number) => {
    console.log(id)
  }

  const money: string = formatMoney(value);
  const theme: string = themeColor(color);
  const MainIcon: IMainIconObj = icons(icon);

  return (
    <>
      <div
        ref={drag}
        className="card"
        onMouseEnter={() => setVisibleEdit(!visibleEdit)}
        onMouseLeave={() => setVisibleEdit(!visibleEdit)}
        style={{border: isDragging ? "5px solid pink" : "0px solid"}}
      >
        <div className="card-wrapper" ref={drop}>
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
