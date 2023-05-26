import { combineReducers } from "redux";
import BankReduce from "./bankReducer";
import EntitysReduce from "./entityReducer";
import PaymentGatewayReduce from "./paymentGatewayReducer";
import PaymentTransactionReduce from "./paymentTransactionReducer";
import UserAccountReduce from "./userAccountReducer";
import TopUpReduce from "./topUpReducer";

const rootReducer = combineReducers({
  bankState: BankReduce,
  entitysState: EntitysReduce,
  paymentGatewayState: PaymentGatewayReduce,
  userAccountState: UserAccountReduce,
  paymentTransactionState: PaymentTransactionReduce,
  debitCreditState: TopUpReduce,
});

export default rootReducer;
