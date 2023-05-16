import * as ActionTypePaymentGateway from "../../constant/payment/paymentGatewayConstant";

const init_state = {
  paymentGateways: [],
  paymentGateway: [],
};

const PaymentGatewayReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionTypePaymentGateway.GET_PAYMENTGATEWAY_REQUEST:
      return { ...state };
    case ActionTypePaymentGateway.GET_PAYMENTGATEWAY_SUCCESS:
      return GetPaymentGateway(state, action);
    case ActionTypePaymentGateway.ADD_PAYMENTGATEWAY_REQUEST:
      return { ...state };
    case ActionTypePaymentGateway.ADD_PAYMENTGATEWAY_SUCCESS:
      return AddPaymentGateway(state, action);
    case ActionTypePaymentGateway.FIND_PAYMENTGATEWAY_REQUEST:
      return { ...state };
    case ActionTypePaymentGateway.FIND_PAYMENTGATEWAY_SUCCESS:
      return FindPaymentGateway(state, action);
    case ActionTypePaymentGateway.EDIT_PAYMENTGATEWAY_REQUEST:
      return { ...state };
    case ActionTypePaymentGateway.EDIT_PAYMENTGATEWAY_SUCCESS:
      return EditPaymentGateway(state, action);
    case ActionTypePaymentGateway.DEL_PAYMENTGATEWAY_REQUEST:
      return { ...state };
    case ActionTypePaymentGateway.DEL_PAYMENTGATEWAY_SUCCESS:
      return DeletePaymentGateway(state, action);
    default:
      return { ...state };
  }
};

const GetPaymentGateway = (state: any, action: any) => {
  return {
    ...state,
    paymentGateways: action.payload,
  };
};

const AddPaymentGateway = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    paymentGateways: [...state.paymentGateways, payload],
  };
};

const FindPaymentGateway = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    paymentGateway: payload,
  };
};

const EditPaymentGateway = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeletePaymentGateway = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default PaymentGatewayReduce;
