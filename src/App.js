import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { CalculateExpenses } from './components/CalculateExpenses';


import './App.css';

function App() {
  return (
  
  <div>
    <Header/>
    <div className="containter"> 
      <Balance />
      <CalculateExpenses />
    </div>
  </div>
  );
  
}

export default App;
