import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format';

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  
  return (
    <div className='text-center mt-11'>
        <div className='text-3xl mt-4 mb-2 font-bold'>Your balance is:</div>
        <div className='font-bold text-3xl text-yellow-800'>${numberWithCommas(total)}</div>
    </div>
  )
}
