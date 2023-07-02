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
        {day.items &&
          <DayItemsListPopupStyled>
            {day.items.map((item) => {
              return (
                <DayItemPopupStyled backgroundColor={item.backgroundColor} key={item.id}>
                  <DayItemInfoWrapperPopupStyled>
                    <Typography fontSize="18px">{item.title}</Typography>
                    <DayItemCommentPopupStyled
                      onClick={() => setShowComment(!showComment)}
                      show={showComment ? 'initial' : 'nowrap'}
                      fontSize="14px"
                    >{item.comment}</DayItemCommentPopupStyled>
                    {item.tags &&
                      <DayItemTagListStyled>
                        {item.tags.map((tag) => {
                          return (
                            <DayItemTagItemStyled key={tag.tagId}>
                              <Typography fontSize="14px">{tag.name}</Typography>
                            </DayItemTagItemStyled>
                          )
                        })}
                      </DayItemTagListStyled>
                    }

                  </DayItemInfoWrapperPopupStyled>
                  <DayItemWrapperPopupStyled>
                    <Typography fontSize="18px">{item.value}</Typography>
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
              )
            })}
          </DayItemsListPopupStyled>
        }
        {day.description &&
        // TODO: fix shadow
          <DayTotalContainerStyled>
            <Typography>{day.description?.title}</Typography>
            <Typography>{day.description?.subTitle}</Typography>
          </DayTotalContainerStyled>
        }
      </DayItemPopupContainer>
      <DeleteDialog
        open={openDeleteDialog}
        handleClose={handleCloseDeleteDialog}
        handleCloseYes={() => console.log(1)}
      />
    </Backdrop>
  )
}

export default CalendarDayItemPopup