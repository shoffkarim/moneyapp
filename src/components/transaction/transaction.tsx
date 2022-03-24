import { Cards } from "./cards";
import { Comment } from "./comment";
import { Date } from "./date";
import "./transaction.sass";
import { Tags } from "./tags";
import { Value } from "./value";

interface ITransaction {
  cardFrom: number,
  cardWhere: number,
  cardFromType: string,
  cardWhereType: string
}

export const Transaction: React.FC<ITransaction> = ({cardFrom, cardWhere, cardFromType, cardWhereType}) => {

  return (
    <div className="transaction">
      <div className="transaction-overlay"></div>
      <div className="transaction-container">
        <Cards cardFrom={cardFrom} cardWhere={cardWhere} cardFromType={cardFromType} cardWhereType={cardWhereType}/>
        <Value/>
        <Date/>
        <Comment/>
        <Tags/>
      </div>
    </div>
  );
};
