import { Cards } from "./cards";
import { Comment } from "./comment";
import { Date } from "./date";
import "./operation.sass";
import { Tags } from "./tags";
import { Value } from "./value";

interface IOperation {
  cardFrom: number,
  cardWhere: number,
  cardFromType: string,
  cardWhereType: string
}

export const Operation: React.FC<IOperation> = ({cardFrom, cardWhere, cardFromType, cardWhereType}) => {

  return (
    <div className="operation">
      <div className="operation-overlay"></div>
      <div className="operation-container">
        <Cards cardFrom={cardFrom} cardWhere={cardWhere} cardFromType={cardFromType} cardWhereType={cardWhereType}/>
        <Value/>
        <Date/>
        <Comment/>
        <Tags/>
      </div>
    </div>
  );
};
