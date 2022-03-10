import { combineReducers } from "redux";
import User from "./user";


const rootReducer = combineReducers({
  User: User
});

export default rootReducer;