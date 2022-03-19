import { IMainIconObj } from 'components/card/card';
import { icons } from 'components/utils/icons';
import React from 'react'

export interface INewCard {
  type: string;
}

const iconProps = {
  size: "50px",
  color: "white",
};

export const NewCard: React.FC<INewCard> = ({ type }) => {

  const MainIcon: IMainIconObj = icons("plus");
  return (
    <>
      <div
        className="card"
      >
        <div className="card-wrapper">
          <p className="card-name">Добавить</p>
          <div className="card-icon" style={{ backgroundColor: "black" }}>
            <MainIcon.Icon {...iconProps} />
          </div>
        </div>
      </div>
    </>
  )
}
