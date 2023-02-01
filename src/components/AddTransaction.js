import React, { useState } from 'react';

export const AddTransaction = () => {
  const [text, setText] = useState('');

  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    // searchText(text);
  }

  return (
    <div className='max-w-sm mx-auto mt-10'>
      <div className='text-center text-lg font-bold border-l-0 border-r-0 border-t-0 border-solid border border-gray-400'>Add Transaction</div>
      <div>
        <div className='mt-5'>
          <span className='font-bold text-lg'>Transaction Type:</span>  
        </div>
      
        <div className='max-w-sm rounded overflow-hidden my-5 mx-auto'>
          <form onSubmit={onSubmit} className="w-full max-w-sm">
            <div className="flex items-center border-b-2 border-teal-500 py-2">
              <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter the transaction type..." />

            </div>
          </form>
        </div>
      </div>

      <div>
        <span className='font-bold text-lg'>Amount: {"\n"}
          
        </span>
        <span className='font-bold text-lg'>
          (Positive is Income, Negative is Expense)
        </span>
      </div>

      <div className='max-w-sm rounded overflow-hidden my-5 mx-auto'>
        <form onSubmit={onSubmit} className="w-full max-w-sm">
          <div className="flex items-center border-b-2 border-teal-500 py-2">
            <input onChange={e => setAmount(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter the amount..." />

          </div>
        </form>
      </div>

      <div className='text-center'>
        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
              Add Transaction
        </button>
      </div>
     
    </div>
    )
}
