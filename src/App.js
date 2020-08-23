import React from 'react';
import './App.css';
import socket from './Components/socket';
import StartPage from './Components/StartPage';
import reducer from './reducer';
import ChatPage from './Components/ChatPage';
import axios from 'axios';


const App = () => {

  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: []
  });

  const onLogin = async (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj
    });
    socket.emit('ROOM:JOIN', obj);
    const {data} = await axios.get(`/rooms/${obj.roomId}`);
    dispatch({
      type: 'SET_DATA',
      payload: data
    })
  }

  const setUsers = (users) => {
    dispatch({
      type: 'SET_USERS',
      payload: users
    });
  }



  const addMessage = (message) => {
    dispatch({
      type: 'NEW_MESSAGE',
      payload: message
    });
  }

  React.useEffect(() => {
    socket.on('ROOM:SET_USERS', setUsers);
    socket.on('ROOM:NEW_MESSAGE', addMessage);
  },[]);

  return (
    <div>
      {!state.joined ? <StartPage onLogin={onLogin} /> : <ChatPage {...state} onAddMessage={addMessage} /> }
    </div>
  );
}

export default App;
