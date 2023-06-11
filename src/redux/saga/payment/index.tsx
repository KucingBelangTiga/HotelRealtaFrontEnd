import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeBank from "../../constant/payment/bankConstant";
import * as ActionTypeEntitys from "../../constant/payment/entityConstant";
import * as ActionTypePaymentGateway from "../../constant/payment/paymentGatewayConstant";
import * as ActionTypeUserAccount from "../../constant/payment/userAccountConstant";
import * as ActionTypePaymentTransaction from "../../constant/payment/paymentTransactionConstant";
import * as ActionTypeTopUp from "../../constant/payment/topUpConstan";
import { handleGetAllBank, handleGetBank, handleAddBank, handleFindBank, handleEditBank, handleDeleteBank } from "../payment/bankSaga";
import { handleAddEntitys, handleGetEntitys, handleFindEntitys, handleEditEntitys, handleDeleteEntitys } from "../payment/entitySaga";
import { handleAddPaymentGateway, handleGetPaymentGateway, handleGetAllPaymentGateway, handleFindPaymentGateway, handleEditPaymentGateway, handleDeletePaymentGateway } from "../payment/paymentGatewaySaga";
import { handleAddUserAccount, handleGetAllUserAccount, handleGetUserAccount, handleFindUserAccount, handleEditUserAccount, handleDeleteUserAccount, handleCurrAccountSource, handleCurrAccountTarget } from "../payment/userAccountSaga";
import { handleAddPaymentTransaction, handleGetPaymentTransaction, handleGetAllPaymentTransaction, handleFindPaymentTransaction, handleEditPaymentTransaction, handleDeletePaymentTransaction } from "../payment/paymentTransactionSaga";
import { handleCreditAccount, handleDebitAccount, handleCreditTransaction, handleDebitTransaction } from "../payment/topUpSaga";

function* watchAll() {
  yield all([
    // Banks
    takeEvery(ActionTypeBank.GET_ALL_BANK_REQUEST, handleGetAllBank),
    takeEvery(ActionTypeBank.GET_BANK_REQUEST, handleGetBank),
    takeEvery(ActionTypeBank.ADD_BANK_REQUEST, handleAddBank),
    takeEvery(ActionTypeBank.FIND_BANK_REQUEST, handleFindBank),
    takeEvery(ActionTypeBank.EDIT_BANK_REQUEST, handleEditBank),
    takeEvery(ActionTypeBank.DEL_BANK_REQUEST, handleDeleteBank),
    // Entitys
    takeEvery(ActionTypeEntitys.GET_ENTITYS_REQUEST, handleGetEntitys),
    takeEvery(ActionTypeEntitys.ADD_ENTITYS_REQUEST, handleAddEntitys),
    takeEvery(ActionTypeEntitys.FIND_ENTITYS_REQUEST, handleFindEntitys),
    takeEvery(ActionTypeEntitys.EDIT_ENTITYS_REQUEST, handleEditEntitys),
    takeEvery(ActionTypeEntitys.DEL_ENTITYS_REQUEST, handleDeleteEntitys),
    // Payment Gateway
    takeEvery(ActionTypePaymentGateway.GET_ALL_PAYMENTGATEWAY_REQUEST, handleGetAllPaymentGateway),
    takeEvery(ActionTypePaymentGateway.GET_PAYMENTGATEWAY_REQUEST, handleGetPaymentGateway),
    takeEvery(ActionTypePaymentGateway.ADD_PAYMENTGATEWAY_REQUEST, handleAddPaymentGateway),
    takeEvery(ActionTypePaymentGateway.FIND_PAYMENTGATEWAY_REQUEST, handleFindPaymentGateway),
    takeEvery(ActionTypePaymentGateway.EDIT_PAYMENTGATEWAY_REQUEST, handleEditPaymentGateway),
    takeEvery(ActionTypePaymentGateway.DEL_PAYMENTGATEWAY_REQUEST, handleDeletePaymentGateway),
    // User Account
    takeEvery(ActionTypeUserAccount.GET_ALL_USERACCOUNT_REQUEST, handleGetAllUserAccount),
    takeEvery(ActionTypeUserAccount.GET_USERACCOUNT_REQUEST, handleGetUserAccount),
    takeEvery(ActionTypeUserAccount.GET_CURACCOUNT_SOURCE_REQUEST, handleCurrAccountSource),
    takeEvery(ActionTypeUserAccount.GET_CURACCOUNT_TARGET_REQUEST, handleCurrAccountTarget),
    takeEvery(ActionTypeUserAccount.ADD_USERACCOUNT_REQUEST, handleAddUserAccount),
    takeEvery(ActionTypeUserAccount.FIND_USERACCOUNT_REQUEST, handleFindUserAccount),
    takeEvery(ActionTypeUserAccount.EDIT_USERACCOUNT_REQUEST, handleEditUserAccount),
    takeEvery(ActionTypeUserAccount.DEL_USERACCOUNT_REQUEST, handleDeleteUserAccount),
    // Payment Transaction
    takeEvery(ActionTypePaymentTransaction.GET_ALL_PAYMENTTRANSACTION_REQUEST, handleGetAllPaymentTransaction),
    takeEvery(ActionTypePaymentTransaction.GET_PAYMENTTRANSACTION_REQUEST, handleGetPaymentTransaction),
    takeEvery(ActionTypePaymentTransaction.ADD_PAYMENTTRANSACTION_REQUEST, handleAddPaymentTransaction),
    takeEvery(ActionTypePaymentTransaction.FIND_PAYMENTTRANSACTION_REQUEST, handleFindPaymentTransaction),
    takeEvery(ActionTypePaymentTransaction.EDIT_PAYMENTTRANSACTION_REQUEST, handleEditPaymentTransaction),
    takeEvery(ActionTypePaymentTransaction.DEL_PAYMENTTRANSACTION_REQUEST, handleDeletePaymentTransaction),
    // TopUp
    takeEvery(ActionTypeTopUp.ADD_CREDIT_ACCOUNT_REQUEST, handleCreditAccount),
    takeEvery(ActionTypeTopUp.ADD_DEBIT_ACCOUNT_REQUEST, handleDebitAccount),
    takeEvery(ActionTypeTopUp.ADD_CREDIT_TRANSACTION_REQUEST, handleCreditTransaction),
    takeEvery(ActionTypeTopUp.ADD_DEBIT_TRANSACTION_REQUEST, handleDebitTransaction),
  ]);
}

export default watchAll;
