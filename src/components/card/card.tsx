import React, { useState } from "react";
import "./card.sass";
import { GrFormEdit } from "react-icons/gr";
import { formatMoney } from "components/utils/format";
import { themeColor } from "components/utils/color";
import { icons } from "components/utils/icons";
import { EditPopup } from "components/popups/editPopup";
import { useDrag, useDrop } from "react-dnd";
import { dndCanDrop } from "components/utils/dnd";
import { dndItem, ICard, IMainIconObj } from "components/interfaces";
import { Typography } from "@mui/material";
import { CurrencyRuble } from "@mui/icons-material";



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


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
          <Typography variant="body1" mb={'10px'}>{name}</Typography>
          <div className="card-icon" style={{ backgroundColor: theme }}>
            <MainIcon.Icon {...iconProps} />
          </div>
          <div className="card-value">
            <Typography component={'span'}>{money}</Typography>
            <CurrencyRuble sx={{fontSize: 18}} />
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
