import React, { useState } from 'react'
import { DayItem, DayItemActionsPopupStyled, DayItemActionStyled, DayItemDateStyled, DayItemPopupClose, DayItemPopupContainer, DayItemPopupStyled, DayItemsList, DayItemsListPopupStyled, DayItemTopPopupStyled, DayItemWrapperPopupStyled, DayTotalContainerStyled } from './calendarDays.style'
import { Backdrop, Typography } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'
import { useAppDispatch, useAppSelector } from 'hooks'
import { RootState } from '__data__/store'
import { closeCalendarDayPoup } from '__data__/reducers/calendarDayPopup'
import CloseIcon from '@mui/icons-material/Close'
import { DeleteDialog } from 'components/deleteDialog/deleteDialog'
import { formateDate } from '../utils'

export const CalendarDayItemPopup: React.FC = () => {

  const { open, day } = useAppSelector((state: RootState) => state.calendarDayPopup)

  const dispatch = useAppDispatch()
  const handleClose = () => {
    dispatch(closeCalendarDayPoup())
  }

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true)
  }

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false)
  }

  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
      open={open}
    >
      <DayItemPopupContainer>
        <DayItemPopupClose aria-label="close" onClick={handleClose}>
          <CloseIcon htmlColor="#fff" fontSize='large' />
        </DayItemPopupClose>
        <DayItemTopPopupStyled>
          <DayItemDateStyled>
            {formateDate(day.date, 'DD-MM-YYYY')}
          </DayItemDateStyled>
        </DayItemTopPopupStyled>
        <DayItemsListPopupStyled>
          <DayItemPopupStyled backgroundColor={"#00796b"}>
            <Typography fontSize="14px">{"food"}</Typography>
            <DayItemWrapperPopupStyled>
              <Typography fontSize="14px">{"14$"}</Typography>
              <DayItemActionsPopupStyled>
                <DayItemActionStyled>
                  <EditIcon htmlColor="#fff" fontSize="small" />
                </DayItemActionStyled>
                <DayItemActionStyled onClick={handleOpenDeleteDialog}>
                  <DeleteForeverIcon htmlColor="#fff" fontSize='small' />
                </DayItemActionStyled>
              </DayItemActionsPopupStyled>
            </DayItemWrapperPopupStyled>
          </DayItemPopupStyled>
          <DayItemPopupStyled backgroundColor={"#d32f2f"}>
            <Typography fontSize="14px">{"food"}</Typography>
            <DayItemWrapperPopupStyled>
              <Typography fontSize="14px">{"14$"}</Typography>
              <DayItemActionsPopupStyled>
                <DayItemActionStyled>
                  <EditIcon htmlColor="#fff" fontSize="small" />
                </DayItemActionStyled>
                <DayItemActionStyled onClick={handleOpenDeleteDialog}>
                  <DeleteForeverIcon htmlColor="#fff" fontSize='small' />
                </DayItemActionStyled>
              </DayItemActionsPopupStyled>
            </DayItemWrapperPopupStyled>
          </DayItemPopupStyled>
          <DayItemPopupStyled backgroundColor={"#455a64"}>
            <Typography fontSize="14px">{"food"}</Typography>
            <DayItemWrapperPopupStyled>
              <Typography fontSize="14px">{"14$"}</Typography>
              <DayItemActionsPopupStyled>
                <DayItemActionStyled>
                  <EditIcon htmlColor="#fff" fontSize="small" />
                </DayItemActionStyled>
                <DayItemActionStyled onClick={handleOpenDeleteDialog}>
                  <DeleteForeverIcon htmlColor="#fff" fontSize='small' />
                </DayItemActionStyled>
              </DayItemActionsPopupStyled>
            </DayItemWrapperPopupStyled>
          </DayItemPopupStyled>

        </DayItemsListPopupStyled>
        <DayTotalContainerStyled>
          <Typography>{"total"}</Typography>
          <Typography>{"1000000$"}</Typography>
        </DayTotalContainerStyled>
        {day.items &&
              <DayItemsList>
                {day.items.map((item, index) => {
                  return (
                    <DayItem backgroundColor={item.backgroundColor} key={`${item.title}-${index}`}>
                      <Typography fontSize="14px">{item.title}</Typography>
                      <Typography fontSize="14px">{item.value}</Typography>
                    </DayItem>
                  )
                })}
              </DayItemsList>
        }
        {day.description &&
              <DayTotalContainerStyled>
                <Typography>{day.description?.title}</Typography>
                <Typography>{day.description?.subTitle}</Typography>
              </DayTotalContainerStyled>
        }
      </DayItemPopupContainer>
      <DeleteDialog
        open={openDeleteDialog}
        handleClose={handleCloseDeleteDialog}
      />
    </Backdrop>
  )
}

export default CalendarDayItemPopup