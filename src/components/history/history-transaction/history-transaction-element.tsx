import { TableCell, TableRow, Typography } from "@mui/material";
import classNames from "classnames";
import React, { useState } from "react";
import { BsBank, BsFillBagCheckFill } from "react-icons/bs";
import "./history-transaction.sass";

export const HistoryTransactionElement: React.FC = () => {
  const [showComment, setShowComment] = useState(false);
  return (
    <TableRow className="history-item">
      <TableCell>
        <Typography>12-02-2023</Typography>
      </TableCell>
      <TableCell>
        <div className="history-item__cell">
          <div className="history-item__icon">
            <BsBank color="white" />
          </div>
          <Typography>Tinkoff</Typography>
        </div>
      </TableCell>
      <TableCell>
        <div className="history-item__cell">
          <div className="history-item__icon">
            <BsFillBagCheckFill color="white" />
          </div>
          <Typography>Purchases</Typography>
        </div>
      </TableCell>
      <TableCell>
        <Typography>2000.00 P</Typography>
      </TableCell>
      <TableCell>
        <Typography
          onClick={() => setShowComment(!showComment)}
          className={classNames(
            "history-item__comment",
            showComment
              ? "history-item__comment_show"
              : "history-item__comment_hide"
          )}
          aria-label="comment comment comment comment comment comment comment comment"
          title="comment comment comment comment comment comment comment comment"
        >
          comment comment comment comment comment comment comment comment
        </Typography>
        <ul className="history-item__tag-list">
          <li className="history-item__tag-item">
            <Typography fontSize="14px">Business lunch</Typography>
          </li>
          <li className="history-item__tag-item">
            <Typography fontSize="14px">Bank</Typography>
          </li>
          <li className="history-item__tag-item">
            <Typography fontSize="14px">Coffee</Typography>
          </li>
          <li className="history-item__tag-item">
            <Typography fontSize="14px">Bank</Typography>
          </li>
          <li className="history-item__tag-item">
            <Typography fontSize="14px">Coffee</Typography>
          </li>
          <li className="history-item__tag-item">
            <Typography fontSize="14px">Business lunch</Typography>
          </li>
        </ul>
      </TableCell>
    </TableRow>
  );
};
