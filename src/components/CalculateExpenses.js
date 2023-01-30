import React from 'react'

export const CalculateExpenses = () => {
  return (
    <div className='max-w-sm border-solid border-2 bg-slate-200 p-5 flex space-x-2 m-5 shadow-gray-50	'>
        <div>
            <h4>Income</h4>
            <p>
                <span className='text-green'>+</span>
                $0.00
            </p>
        </div>

        <div className='ml-7 flex-col place-content-end'>
            <h4>Expense</h4>
            <p>
                <span className='text-red'>-</span>
                $0.00
            </p>
        </div>
    </div>
  )
}
