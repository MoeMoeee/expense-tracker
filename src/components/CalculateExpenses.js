import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

export const CalculateExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = total - income;
    const finalExpense = Math.abs(expense).toFixed(2);

  return (
    <div className='max-w-xs mx-auto flex justify-center bg-gray-300 p-5 space-x-2 m-5 shadow-gray-50 rounded-lg'>
        <div className='mr-8 flex'>
            <h4 className='font-bold'>INCOME
            <div className='flex justify-center  font-bold rounded-lg text-green-700 text-lg'>
                ${income}
            </div>
            </h4>
        </div>

        <div className='mx-auto flex'>
            <h4 className='font-bold'>EXPENSE
            <div className='text-center place-items-center justify-center font-bold text-red-700 text-lg'>
                ${finalExpense}
            </div>
            </h4>
        </div>
    </div>
  )
}
