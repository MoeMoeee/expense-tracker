import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { CalculateExpenses } from './components/CalculateExpenses';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';

import './App.css';

function App() {
  return (
  
  <div>
    <Header/>
    <div className="containter"> 
      <Balance />
      <CalculateExpenses />
      <TransactionHistory />
      <AddTransaction />
      
    </div>
  </div>
  );
  
}

export default App;
