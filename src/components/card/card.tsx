import React, { useState } from "react";
import "./card.sass";
import { GrFormEdit } from "react-icons/gr";
import { formatMoney } from "components/utils/format";
import { themeColor } from "components/utils/color";
import { icons } from "components/utils/icons";
import { EditPopup } from "components/popups/editPopup";
import { DragPreviewImage, useDrag } from "react-dnd";
import { ICard, IMainIconObj } from "components/interfaces";
import { Typography } from "@mui/material";
import { CurrencyRuble } from "@mui/icons-material";
import classNames from "classnames";



const iconProps = {
  size: "50px",
  color: "white",
};

export const Card: React.FC<ICard> = ({ id, name, icon, color, value, type, operOpen }) => {
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visiblePopup, setVisiblePopup] = useState(false);

  const [{isDragging}, drag, preview] = useDrag(() => ({
    type: "card",
    item: {id: id, type: type},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  const money: string = formatMoney(value);
  const theme: string = themeColor(color);
  const MainIcon: IMainIconObj = icons(icon);


  return (
    <>
      <div
        className={classNames("card", isDragging ? "card_dragging" : "")}
        onMouseEnter={() => setVisibleEdit(!visibleEdit)}
        onMouseLeave={() => setVisibleEdit(!visibleEdit)}
      >
        <div className={classNames("card-wrapper")} >
          <Typography variant="body1" mb={'10px'}>{name}</Typography>
          <div
            ref={drag}
            className={classNames("card-icon")}
            style={{ backgroundColor: theme }}
            >
            <DragPreviewImage connect={preview} src="moneySvg.svg"/>
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
          type={type}
          handlerClose={setVisiblePopup}
        />
      )}
    </>
  );
};
