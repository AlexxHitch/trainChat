import React from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:1000');

const App = () => {
  return (
    <div className="App">
      hello!
    </div>
  );
}

export default App;
