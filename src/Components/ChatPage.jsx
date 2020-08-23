import React from 'react';
import socket from './socket';
import axios from 'axios';
import '../chatPage.css';

const ChatPage = ({users, messages}) => {
console.log(users)
    return (
        <div className="chat">
            <div className="chat_users">
                <b> Users list({users.length}): </b>
                <ul>
                    {users.map((name, index) => (<li key={name + index}>{name}</li>))}
                </ul>
            </div>
            <div className="chat_messages">
                <div className="messages">
                    <div className="message">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <div>
                            <span>>Test User</span>
                        </div>
                    </div>
                    <div className="message">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <div>
                            <span>>Test User</span>
                        </div>
                    </div>
                </div>
                <div className="send_message_form">
                    <textarea rows="3"></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;