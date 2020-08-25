import React, { useState } from 'react';
import socket from './socket';
import axios from 'axios';
import '../startPage.css';
import { Button } from 'react-bootstrap';


const StartPage = (props) => {

    const [roomId, setRoomId] = useState('');
    const onChangeRoomId = (e) => {
        setRoomId(e.target.value);
    }
    const [userName, setUserName] = useState('');
    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    }
    const [isLoading, setLoading] = useState(false);

    const onEnter = async () => {

        if(!roomId || !userName){
            return alert("Incorrect data");
        }
        const obj = {
                roomId,
                userName
        }
        setLoading(true);
        await axios.post('/rooms', obj).then(() => {
            props.onLogin(obj);
        })
    }

    return (
        <div className="start-page">
            <div className="start-page__item">
                <input type="text" placeholder="Room id" value={roomId} onChange={onChangeRoomId} />
            </div>
            <div className="start-page__item">
                <input type="text" placeholder="Username" value={userName} onChange={onChangeUserName} />
            </div>
            <div className="start-page__button">
                 <button className="btn btn-secondary btn-block" variant="secondary" disable={isLoading} onClick={onEnter}>
                    {isLoading ? 'JOIN...' : 'JOIN'}
                </button>
            </div>
        </div>
    )
}

export default StartPage;