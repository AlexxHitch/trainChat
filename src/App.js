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
    setUsers(data.users)
  }

  const setUsers = (users) => {
    dispatch({
      type: 'SET_USERS',
      payload: users
    });
  }

  React.useEffect(() => {
    socket.on('ROOM:SET_USERS', setUsers);
  },[]);

  return (
    <div>
      {!state.joined ? <StartPage onLogin={onLogin} /> : <ChatPage {...state} /> }
    </div>
  );
}

export default App;
