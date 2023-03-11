import React, { useEffect, useState } from "react";
import { Income, Accounts, Expenses } from "components";
import { useDispatch } from "react-redux";
import { openPopupTransaction, setTransaction } from "__data__/actions/transaction";
import Axios from "axios";

export const CardsContainer: React.FC = () => {
  const [data, setData] = useState<{
    accounts? :any
    incomes?: any
    expenses?: any
  }>()
  const dispatch = useDispatch();
  const transactionHandler = (
    open: boolean,
    idFrom: number,
    idWhere: number,
    typeFrom: string,
    typeWhere: string
  ) => {
   dispatch(setTransaction({idFrom, typeFrom, idWhere, typeWhere}))
   dispatch(openPopupTransaction(open))
  };

  const handleData = () => {
    try {

      Axios.post('/api/accounts', {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Credentials': 'true'
        }
      })
      .then(({data}) => setData(data))

    } catch (error) {
      console.log("Request Error", error)
    }
  }

  useEffect(() => {
    handleData()
  }, [])

  return (
    <>
      <Income transactionOpen={transactionHandler} items={data?.incomes} />
      <Accounts transactionOpen={transactionHandler} items={data?.accounts} />
      <Expenses transactionOpen={transactionHandler} items={data?.expenses} />
    </>
  );
};
