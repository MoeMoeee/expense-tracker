import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';


export const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext);

  const activateDelete = () => {
    deleteTransaction(transaction._id);
  }

  if (transaction.amount > 0) {
    return (
      <div className='mb-1'>
        <div id={transaction._id} className="pl-4 flex grow text-white font-medium border-2.5 border-none bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-600 rounded-md">
          <span className='pt-1.5'>{transaction.text}</span>
          <span className='pt-1.5 ml-auto mr-3'>
            ${numberWithCommas(transaction.amount)}
          </span>  

          {/* delete button */}
          <button className="px-2 py-2 inline-flex items-center bg-red-600 hover:bg-red-700 text-white text-lg font-lg rounded-sm" onClick={activateDelete}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
          </button>
        </div> 
      </div>
    )
  }

  else {
    return (
    <div className='mb-1'>
      <div id={transaction._id} className='pl-4 flex grow  text-white font-medium border-2 border-none bg-red-400 hover:bg-red-500 shadow-lg shadow-cyan-500/50 rounded-md'>
        <span className='pt-1.5'>{transaction.text}</span>
        <span className='pt-1.5 ml-auto mr-3'>-${Math.abs(numberWithCommas(transaction.amount))}</span>

        {/* delete button */}
        <button class="inline-flex items-center px-2 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-sm" onClick={activateDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
        </button>
      </div>
    </div>
    )
  }
}
