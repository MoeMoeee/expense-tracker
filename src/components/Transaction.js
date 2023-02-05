import React from 'react'

export const Transaction = ({transaction}) => {
  if (transaction.amount > 0) {
    return (
      <>
        <div className="mb-2 pl-4 flex grow text-white font-medium border-2 border-none bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-600">{transaction.text}
          <span className='ml-auto mr-3'>
            ${transaction.amount}

          </span>
          <button class="inline-flex items-center px-2 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
          </button>
        </div>
      </>
    )
  }

  else {
    return (
    <div className='mb-2 pl-4 flex grow  text-white font-medium border-2 border-none bg-red-400 shadow-lg shadow-cyan-500/50'>{transaction.text}
      <span className='ml-auto mr-3'>-${-transaction.amount}</span>
      <button class="inline-flex items-center px-2 py-2 bg-red-600 hover:bg-red-800 text-white text-sm font-medium rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
      </button>
    </div>
    )
  }
}
