import React from 'react';
import socket from './IoClient';


const StartPage = (props) => {
    return (
        <div>
            <div>
                <input type="text" placeholder="Room id" />
            </div>
            <div>
                <input type="text" placeholder="Username" />
            </div>
            <div>
                <button>Enter</button>
            </div>
        </div>
    )
}

export default StartPage;