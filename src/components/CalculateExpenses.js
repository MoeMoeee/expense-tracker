import React from 'react'

export const CalculateExpenses = () => {
  return (
    <div className='max-w-xs mx-auto flex justify-center bg-slate-200 p-5 space-x-2 m-5 shadow-gray-50'>
        <div className='mr-8'>
            <h4>INCOME</h4>
            <p className='flex justify-center text-center font-bold rounded-lg text-green-700 text-lg'>
                $0.00
            </p>
        </div>

        <div className='mx-auto'>
            <h4>EXPENSE</h4>
            <p className='flex justify-center font-bold text-red-700 text-lg'>
                $0.00
            </p>
        </div>
    </div>
  )
}
