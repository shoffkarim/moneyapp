import React, { useState } from "react";
import "./card.sass";
import { BiRuble } from "react-icons/bi";
import { GrFormEdit } from "react-icons/gr";
import { formatMoney } from "components/utils/format";
import { themeColor } from "components/utils/color";
import { icons } from "components/utils/icons";
import { EditPopup } from "components/editPopup";
import { DropTargetMonitor, useDrag, useDrop } from "react-dnd";

export interface ICard {
  id: number;
  name: string;
  icon: string;
  color: string;
  value: number;
  type: string;
  operOpen: Function
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
  id: number,
  type: string
}

const iconProps = {
  size: "50px",
  color: "white",
};

export const Card: React.FC<ICard> = ({ id, name, icon, color, value, type, operOpen }) => {
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visiblePopup, setVisiblePopup] = useState(false);

  const [{isDragging}, drag] = useDrag(() => ({
    type: "card",
    item: {id: id, type: type},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))



  const [{isOver, canDrop}, drop] = useDrop(() => ({
    accept: "card",
    canDrop: (item: dndItem) => dndCanDrop(item, id, type),
    drop: (item: dndItem) => dndHandler(item.id, id, item.type, type),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    })
  }))

  const dndCanDrop = (item: dndItem, id: number, type: string) => {
    if(item.type === type) {
      return false
    } else if(item.type === "incomes" && type === "accounts") {
      return true
    } else if(item.type === "accounts" && type === "expenses") {
      return true
    } else {
      return false
    }
  }

  const dndHandler = (idFrom: number, idWhere: number, typeFrom: string, typeWhere: string) => {
    operOpen(true, idFrom, idWhere, typeFrom, typeWhere)
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
          handlerClose={setVisiblePopup}
        />
      )}
    </>
  );
};
