import React from 'react';
import './App.css';
import Table from './components/Table/Table';
import Score from './components/Score';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Score/>
      <Table/>
      <Button/>
      <h3 id="message">You win!</h3>
    </div>
  );
}

export default App;
