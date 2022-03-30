import React from "react";
import { iconsPack } from "components/iconsPack";
import { IMainIcon } from "components/interfaces";

interface IIconsPopup {
  iconProps: IMainIcon,
  activeIcon: string,
  changeIcon: Function
}

export const IconsPopup: React.FC<IIconsPopup> = ({
  iconProps, activeIcon, changeIcon
}) => {
  return (
    <div className="icon-selector__container">
      {iconsPack.map((ItemIcon) => {
        const newIconProps = {
          ...iconProps,
          color: activeIcon === ItemIcon.iconName ? "white" : "black",
        };
        return (
          <div
            className="icon-selector__item"
            key={ItemIcon.iconName}
            onClick={() => changeIcon(ItemIcon.iconName)}
          >
            <ItemIcon.Icon {...newIconProps} />
          </div>
        );
      })}
    </div>
  );
}
