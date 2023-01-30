import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Header';

import './App.css';

function App() {
  return (
  
  <div>
    <Header/>
    <div className="containter"> 
      <Balance />
    </div>
  </div>
  );
  
}

export default App;
