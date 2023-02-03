import React from 'react'

export const Transaction = ({transaction}) => {
  return (
    <div>
        <div className='mb-2 pl-2 flex grow  text-white font-medium border-2 border-none bg-cyan-500 shadow-lg shadow-cyan-500/50'>{transaction.text}
        <span className='pl-72'>{transaction.amount}</span>
        </div>
    </div>
  )
}
