import React, { useState } from "react";

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
    <div className="transaction-wrapper">
      <div className="transaction-comment">
        <input value={comment} onChange={(e) => handlerComment(e.target.value)} placeholder="Comment" />
      </div>
    </div>
  );
};
