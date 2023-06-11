import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { FormikProvider, useFormik } from "formik";
import Layout from "@/src/components/layouts";
import { useDispatch, useSelector } from "react-redux";
import { GetBankRequest } from "@/src/redux/action/payment/bankAction";
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";
import { GetUserAccountRequest } from "@/src/redux/action/payment/userAccountAction";
import { CreditAccountRequest, DebitAccountRequest, CreditTransactionRequest, DebitTransactionRequest } from "@/src/redux/action/payment/topUpAction";
import { GetPaymentGatewayRequest } from "@/src/redux/action/payment/paymentGatewayAction";
import userAccountApi from "@/src/api/payment/userAccountApi";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import LayoutPayment from "../layout";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { banks } = useSelector((state: any) => state.bankState);
  const { paymentGateways } = useSelector((state: any) => state.paymentGatewayState);
  const { userAccounts } = useSelector((state: any) => state.userAccountState);
  const [selectedBankSource, setSelectedBankSource] = useState<any>(banks[0]);
  const [selectedPaymentGatewayTarget, setSelectedPaymentGatewayTarget] = useState<any>(paymentGateways[0]);
  const [itemSource, setItemSource] = useState<any[]>([]);
  const [itemTarget, setItemTarget] = useState<any[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const toast = useRef<any>(null);
  const [isButtonDisabled, SetButtonDisabled] = useState<boolean>(false);
  const [source, setSource] = useState({
    account: undefined,
    saldo: undefined,
    entity: undefined,
    typeAccount: undefined,
    user: undefined,
  });
  const [target, setTarget] = useState({
    account: undefined,
    saldo: undefined,
    entity: undefined,
    typeAccount: undefined,
    user: undefined,
  });
  const [userId, setUserId] = useState<number>();

  useEffect(() => {
    dispatch(GetBankRequest());
    dispatch(GetPaymentGatewayRequest());
    dispatch(GetUserAccountRequest());
    handleDisableButtonTransfer();
  }, [dispatch, refresh, isButtonDisabled]);

  const handleCurrValue =
    (name: any) =>
    (event: any): any => {
      if (name == "sourceAccount") {
        formik.setFieldValue("source_account", event.target.value);
        userAccountApi.findCurrAccountSource(event.target.value).then((data) => {
          setSource({
            ...source,
            account: event.target.value,
            saldo: data.usacSaldo,
            typeAccount: data.usacType,
            entity: data.usacEntityId,
            user: data.usacUserId,
          });
          setUserId(data.usacUserId);
          console.log("source user ini", userId);
          if (event.target.value === target.account) {
            showToast("Source and Target cannot be the same!", "warn");
            SetButtonDisabled(true);
          } else {
            SetButtonDisabled(false);
          }
        });
      } else if (name == "targetAccount") {
        formik.setFieldValue("target_account", event.target.value);
        userAccountApi.findCurrAccountTarget(event.target.value).then((data) => {
          setTarget({
            ...target,
            account: event.target.value,
            saldo: data.usacSaldo,
            typeAccount: data.usacType,
            entity: data.usacEntityId,
            user: data.usacUserId,
          });
        });
        if (source.account === event.target.value) {
          showToast("Source and Target cannot be the same!", "warn");
          SetButtonDisabled(true);
        } else {
          SetButtonDisabled(false);
        }
      }
    };

  const formik = useFormik({
    initialValues: {
      transfer: "",
      source_account: "",
      target_account: "",
      user_id: "",
    },
    onSubmit: async (values, { resetForm }) => {
      if (Number(values.transfer) > Number(source.saldo)) {
        showToast("Nominal must be less than the source balance", "error");
        handleDisableButtonTransfer();
        return;
      }
      const numberAccountCredit = "TP#" + moment(Date()).format("YYYYMMDD") + "-" + Math.floor(1000 + Math.random() * 9000);
      const numberAccountDebit = "TP#" + moment(Date()).format("YYYYMMDD") + "-" + Math.floor(1000 + Math.random() * 9000);
      const orderNumber = moment(Date()).format("YYYYMMDD") + "-" + Math.floor(1000 + Math.random() * 9000);
      let payloadCreditTransaction = {
        patrTrxId: numberAccountCredit,
        patrDebet: "0",
        patrCredit: values.transfer,
        patrType: "TP",
        patrModifiedDate: new Date(),
        patrNote: "Top Up",
        patrOrderNumber: orderNumber,
        patrSourceId: values.source_account,
        patrTargetId: values.target_account,
        patrUser: userId,
      };
      let payloadDebetTransaction = {
        patrTrxId: numberAccountDebit,
        patrDebet: values.transfer,
        patrCredit: "0",
        patrType: "TP",
        patrModifiedDate: new Date(),
        patrNote: "Top Up",
        patrOrderNumber: orderNumber,
        patrSourceId: values.source_account,
        patrTargetId: values.target_account,
        patrUser: userId,
      };
      const payloadCredit = {
        usacEntityId: source.entity,
        usacUserId: source.user,
        usacSaldo: source.saldo,
        usacNominal: values.transfer,
      };
      const payloadDebit = {
        usacEntityId: target.entity,
        usacUserId: target.user,
        usacSaldo: target.saldo,
        usacNominal: values.transfer,
      };
      confirmDialog({
        message: "Are you sure want to Transfer?",
        header: "Transfer Confirmation",
        icon: "pi pi-exclamation-triangle",
        acceptLabel: "Yes",
        rejectLabel: "No",
        accept: () => {
          dispatch(CreditAccountRequest(payloadCredit));
          dispatch(DebitAccountRequest(payloadDebit));
          dispatch(CreditTransactionRequest(payloadCreditTransaction));
          dispatch(DebitTransactionRequest(payloadDebetTransaction));
          showToast("Transfer successfully", "success");
          setRefresh(true);
          resetForm();
          router.push("/payment/transaction");
        },
        reject: () => {
          showToast("Transfer Cancelled", "warn");
        },
      });
      if (Object.keys(formik.errors).length > 0) {
        showToast("Fixing errors in forms", "error");
        return;
      }
    },
  });
  const showToast = (message: string, severity: string) => {
    if (toast.current) {
      toast.current.show({ severity, summary: "Information", detail: message, life: 3000 });
    }
  };
  const SearchSource = (event: AutoCompleteCompleteEvent) => {
    setTimeout(() => {
      let _filteredBankSource;
      if (!event.query.trim().length) {
        _filteredBankSource = [...banks];
      } else {
        _filteredBankSource = banks.filter((item: any) => {
          console.log("bank", item.bankName);
          return item.bankName.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
      setItemSource(_filteredBankSource);
    }, 250);
  };
  const SearchTarget = (event: AutoCompleteCompleteEvent) => {
    setTimeout(() => {
      let _filteredPagaTarget;
      if (!event.query.trim().length) {
        _filteredPagaTarget = [...paymentGateways];
      } else {
        _filteredPagaTarget = paymentGateways.filter((item: any) => {
          return item.pagaName.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
      setItemTarget(_filteredPagaTarget);
    }, 250);
  };
  const itemTemplateSource = (item: any) => {
    return (
      <div className="flex align-items-center">
        <div>{item.bankName}</div>
      </div>
    );
  };
  const itemTemplateTarget = (item: any) => {
    return (
      <div className="flex align-items-center">
        <div>{item.pagaName}</div>
      </div>
    );
  };
  const handleDisableButtonTransfer = () => {
    const button = document.getElementById("transfer") as HTMLButtonElement | null;
    if (button) {
      if (isButtonDisabled) {
        button.setAttribute("disabled", "disabled");
        button.style.backgroundColor = "gray";
      } else {
        button.removeAttribute("disabled");
        button.style.backgroundColor = "blue";
      }
    }
  };
  return (
    <div>
      <Layout>
        <LayoutPayment>
          <>
            <FormikProvider value={formik}>
              <form onSubmit={formik.handleSubmit} className="flex m-4 min-h-screen">
                <div className="w-1/2 my-4 border-r-4 dark:border-r-white-100 border-r-gray-500">
                  <h1 className="text-center my-4 font-bold text-3xl">Source</h1>
                  <div className="gap-10 flex pl-1">
                    <h1 className="h-16 my-4 font-bold text-xl mr-4">Source Name</h1>
                    <Toast ref={toast} />
                    <AutoComplete
                      id="bankEntityId"
                      name="bankEntityId"
                      field="bankName"
                      value={selectedBankSource}
                      suggestions={itemSource}
                      completeMethod={SearchSource}
                      onChange={(e: any) => setSelectedBankSource(e.value)}
                      itemTemplate={itemTemplateSource}
                      className="h-12 mt-2"
                      placeholder="Search Bank"
                    />
                  </div>
                  <div className="w-1/2 flex gap-28 mt-10">
                    <label className="text-black dark:text-white text-xl font-bold mb-2">Account</label>
                    <select name="patrSourceId" id="patrSourceId" className="border rounded py-2 px-3 text-black border-slate-900 w-auto" onChange={handleCurrValue("sourceAccount")} required>
                      <option value="" selected disabled hidden className="text-black ">
                        -Select Account-
                      </option>
                      {userAccounts &&
                        userAccounts.map((item: any, index: any) => {
                          return (
                            <>
                              <option value={item.usacAccountNumber} key={index}>
                                {item.usacAccountNumber}
                              </option>
                              ;
                            </>
                          );
                        })}
                    </select>
                  </div>
                  <div className="flex gap-8 mt-20">
                    <label className="text-black dark:text-white text-2xl font-bold">Current Saldo</label>
                    <input className="border rounded w-[202px] py-2 px-3 text-black border-slate-900 " type="text" name="saldo" id="saldo" defaultValue={source == null ? " " : source.saldo} disabled />
                  </div>
                  <div className="flex gap-2 mt-20">
                    <Toast ref={toast} className="mt-14" />
                    <ConfirmDialog />
                    <button id="transfer" className="group h-18 w-[30%] border border-green-500 rounded-md bg-coldBlue hover:bg-moderateBlue px-4 py-2 -mt-1 text-white relative overflow-hidden text-xl">
                      Transfer
                    </button>
                    <input
                      type="number"
                      name="transfer"
                      id="transfer"
                      className="h-14 pl-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[50%] ml-4"
                      placeholder="Nominal Transfer"
                      value={formik.values.transfer}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
                <div className="w-1/2 relative my-4 ml-10">
                  <h1 className="text-center my-4 font-bold text-3xl">Target</h1>
                  <div className="gap-10 flex pl-1">
                    <h1 className="h-16 my-4 font-bold text-xl">Target Payment</h1>
                    <Toast ref={toast} />
                    <AutoComplete
                      id="bankEntityId"
                      name="bankEntityId"
                      field="pagaName"
                      value={selectedPaymentGatewayTarget}
                      suggestions={itemTarget}
                      completeMethod={SearchTarget}
                      onChange={(e: any) => setSelectedPaymentGatewayTarget(e.value)}
                      itemTemplate={itemTemplateTarget}
                      className="h-12 mt-2"
                      placeholder="Search Bank"
                    />
                  </div>
                  <div className="w-1/2 flex gap-28 mt-10">
                    <label className="text-black dark:text-white text-xl font-bold mb-2">Account</label>
                    <select name="usacAccountNumber" id="usacAccountNumber" className=" border rounded py-2 px-3 text-black border-slate-900" onChange={handleCurrValue("targetAccount")} required>
                      <option value="" selected disabled hidden className="text-black ">
                        -Select Account-
                      </option>
                      {userAccounts &&
                        userAccounts.map((item: any) => {
                          return (
                            <>
                              <option value={item.usacAccountNumber} key={item.usacEntityId}>
                                {item.usacAccountNumber}
                              </option>
                              ;
                            </>
                          );
                        })}
                    </select>
                  </div>
                  <div className="flex gap-8 mt-20">
                    <label className="text-black dark:text-white text-2xl font-bold">Current Saldo</label>
                    <input className="border rounded w-[202px] py-2 px-3 text-black border-slate-900 " type="text" name="saldo" id="saldo" defaultValue={target == null ? " " : target.saldo} disabled />
                  </div>
                </div>
              </form>
            </FormikProvider>
          </>
        </LayoutPayment>
      </Layout>
    </div>
  );
}
