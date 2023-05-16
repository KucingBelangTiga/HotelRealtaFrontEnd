import React, { useEffect, useRef, useState } from "react";
import { FormikProvider, useFormik } from "formik";
import Layout from "../../../components/layouts";
import { useDispatch, useSelector } from "react-redux";
import { AddPaymentTransactionRequest } from "../../../redux/action/payment/paymentTransactionAction";
import { GetBankRequest, FindBankRequest } from "../../../redux/action/payment/bankAction";
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";
import { Toast } from "primereact/toast";
import LayoutPayment from "../layout";
import { GetUserAccountFailed, GetUserAccountRequest } from "@/src/redux/action/payment/userAccountAction";

interface Bank {
  bankEntityId: number;
  bankCode: string;
  bankName: string;
}

export default function Index() {
  const dispatch = useDispatch();
  const { banks } = useSelector((state: any) => state.bankState);
  const { userAccounts } = useSelector((state: any) => state.userAccountState);
  const [selectedBankSource, setSelectedBankSource] = useState<Bank>(banks[0]);
  const [selectedBankTarget, setSelectedBankTarget] = useState<Bank>(banks[0]);
  const [itemSource, setItemSource] = useState<Bank[]>([]);
  const [itemTarget, setItemTarget] = useState<Bank[]>([]);
  const [userAccountSource, setUserAccountSource] = useState<any[]>([]);
  const [userAccountTarget, setUserAccountTarget] = useState<any[]>([]);
  const [currentSaldoSource, setCurrentSaldoSource] = useState<any[]>([]);
  const [currentSaldoTarget, setCurrentSaldoTarget] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const toast = useRef(null);

  useEffect(() => {
    // dispatch(FindBankRequest(payload.id));
    dispatch(GetUserAccountRequest());
    setCurrentSaldoSource(userAccounts);
    setCurrentSaldoTarget(userAccounts);
    setUserAccountSource(userAccounts);
    setUserAccountTarget(userAccounts);
    console.log("saldosearch", userAccounts);
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      bankEntitySource: "",
      usacSaldo: "",
      patrSourceId: "",
      patrDebet: "",
      patrTargetId: "",
    },
    onSubmit: async (values) => {
      let payload = new FormData();
      payload.append("bankEntitySource", String(selectedBankSource.bankEntityId));
      payload.append("bankEntityTarget", String(selectedBankTarget.bankEntityId));
      payload.append("patrSourceId", values.patrSourceId);
      payload.append("patrDebet", values.patrDebet);
      dispatch(AddPaymentTransactionRequest(payload));
      setRefresh(true);
    },
  });

  const SearchSource = (event: AutoCompleteCompleteEvent) => {
    setTimeout(() => {
      let _filteredBankSource;
      if (!event.query.trim().length) {
        _filteredBankSource = [...banks];
      } else {
        _filteredBankSource = banks.filter((item: any) => {
          return item.bankName.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
      setItemSource(_filteredBankSource);
    }, 250);
  };

  const SearchTarget = (event: AutoCompleteCompleteEvent) => {
    setTimeout(() => {
      let _filteredBankTarget;
      if (!event.query.trim().length) {
        _filteredBankTarget = [...banks];
      } else {
        _filteredBankTarget = banks.filter((item: any) => {
          return item.bankName.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
      setItemTarget(_filteredBankTarget);
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
        <div>{item.bankName}</div>
      </div>
    );
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
                  <div className="left-0 gap-6 flex pl-1 pointer-events-none">
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
                    />
                  </div>
                  <div className="w-1/2 flex gap-28 mt-10">
                    <label className="text-black dark:text-white text-xl font-bold mb-2">Account</label>
                    <select name="patrSourceId" id="patrSourceId" className="border rounded py-2 px-3 text-black border-slate-900 w-auto" onChange={formik.handleChange} onBlur={formik.handleBlur}>
                      <option value="" selected disabled hidden className="text-black">
                        Choose Account
                      </option>
                      {userAccountSource &&
                        userAccountSource.map((item: any) => {
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
                    {/* { GetUserAccountRequest()
                    userAccountSource && userAccountSource.usacAccountNumber === } */}
                    <input
                      className="border rounded w-[45%] py-2 px-3 text-black border-slate-900 "
                      type="text"
                      name="patrDebet"
                      id="patrDebet"
                      onChange={formik.handleChange}
                      // defaultValue={currentSaldoSource ? currentSaldoSource.usacSaldo : null}
                      value={formik.values.patrDebet}
                      placeholder="Current Saldo"
                      disabled
                    />
                  </div>
                  <div className="flex gap-2 mt-20">
                    <button className="group h-18 w-[30%] border border-green-500 rounded-md bg-coldBlue hover:bg-moderateBlue px-4 py-2 m-2 text-white relative overflow-hidden text-xl">Transfer</button>
                    <input
                      type="text"
                      id="nominal"
                      className="h-14 pl-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[55%]"
                      placeholder="Nominal Transfer"
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
                <div className="w-1/2 relative my-4 ml-10">
                  <h1 className="text-center my-4 font-bold text-3xl">Target</h1>
                  <div className="left-0 gap-14 flex pl-1 pointer-events-none">
                    <h1 className="my-4 font-bold text-xl mr-4">Target</h1>
                    <Toast ref={toast} />
                    <AutoComplete
                      id="bankEntityId"
                      name="bankEntityId"
                      field="bankName"
                      multiple
                      value={selectedBankTarget}
                      suggestions={itemTarget}
                      completeMethod={SearchTarget}
                      onChange={(e: any) => setSelectedBankTarget(e.value)}
                      itemTemplate={itemTemplateTarget}
                      className="h-16 mt-[18px]"
                      placeholder="Search Bank"
                    />
                  </div>
                  <div className="w-1/2 flex gap-28 mt-10">
                    <label className="text-black dark:text-white text-xl font-bold mb-2">Account</label>
                    <select name="usacAccountNumber" id="usacAccountNumber" className=" border rounded py-2 px-3 text-black border-slate-900" onChange={formik.handleChange} onBlur={formik.handleBlur}>
                      <option value="" selected disabled hidden className="text-black">
                        Choose Account
                      </option>
                      {userAccountTarget &&
                        userAccountTarget.map((item: any) => {
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
                    <input
                      className="border rounded w-[40%] py-2 px-3 text-black border-slate-900 "
                      type="text"
                      name="usacSaldo"
                      id="usacSaldo"
                      onChange={formik.handleChange}
                      // value={formik.values.usacSaldo}
                      defaultValue={currentSaldoTarget ? currentSaldoTarget.values.usacSaldo : null}
                      placeholder="Current Saldo"
                      disabled
                    />
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
