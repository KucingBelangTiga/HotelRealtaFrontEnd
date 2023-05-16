import { combineReducers } from "redux";
import BankReduce from "./bankReducer";
import EntitysReduce from "./entityReducer";
import PaymentGatewayReduce from "./paymentGatewayReducer";
import PaymentTransactionReduce from "./paymentTransactionReducer";
import UserAccountReduce from "./userAccountReducer";

const rootReducer = combineReducers({
  bankState: BankReduce,
  entitysState: EntitysReduce,
  paymentGatewayState: PaymentGatewayReduce,
  userAccountState: UserAccountReduce,
  paymentTransactionState: PaymentTransactionReduce,
});

export default rootReducer;
