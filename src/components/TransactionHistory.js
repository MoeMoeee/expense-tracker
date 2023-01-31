import React from 'react'

export const TransactionHistory = () => {
  return (
    <div className='text-center max-w-sm mx-auto'>
        <div className='mb-4 text-lg font-bold border-l-0 border-r-0 border-t-0 border-solid border border-gray-400'>History</div>
        <div className='mb-2 pl-2 flex grow  text-white font-medium border-2 border-none bg-cyan-500 shadow-lg shadow-cyan-500/50'>
          Cash
          <span className='pl-72'>$20.0</span>
        </div>

        <div className='mb-2 pl-2 flex grow  text-white font-medium border-2 border-none bg-cyan-500 shadow-lg shadow-cyan-500/50'>
          Cash
          <span className='pl-72'>$10.0</span>
        </div>
    </div>
  )
}
