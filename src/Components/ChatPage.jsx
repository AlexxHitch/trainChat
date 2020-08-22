import React from 'react';
import socket from './socket';
import axios from 'axios';
import '../chatPage.css';


const ChatPage = (props) => {

    return (
        <div className="chat">
            <div className="chat_users">
                <b> Users list(): </b>
                <ul>
                    <li>User1</li>
                </ul>
            </div>
            <div className="chat_messeges">
                <div className="messeges">
                    <div className="messege">
                        <div>
                            Lorem ipsum dolor sit amet, consectetur
                        </div>
                        <div>
                            <span>>Test User</span>
                        </div>
                    </div>
                    <div className="messege">
                        <div>
                            Lorem ipsum dolor sit amet, consectetur
                        </div>
                        <div>
                            <span>>Test User</span>
                        </div>
                    </div>
                </div>
                <div className="send_messege_form">
                    <textarea rows="3"></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;