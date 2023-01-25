import { combineReducers } from "redux";
import Accounts from "./accounts";
import Expenses from "./expenses";
import Incomes from "./incomes";
import Total from "./total";
import Transaction from "./transaction";
import User from "./user";


const rootReducer = combineReducers({
  User: User,
  Incomes: Incomes,
  Accounts: Accounts,
  Expenses: Expenses,
  Total: Total,
  Transaction: Transaction
});

export default rootReducer;