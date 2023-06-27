import React, { useState } from 'react'
import { DayItemActionsPopupStyled, DayItemActionStyled, DayItemCommentPopupStyled, DayItemDateStyled, DayItemInfoWrapperPopupStyled, DayItemPopupClose, DayItemPopupContainer, DayItemPopupStyled, DayItemsListPopupStyled, DayItemTagItemStyled, DayItemTagListStyled, DayItemTopPopupStyled, DayItemWrapperPopupStyled, DayTotalContainerStyled } from './calendarDayPopup.styled'
import { Backdrop, Typography } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'
import { useAppDispatch, useAppSelector } from 'hooks'
import { RootState } from '__data__/store'
import { closeCalendarDayPoup } from '__data__/reducers/calendarDayPopup'
import CloseIcon from '@mui/icons-material/Close'
import { DeleteDialog } from 'components/deleteDialog'
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

  const [showComment, setShowComment] = useState<boolean>(false)

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
            <DayItemInfoWrapperPopupStyled>
              <Typography fontSize="18px">{"food"}</Typography>
              <DayItemCommentPopupStyled
                onClick={() => setShowComment(!showComment)}
                show={showComment ? 'initial' : 'nowrap'}
                fontSize="14px"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptates soluta illo quam ex dolorum sapiente assumenda ea doloremque? Esse minus odio magnam quis sequi molestiae, reprehenderit ut expedita sint.</DayItemCommentPopupStyled>
              <DayItemTagListStyled>
                <DayItemTagItemStyled>
                  <Typography fontSize="14px">{"bank"}</Typography>
                </DayItemTagItemStyled>
                <DayItemTagItemStyled>
                  <Typography fontSize="14px">{"Business lunch"}</Typography>
                </DayItemTagItemStyled>
                <DayItemTagItemStyled>
                  <Typography fontSize="14px">{"bank"}</Typography>
                </DayItemTagItemStyled>
                <DayItemTagItemStyled>
                  <Typography fontSize="14px">{"Business lunch"}</Typography>
                </DayItemTagItemStyled>
              </DayItemTagListStyled>
            </DayItemInfoWrapperPopupStyled>
            <DayItemWrapperPopupStyled>
              <Typography fontSize="18px">{"14$"}</Typography>
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
            <DayItemInfoWrapperPopupStyled>
              <Typography fontSize="18px">{"food"}</Typography>
              <DayItemCommentPopupStyled
                onClick={() => setShowComment(!showComment)}
                show={showComment ? 'initial' : 'nowrap'}
                fontSize="14px"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptates soluta illo quam ex dolorum sapiente assumenda ea doloremque? Esse minus odio magnam quis sequi molestiae, reprehenderit ut expedita sint.</DayItemCommentPopupStyled>
            </DayItemInfoWrapperPopupStyled>
            <DayItemWrapperPopupStyled>
              <Typography fontSize="18px">{"14$"}</Typography>
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
            <DayItemInfoWrapperPopupStyled>
              <Typography fontSize="18px">{"food"}</Typography>
              <DayItemTagListStyled>
                <DayItemTagItemStyled>
                  <Typography fontSize="14px">{"bank"}</Typography>
                </DayItemTagItemStyled>
              </DayItemTagListStyled>
            </DayItemInfoWrapperPopupStyled>
            <DayItemWrapperPopupStyled>
              <Typography fontSize="18px">{"14$"}</Typography>
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
          <DayItemPopupStyled backgroundColor={"#00796b"}>
            <DayItemInfoWrapperPopupStyled>
              <Typography fontSize="18px">{"food"}</Typography>
              <DayItemCommentPopupStyled
                onClick={() => setShowComment(!showComment)}
                show={showComment ? 'initial' : 'nowrap'}
                fontSize="14px"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptates soluta illo quam ex dolorum sapiente assumenda ea doloremque? Esse minus odio magnam quis sequi molestiae, reprehenderit ut expedita sint.</DayItemCommentPopupStyled>
              <DayItemTagListStyled>
                <DayItemTagItemStyled>
                  <Typography fontSize="14px">{"bank"}</Typography>
                </DayItemTagItemStyled>
                <DayItemTagItemStyled>
                  <Typography fontSize="14px">{"Business lunch"}</Typography>
                </DayItemTagItemStyled>
                <DayItemTagItemStyled>
                  <Typography fontSize="14px">{"bank"}</Typography>
                </DayItemTagItemStyled>
                <DayItemTagItemStyled>
                  <Typography fontSize="14px">{"Business lunch"}</Typography>
                </DayItemTagItemStyled>
              </DayItemTagListStyled>
            </DayItemInfoWrapperPopupStyled>
            <DayItemWrapperPopupStyled>
              <Typography fontSize="18px">{"14$"}</Typography>
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
            <DayItemInfoWrapperPopupStyled>
              <Typography fontSize="18px">{"food"}</Typography>
              <DayItemCommentPopupStyled
                onClick={() => setShowComment(!showComment)}
                show={showComment ? 'initial' : 'nowrap'}
                fontSize="14px"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptates soluta illo quam ex dolorum sapiente assumenda ea doloremque? Esse minus odio magnam quis sequi molestiae, reprehenderit ut expedita sint.</DayItemCommentPopupStyled>
              <DayItemTagListStyled>
                <DayItemTagItemStyled>
                  <Typography fontSize="14px">{"bank"}</Typography>
                </DayItemTagItemStyled>
                <DayItemTagItemStyled>
                  <Typography fontSize="14px">{"Business lunch"}</Typography>
                </DayItemTagItemStyled>
                <DayItemTagItemStyled>
                  <Typography fontSize="14px">{"bank"}</Typography>
                </DayItemTagItemStyled>
                <DayItemTagItemStyled>
                  <Typography fontSize="14px">{"Business lunch"}</Typography>
                </DayItemTagItemStyled>
              </DayItemTagListStyled>
            </DayItemInfoWrapperPopupStyled>
            <DayItemWrapperPopupStyled>
              <Typography fontSize="18px">{"14$"}</Typography>
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
            <DayItemInfoWrapperPopupStyled>
              <Typography fontSize="18px">{"food"}</Typography>
              <DayItemCommentPopupStyled
                onClick={() => setShowComment(!showComment)}
                show={showComment ? 'initial' : 'nowrap'}
                fontSize="14px"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptates soluta illo quam ex dolorum sapiente assumenda ea doloremque? Esse minus odio magnam quis sequi molestiae, reprehenderit ut expedita sint.</DayItemCommentPopupStyled>
              <DayItemTagListStyled>
                <DayItemTagItemStyled>
                  <Typography fontSize="14px">{"bank"}</Typography>
                </DayItemTagItemStyled>
                <DayItemTagItemStyled>
                  <Typography fontSize="14px">{"Business lunch"}</Typography>
                </DayItemTagItemStyled>
                <DayItemTagItemStyled>
                  <Typography fontSize="14px">{"bank"}</Typography>
                </DayItemTagItemStyled>
                <DayItemTagItemStyled>
                  <Typography fontSize="14px">{"Business lunch"}</Typography>
                </DayItemTagItemStyled>
              </DayItemTagListStyled>
            </DayItemInfoWrapperPopupStyled>
            <DayItemWrapperPopupStyled>
              <Typography fontSize="18px">{"14$"}</Typography>
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
        {/* {day.items &&
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
        } */}
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