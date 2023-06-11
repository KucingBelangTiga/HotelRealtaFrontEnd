import * as ActionTypePaymentTransaction from "../../constant/payment/paymentTransactionConstant";

const init_state = {
  paymentTransactions: [],
  paymentTransaction: [],
};

const PaymentTransactionReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionTypePaymentTransaction.GET_ALL_PAYMENTTRANSACTION_REQUEST:
      return { ...state };
    case ActionTypePaymentTransaction.GET_ALL_PAYMENTTRANSACTION_SUCCESS:
      return GetAllPaymentTransaction(state, action);
    case ActionTypePaymentTransaction.GET_PAYMENTTRANSACTION_REQUEST:
      return { ...state };
    case ActionTypePaymentTransaction.GET_PAYMENTTRANSACTION_SUCCESS:
      return GetPaymentTransaction(state, action);
    case ActionTypePaymentTransaction.ADD_PAYMENTTRANSACTION_REQUEST:
      return { ...state };
    case ActionTypePaymentTransaction.ADD_PAYMENTTRANSACTION_SUCCESS:
      return AddPaymentTransaction(state, action);
    case ActionTypePaymentTransaction.FIND_PAYMENTTRANSACTION_REQUEST:
      return { ...state };
    case ActionTypePaymentTransaction.FIND_PAYMENTTRANSACTION_SUCCESS:
      return FindPaymentTransaction(state, action);
    case ActionTypePaymentTransaction.EDIT_PAYMENTTRANSACTION_REQUEST:
      return { ...state };
    case ActionTypePaymentTransaction.EDIT_PAYMENTTRANSACTION_SUCCESS:
      return EditPaymentTransaction(state, action);
    case ActionTypePaymentTransaction.DEL_PAYMENTTRANSACTION_REQUEST:
      return { ...state };
    case ActionTypePaymentTransaction.DEL_PAYMENTTRANSACTION_SUCCESS:
      return DeletePaymentTransaction(state, action);
    default:
      return { ...state };
  }
};

const GetAllPaymentTransaction = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    paymentTransactions: payload,
  };
};

const GetPaymentTransaction = (state: any, action: any) => {
  return {
    ...state,
    paymentTransactions: action.payload,
  };
};

const AddPaymentTransaction = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    paymentTransactions: [...state.paymentTransactions, payload],
  };
};

const FindPaymentTransaction = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    paymentTransaction: payload,
  };
};

const EditPaymentTransaction = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeletePaymentTransaction = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default PaymentTransactionReduce;
