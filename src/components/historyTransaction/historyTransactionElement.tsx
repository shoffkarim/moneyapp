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
import { HistoryTransactionDeleteDialog } from "./historyTransactionDeleteDialog"


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
}) => {
  const [showComment, setShowComment] = useState<boolean>(false)
  const formatedDate = format(new Date(date), 'MM-dd-yyyy')
  const formatedMoney = formatMoney(value)
  const IconFrom: IMainIconObj = icons(cardFrom?.icon || '')
  const iconBackgroundFrom: string = themeColor(cardFrom?.color || '')
  const IconTo: IMainIconObj = icons(cardTo?.icon || '')
  const iconBackgroundTo: string = themeColor(cardTo?.color || '')
  const textColor = index % 2 === 0

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true)
  }

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false)
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
          <HistoryItemAction>
            <EditIcon htmlColor="#fff" fontSize="small" />
          </HistoryItemAction>
          <IconButton onClick={handleOpenDeleteDialog}>
            <DeleteForeverIcon htmlColor="#d32f2f" />
          </IconButton>
        </HistoryItemActionsWrapper>
        <HistoryTransactionDeleteDialog
          open={openDeleteDialog}
          handleClose={handleCloseDeleteDialog}
        />
      </TableCell>
    </HistoryItemStyled>
  )
}
