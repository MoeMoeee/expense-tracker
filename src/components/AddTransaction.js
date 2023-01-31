import React from 'react'

export const AddTransaction = () => {
  return (
    <div className=' max-w-sm mx-auto mt-4'>
      <div className='text-center text-lg font-bold border-l-0 border-r-0 border-t-0 border-solid border border-gray-400'>Add Transaction</div>
      <div>
        {/* Type */}
        <div>
          <span className='font-bold text-lg'>Transaction Type:</span>  
        </div>
        <div>
          <span className='font-bold text-lg'>Amount: {"\n"}
            
          </span>
          <span className='font-bold text-lg'>
            (Positive is Income, Negative is Expense)
          </span>
        </div>

      </div>
    </div>
    )
}
