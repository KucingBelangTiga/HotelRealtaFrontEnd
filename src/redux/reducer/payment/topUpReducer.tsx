import * as ActionTypeDebitCredit from "../../constant/payment/topUpConstan";

const init_state = {
  creditAccount: [],
  debitAccount: [],
  creditTransaction: [],
  debitTransaction: [],
};

const DebitCreditReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionTypeDebitCredit.ADD_CREDIT_ACCOUNT_REQUEST:
      return { ...state };
    case ActionTypeDebitCredit.ADD_CREDIT_ACCOUNT_SUCCESS:
      return AddCreditAccount(state, action);
    case ActionTypeDebitCredit.ADD_DEBIT_ACCOUNT_REQUEST:
      return { ...state };
    case ActionTypeDebitCredit.ADD_DEBIT_ACCOUNT_SUCCESS:
      return AddDebitAccount(state, action);
    case ActionTypeDebitCredit.ADD_CREDIT_TRANSACTION_REQUEST:
      return { ...state };
    case ActionTypeDebitCredit.ADD_CREDIT_TRANSACTION_SUCCESS:
      return AddCreditTransaction(state, action);
    case ActionTypeDebitCredit.ADD_DEBIT_TRANSACTION_REQUEST:
      return { ...state };
    case ActionTypeDebitCredit.ADD_DEBIT_TRANSACTION_SUCCESS:
      return AddDebitTransaction(state, action);
    default:
      return { ...state };
  }
};

const AddCreditAccount = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    creditAccount: [...state.creditAccount, payload],
  };
};

const AddDebitAccount = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    debitAccount: [...state.debitAccount, payload],
  };
};

const AddCreditTransaction = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    creditTransaction: [...state.creditTransaction, payload],
  };
};

const AddDebitTransaction = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    debitTransaction: [...state.debitTransaction, payload],
  };
};

export default DebitCreditReduce;
