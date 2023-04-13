import { TableCell, Typography } from "@mui/material";
import React, { useState } from "react";
import { BsBank, BsFillBagCheckFill } from "react-icons/bs";
import { HistoryItemCellStyled, HistoryItemIconStyled, HistoryItemStyled, HistoryItemTagListStyled, HistoryItemTagItemStyled, HistoryItemCommentStyled } from "./history-transaction.styled";

export const HistoryTransactionElement: React.FC = () => {
  const [showComment, setShowComment] = useState(false);
  return (
    <HistoryItemStyled>
      <TableCell>
        <Typography>12-02-2023</Typography>
      </TableCell>
      <TableCell>
        <HistoryItemCellStyled>
          <HistoryItemIconStyled>
            <BsBank color="white" />
          </HistoryItemIconStyled>
          <Typography>Tinkoff</Typography>
        </HistoryItemCellStyled>
      </TableCell>
      <TableCell>
        <HistoryItemCellStyled>
          <HistoryItemIconStyled>
            <BsFillBagCheckFill color="white" />
          </HistoryItemIconStyled>
          <Typography>Purchases</Typography>
        </HistoryItemCellStyled>
      </TableCell>
      <TableCell>
        <Typography>2000.00 P</Typography>
      </TableCell>
      <TableCell>
        <HistoryItemCommentStyled
          onClick={() => setShowComment(!showComment)}
          show={showComment}
          aria-label="comment comment comment comment comment comment comment comment"
          title="comment comment comment comment comment comment comment comment"
        >
          comment comment comment comment comment comment comment comment
        </HistoryItemCommentStyled>
        <HistoryItemTagListStyled>
          <HistoryItemTagItemStyled>
            <Typography fontSize="14px">Business lunch</Typography>
          </HistoryItemTagItemStyled>
          <HistoryItemTagItemStyled>
            <Typography fontSize="14px">Bank</Typography>
          </HistoryItemTagItemStyled>
          <HistoryItemTagItemStyled>
            <Typography fontSize="14px">Coffee</Typography>
          </HistoryItemTagItemStyled>
          <HistoryItemTagItemStyled>
            <Typography fontSize="14px">Bank</Typography>
          </HistoryItemTagItemStyled>
          <HistoryItemTagItemStyled>
            <Typography fontSize="14px">Coffee</Typography>
          </HistoryItemTagItemStyled>
          <HistoryItemTagItemStyled>
            <Typography fontSize="14px">Business lunch</Typography>
          </HistoryItemTagItemStyled>
        </HistoryItemTagListStyled>
      </TableCell>
    </HistoryItemStyled>
  );
};
