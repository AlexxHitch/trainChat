import React from 'react';
import socket from './socket';
import axios from 'axios';
import '../chatPage.css';

const ChatPage = ({users, messages, userName, roomId, onAddMessage}) => {

    const [messageValue, setMessageValue] = React.useState('');

    const onSendMessage = () => {
        socket.emit('ROOM:NEW_MESSAGE', {
            userName,
            roomId,
            text: messageValue
        });
        onAddMessage({userName, text: messageValue});
        setMessageValue('');
    }

    return (
        <div className="chat">
            <div className="chat_users">
                <b> Room {roomId} </b>
                <hr />
                <p><b> Users list({users.length}): </b></p>
                <ul>
                    {users.map((name, index) => (<li key={name + index}>{name}</li>))}
                </ul>
            </div>
            <div className="chat_messages">
                <div className="messages">
                    {messages.map((mess, index) => (
                        <div key={mess + index} className="message">
                            <div>
                                <p key={mess + index} >{mess.text}</p>
                            </div>
                            <div>
                                <span key={mess + index} >{mess.userName}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="send_message_form">
                    <textarea 
                    rows="3" 
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)} ></textarea>
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;