import { TableCell, Typography } from "@mui/material"
import React, { useState } from "react"
import { HistoryItemCellStyled, HistoryItemIconStyled, HistoryItemStyled, HistoryItemTagListStyled, HistoryItemTagItemStyled, HistoryItemCommentStyled } from "./history-transaction.styled"
import { format } from "date-fns"
import { formatMoney } from "components/utils/format"
import { icons } from "components/utils/icons"
import { themeColor } from "components/utils/color"
import { TransactionItem } from "../types"

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
  cardTo
}) => {
  const [showComment, setShowComment] = useState<boolean>(false)
  const formatedDate = format(new Date(date), 'MM-dd-yyyy')
  const formatedMoney = formatMoney(value)
  const IconFrom: IMainIconObj = icons(cardFrom?.icon || '')
  const iconBackgroundFrom: string = themeColor(cardFrom?.color || '')
  const IconTo: IMainIconObj = icons(cardTo?.icon || '')
  const iconBackgroundTo: string = themeColor(cardTo?.color || '')
  console.log(iconBackgroundFrom, iconBackgroundTo)

  return (
    <HistoryItemStyled>
      <TableCell>
        <Typography>{formatedDate}</Typography>
      </TableCell>
      <TableCell>
        <HistoryItemCellStyled>
          <HistoryItemIconStyled background={ iconBackgroundFrom }>
            <IconFrom.Icon {...iconProps} />
          </HistoryItemIconStyled>
          <Typography>{cardFrom?.name}</Typography>
        </HistoryItemCellStyled>
      </TableCell>
      <TableCell>
        <HistoryItemCellStyled>
          <HistoryItemIconStyled background={ iconBackgroundTo }>
            <IconTo.Icon {...iconProps} />
          </HistoryItemIconStyled>
          <Typography>{cardTo?.name}</Typography>
        </HistoryItemCellStyled>
      </TableCell>
      <TableCell>
        <Typography>{formatedMoney} $</Typography>
      </TableCell>
      <TableCell>
        <HistoryItemCommentStyled
          onClick={() => setShowComment(!showComment)}
          show={showComment ? 'initial' : 'nowrap'}
          aria-label={comment}
          title={comment}
        >
          {comment}
        </HistoryItemCommentStyled>
        <HistoryItemTagListStyled>
          {tags.length > 0 && tags.map((tagItem) =>
            <HistoryItemTagItemStyled key={tagItem.tagId}>
              <Typography fontSize="14px">{tagItem.name}</Typography>
            </HistoryItemTagItemStyled>
          )}
        </HistoryItemTagListStyled>
      </TableCell>
    </HistoryItemStyled>
  )
}
