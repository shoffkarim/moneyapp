import React, { useState } from "react";
import "./card.sass";
import { BiRuble } from "react-icons/bi";
import { GrFormEdit } from "react-icons/gr";
import { formatMoney } from "components/utils/format";
import { themeColor } from "components/utils/color";
import { icons } from "components/utils/icons";
import { EditPopup } from "components/editPopup";
import { useDrag, useDrop } from "react-dnd";
import { dndCanDrop } from "components/utils/dnd";
import { dndItem, ICard, IMainIconObj } from "components/interfaces";



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
    drop: (item: dndItem) => operOpen(true, item.id, id, item.type, type),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    })
  }))




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
