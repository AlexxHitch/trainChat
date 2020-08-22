import React from 'react';
import './App.css';
import socket from './Components/socket';
import StartPage from './Components/StartPage';
import reducer from './reducer';
import ChatPage from './Components/ChatPage';


const App = () => {

  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null
  });

  const onLogin = (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj
    });
    socket.emit('ROOM:JOIN', obj);
  }

  React.useEffect(() => {
    socket.on('ROOM:JOINED', (users) => {
      console.log('новый пользователь ', users);
    });
  },[]);

  return (
    <div>
      {!state.joined ? <StartPage onLogin={onLogin} /> : <ChatPage /> }  
    </div>
  );
}

export default App;
