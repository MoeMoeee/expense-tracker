import React from 'react'

export const Transaction = ({transaction}) => {
  if (transaction.amount > 0) {
    return (
      <div className='mb-2 pl-4 flex grow  text-white font-medium border-2 border-none bg-cyan-500 shadow-lg shadow-cyan-500/50'>{transaction.text}
        <span className='ml-auto mr-6'>${transaction.amount}</span>
      </div>
    )
  }

  else {
    return (
    <div className='mb-2 pl-4 flex grow  text-white font-medium border-2 border-none bg-red-500 shadow-lg shadow-cyan-500/50'>{transaction.text}
      <span className='ml-auto mr-6'>-${-transaction.amount}</span>
    </div>
    )
  }
}
