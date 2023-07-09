import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';

export const TransactionHistory = () => {
  const {transactions, getTransaction} = useContext(GlobalContext);

  useEffect( () => {
    getTransaction();
  }, []
  );

  return (
    <div className='text-center max-w-lg mx-auto'>
      <div className='mb-4 text-2xl font-bold border-l-0 border-r-0 border-t-0 border-solid border border-gray-500 pb-4'>History</div>

      {transactions.map(transaction => (
        <Transaction
          key = {transaction.id}
          transaction = {transaction}
        />
      ))}

    </div>
  )
}
