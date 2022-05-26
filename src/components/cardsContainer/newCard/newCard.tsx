import { Typography } from '@mui/material';
import { IMainIconObj } from 'components/interfaces';
import { CreatePopup } from 'components/popups/createPopup';
import { icons } from 'components/utils/icons';
import React, { useState } from 'react'

export interface INewCard {
  type: string;
}

const iconProps = {
  size: "50px",
  color: "white",
};

export const NewCard: React.FC<INewCard> = ({ type }) => {

  const [visiblePopup, setVisiblePopup] = useState(false)

  const MainIcon: IMainIconObj = icons("plus");
  return (
    <>
      <div
        className="card"
        onClick={() => setVisiblePopup(true)}
      >
        <div className="card-wrapper">
        <Typography variant="body1" mb={'10px'}>Добавить</Typography>
          <div className="card-icon" style={{ backgroundColor: "black" }}>
            <MainIcon.Icon {...iconProps} />
          </div>
        </div>
      </div>
      {visiblePopup && <CreatePopup iconProps={iconProps} type={type} handlerClose={setVisiblePopup}/>}
    </>
  )
}
