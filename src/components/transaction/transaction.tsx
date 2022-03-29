import { Cards } from "./cards";
import { Comment } from "./comment";
import { Date } from "./date";
import "./transaction.sass";
import { Tags } from "./tags";
import { Value } from "./value";
import { useDispatch } from "react-redux";
import { closePopupTransaction } from "data/actions/transaction";

interface ITransaction {
  cardFrom: number,
  cardWhere: number,
  cardFromType: string,
  cardWhereType: string
}

export const Transaction: React.FC<ITransaction> = ({cardFrom, cardWhere, cardFromType, cardWhereType}) => {

  const dispatch = useDispatch()

  const handlerClose = (close: boolean) => {
    dispatch(closePopupTransaction(close))
  }

  return (
    <div className="transaction">
      <div className="transaction-overlay"></div>
      <div className="transaction-container">
        <Cards cardFrom={cardFrom} cardWhere={cardWhere} cardFromType={cardFromType} cardWhereType={cardWhereType}/>
        <Value/>
        <Date/>
        <Comment/>
        <Tags/>
        <div className="btn-close" onClick={() => handlerClose(false)}></div>
      </div>
    </div>
  );
};
