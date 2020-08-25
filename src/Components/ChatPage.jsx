import React, { useRef, useEffect } from 'react';
import socket from './socket';
import axios from 'axios';
import '../chatPage.css';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';

const ChatPage = ({users, messages, userName, roomId, onAddMessage}) => {

    const [messageValue, setMessageValue] = React.useState('');

    const messageRef = useRef(null);

    useEffect(() => {
        messageRef.current.scrollTo(0, 99999);
    }, [messages]);


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
        <Container className="chat">
            <Row>
                <Col sm="2" className="chat__users">
                    <b> Room {roomId} </b>
                    <hr />
                    <p><b> Users list({users.length}): </b></p>
                    <div variant="flush">
                        {users.map((name, index) => (<Alert className="user-item" variant="warning" key={name + index}>{name}</Alert>))}
                    </div>
                </Col>
                <Col className="chat__messages">
                    <div><h3 className="welcome">Welcome to Chat</h3></div>
                    <div ref={messageRef} className="messages">
                        {messages.map((mess, index) => (
                            <div key={mess + index} className="message">
                                <div>
                                    <Alert className="mess" variant="success" key={mess + index}>
                                        <Alert.Heading>{mess.text}</Alert.Heading>
                                        <hr />
                                        <div className="d-flex justify-content-end" key={mess + index}>
                                        {mess.userName}
                                        </div>
                                    </Alert>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="send-message-form">
                        <Form.Control className="form-control" as="textarea" rows="3" 
                        value={messageValue}
                        onChange={(e) => setMessageValue(e.target.value)} ></Form.Control> 
                        <Button className="button" variant="secondary" onClick={onSendMessage}>Send</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ChatPage;