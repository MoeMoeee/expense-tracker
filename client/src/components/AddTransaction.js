import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const {addTransaction} = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: count,
      text, 
      amount: parseInt(amount)
    }
    
    addTransaction(newTransaction);
  }

  return (
    // allow to input the transaction type
    <div className='max-w-lg mx-auto mt-10'>
      <div className=' text-center text-2xl font-bold border-l-0 border-r-0 border-t-0 border-solid border border-gray-500 pb-4'>Add Transaction</div>
      <div>
        {/* the transaction type */}
        <div className='mt-5 '>
          <span className='font-bold text-xl sm: ml-3 sm: mr-3'>Transaction Type:</span>  
        </div>

        {/*  create the form to input transaction type */}
        <div className='max-w-lg rounded overflow-hidden my-5 mx-auto'>
          <form onSubmit={onSubmit} className="w-full max-w-lg">
            <div className="sm: ml-3 sm: mr-3 flex items-center border-b-2 border-teal-500 py-2">
              <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="E.g. grocery, salary..." />
            </div>
            
            {/* transaction amount */}
            <div className='mt-8 flex sm: ml-3 sm: mr-3'>
              <div className="mt-8">
                <span className="font-bold text-xl sm:ml-3 sm:mr-3">Amount: (Positive is Income, Negative is Expense) </span>
              </div>
            </div>


            {/*  create the form to input transaction type */}
            <div className='sm: ml-3 sm: mr-3 max-w-lg rounded overflow-hidden my-5 mx-auto'>
              <div className="flex items-center border-b-2 border-teal-500 py-2">
                <input onChange={e => setAmount(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter the amount..." />
              </div>
            </div>

            {/*  create the button to add transaction */}
            <div className='text-center'>
              <button onClick={() => setCount({ count: count + 1 })} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                    Add Transaction
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}
