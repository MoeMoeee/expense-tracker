import React from 'react'

export const CalculateExpenses = () => {
  return (
    <div className='max-w-xs mx-auto text-center flex justify-center border-solid border-2 bg-slate-200 p-5 space-x-2 m-5 shadow-gray-50	'>
        <div className='mr-8'>
            <h4>Income</h4>
            <p>
                <span className='font-bold text-green-700 text-lg'>+</span>
                $0.00
            </p>
        </div>

        <div className='mxto'>
            <h4>Expense</h4>
            <p>
                <span className='font-bold text-red-700 text-lg'>-</span>
                $0.00
            </p>
        </div>
    </div>
  )
}
