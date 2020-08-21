import React from 'react';
import './App.css';
import socket from './Components/IoClient';
import StartPage from './Components/StartPage';

const App = () => {
  return (
    <div className="App">
      <StartPage />
    </div>
  );
}

export default App;
