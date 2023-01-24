import { Cards } from "./cards";
import { Comment } from "./comment";
import { Date } from "./date";
import "./transaction.sass";
import { Tags } from "./tags";
import { Value } from "./value";
import { useDispatch } from "react-redux";
import { closePopupTransaction, setTransactionData } from "data/actions/transaction";
import { useState } from "react";
import { Tag } from "components/interfaces";

type TransactionData = {
  value: number,
  date: string,
  comment: string,
  tags: Array<Tag | undefined>
}

const initTransactionData: TransactionData = {
  value: 0,
  date: "",
  comment: "",
  tags: []
}

export const Transaction: React.FC = () => {
  const [data, setData] = useState<TransactionData>(initTransactionData)

  const dispatch = useDispatch()

  const handlerClose = (close: boolean) => {
    dispatch(closePopupTransaction(close))
  }

  const handlerTransactionValue = (val: number) => {
    setData({...data, value: val})
  }

  const handlerTransactionComment = (text: string) => {
    setData({...data, comment: text})
  }

  const handlerTransactionDate = (date: string) => {
    setData({...data, date: date})
  }

  const handlerTransactionTags = (tags: Array<Tag | undefined>) => {
    setData({...data, tags: tags})
  }

  const handlerDone = () => {
    console.log("Done", data)
    dispatch(setTransactionData(data))
    handlerClose(false)
  }

  return (
    <div className="transaction">
      <div className="transaction-overlay"></div>
      <div className="transaction-container">
        <Cards/>
        <Value handlerTransaction={handlerTransactionValue}/>
        <Date handlerTransaction={handlerTransactionDate}/>
        <Comment handlerTransaction={handlerTransactionComment}/>
        <Tags handlerTransaction={handlerTransactionTags}/>
        <button onClick={handlerDone}>Done</button>
        <div className="btn-close" onClick={() => handlerClose(false)}></div>
      </div>
    </div>
  );
};
