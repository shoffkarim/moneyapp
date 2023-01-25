import { Cards } from "./cards";
import { Comment } from "./comment";
import { TransactionDate } from "./transactionDate";
import "./transaction.sass";
import { Tags } from "./tags";
import { Value } from "./value";
import { useDispatch } from "react-redux";
import { addNewTransaction, closePopupTransaction, setTransactionData } from "__data__/actions/transaction";
import { useState } from "react";
import { Tag } from "components/interfaces";

type TransactionData = {
  id: string,
  value: number,
  date: string,
  comment: string,
  tags: Array<Tag | undefined>
}

const initTransactionData: TransactionData = {
  id: "",
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
    dispatch(setTransactionData(data))
    const item = JSON.stringify({
      ...data,
      id: String(Date.now())
    })
    addNewTransaction(item)
    handlerClose(false)
  }

  return (
    <div className="transaction">
      <div className="transaction-overlay"></div>
      <div className="transaction-container">
        <Cards/>
        <Value handlerTransaction={handlerTransactionValue}/>
        <TransactionDate handlerTransaction={handlerTransactionDate}/>
        <Comment handlerTransaction={handlerTransactionComment}/>
        <Tags handlerTransaction={handlerTransactionTags}/>
        <button onClick={handlerDone}>Done</button>
        <div className="btn-close" onClick={() => handlerClose(false)}></div>
      </div>
    </div>
  );
};
