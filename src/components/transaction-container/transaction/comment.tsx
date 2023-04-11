import React, { useState } from "react";
import { TransactionWrapperStyled } from "./transaction.styled";

interface CommentProps {
  handlerTransaction: (text: string) => void
}

export const Comment: React.FC<CommentProps> = ({handlerTransaction}) => {
  const [comment, setComment] = useState('')

  const handlerComment = (text: string) => {
    setComment(text)
    handlerTransaction(text)
  }

  return (
    <TransactionWrapperStyled>
        <input value={comment} onChange={(e) => handlerComment(e.target.value)} placeholder="Comment" />
    </TransactionWrapperStyled>
  );
};
