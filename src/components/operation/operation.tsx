import { Cards } from "./cards";
import { Comment } from "./comment";
import { Date } from "./date";
import "./operation.sass";
import { Tags } from "./tags";
import { Value } from "./value";

export const Operation = () => {

  return (
    <div className="operation">
      <div className="operation-overlay"></div>
      <div className="operation-container">
        <Cards/>
        <Value/>
        <Date/>
        <Comment/>
        <Tags/>
      </div>
    </div>
  );
};
