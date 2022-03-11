import { combineReducers } from "redux";
import Accounts from "./accounts";
import Expenses from "./expenses";
import Incomes from "./incomes";
import Total from "./total";
import User from "./user";


const rootReducer = combineReducers({
  User: User,
  Incomes: Incomes,
  Accounts: Accounts,
  Expenses: Expenses,
  Total: Total
});

export default rootReducer;