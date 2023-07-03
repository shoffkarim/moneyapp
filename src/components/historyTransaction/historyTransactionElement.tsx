import { IconButton, TableCell, Typography } from "@mui/material"
import React, { useState } from "react"
import { HistoryItemCellStyled, HistoryItemIconStyled, HistoryItemStyled, HistoryItemTagListStyled, HistoryItemTagItemStyled, HistoryItemCommentStyled, HistoryItemTextStyled, TableCellValueStyled, HistoryItemValueMobileStyled, HistoryItemActionsWrapper, HistoryItemAction } from "./historyTransaction.styled"
import { format } from "date-fns"
import { formatMoney } from "components/utils/format"
import { icons } from "components/utils/icons"
import { themeColor } from "components/utils/color"
import { TransactionItem } from "./types"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'
import { DeleteDialog } from "components/deleteDialog"
import { useMutation } from "@apollo/client"
import { DELETE_TRANSACTION } from "__data__/mutations/transactions"
import { GET_USER_TRANSACTIONS } from "__data__/queries/transactions"
import { useDispatch } from "react-redux"
import { setTransactionStart } from "__data__/reducers/transaction"
import { openErrorAlert, openSuccessAlert } from "__data__/reducers/alerts"


export interface IMainIcon {
  size: string
  color: string
}

export interface IMainIconObj {
  Icon: React.FC<IMainIcon>
  iconName: string
}

const iconProps = {
  size: "16px",
  color: "white",
}

export const HistoryTransactionElement: React.FC<TransactionItem> = ({
  value,
  date,
  comment,
  tags,
  cardFrom,
  cardTo,
  index,
  id,
  typeFrom,
  idFrom,
  typeTo,
  idTo
}) => {
  const [showComment, setShowComment] = useState<boolean>(false)
  const formatedDate = format(new Date(date), 'MM-dd-yyyy')
  const formatedMoney = formatMoney(value)
  const IconFrom: IMainIconObj = icons(cardFrom?.icon || '')
  const iconBackgroundFrom: string = themeColor(cardFrom?.color || '')
  const IconTo: IMainIconObj = icons(cardTo?.icon || '')
  const iconBackgroundTo: string = themeColor(cardTo?.color || '')
  const textColor = index % 2 === 0

  const processedTags = tags.map((itemTag) => {
    return {
      tagId: itemTag.tagId,
      name: itemTag.name
    }
  })

  const dispatch = useDispatch()

  const handleEditTransaction = () => {
    dispatch(setTransactionStart({
      open: true,
      typeFrom,
      idFrom,
      typeTo,
      idTo,
      value,
      comment,
      date,
      tags: processedTags,
      transactionId: id,
      status: "edit"
    }))
  }


  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true)
  }

  const [deleteTransaction] = useMutation(DELETE_TRANSACTION)

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false)
  }

  const handleDelete = () => {
    try {
      deleteTransaction(
        {
          variables: {
            id: "647db351529d7960cb8ce476",
            transactionId: id,
            idFrom,
            idTo,
            typeFrom,
            typeTo,
            value
          },
          refetchQueries: [
            {
              query: GET_USER_TRANSACTIONS,
              variables: {
                id: '647db351529d7960cb8ce476'
              }
            }
          ]
        }
      ).then(() => {
        dispatch(openSuccessAlert({
          open: true,
          text: 'Transaction has been deleted'
        }))
      })
    }
    catch (error) {
      console.log(error)
      dispatch(openErrorAlert({
        open: true,
        text: 'Something went wrong'
      }))
    }
  }

  const handleSubmit = () => {
    handleDelete()
    handleCloseDeleteDialog()
  }

  return (
    <HistoryItemStyled>
      <TableCell>
        <HistoryItemTextStyled white={textColor}>{formatedDate}</HistoryItemTextStyled>
      </TableCell>
      <TableCell>
        <HistoryItemCellStyled>
          <HistoryItemIconStyled background={ iconBackgroundFrom }>
            <IconFrom.Icon {...iconProps} />
          </HistoryItemIconStyled>
          <HistoryItemTextStyled white={textColor}>{cardFrom?.name}</HistoryItemTextStyled>
        </HistoryItemCellStyled>
      </TableCell>
      <TableCell>
        <HistoryItemCellStyled>
          <HistoryItemIconStyled background={ iconBackgroundTo }>
            <IconTo.Icon {...iconProps} />
          </HistoryItemIconStyled>
          <HistoryItemTextStyled white={textColor}>{cardTo?.name}</HistoryItemTextStyled>
        </HistoryItemCellStyled>
      </TableCell>
      <TableCellValueStyled>
        <HistoryItemTextStyled white={textColor}>{formatedMoney} $</HistoryItemTextStyled>
      </TableCellValueStyled>
      <TableCell>
        <HistoryItemValueMobileStyled
          white={textColor}
        >{formatedMoney} $</HistoryItemValueMobileStyled>
        <HistoryItemCommentStyled
          onClick={() => setShowComment(!showComment)}
          show={showComment ? 'initial' : 'nowrap'}
          aria-label={comment}
          title={comment}
          white={textColor}
        >
          {comment}
        </HistoryItemCommentStyled>
        <HistoryItemTagListStyled>
          {tags.length > 0 && tags.map((tagItem) =>
            <HistoryItemTagItemStyled white={textColor} key={tagItem.tagId}>
              <Typography fontSize="14px">{tagItem.name}</Typography>
            </HistoryItemTagItemStyled>
          )}
        </HistoryItemTagListStyled>
      </TableCell>
      <TableCell>
        <HistoryItemActionsWrapper>
          <HistoryItemAction onClick={handleEditTransaction}>
            <EditIcon htmlColor={textColor ? "#fff" : "#1976d2"} fontSize="small" />
          </HistoryItemAction>
          <IconButton onClick={handleOpenDeleteDialog}>
            <DeleteForeverIcon htmlColor={textColor ? "#fff" : "#1976d2"} />
          </IconButton>
        </HistoryItemActionsWrapper>
        <DeleteDialog
          open={openDeleteDialog}
          handleClose={handleCloseDeleteDialog}
          handleCloseYes={handleSubmit}
        />
      </TableCell>
    </HistoryItemStyled>
  )
}
