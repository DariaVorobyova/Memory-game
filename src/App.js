import React from 'react';
import './App.css';
import Table from './components/Table/Table';
import Score from './components/Score';
import Button from './components/Button';
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      <Score/>
      <Table/>
      <Button/>
      <Message/>
    </div>
  );
}

export default App;
