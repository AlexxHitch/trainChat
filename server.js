const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.json());

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
})
app.post('/rooms', (req, res) => {
    const {roomId, userName} = req.body;
    if(!rooms.has(roomId)){
        rooms.set(roomId, new Map([
            ['users', new Map()], ['messeges', []]
        ]));
    } 
    //res.json([...rooms.values()]);
    res.send();
});

io.on('connection', (socket) => {
    socket.on('ROOM:JOIN', (data) => {
        socket.join(data.roomId);
        rooms.get(data.roomId).get('users').set(socket.id, data.userName);
        const users = [...rooms.get(data.roomId).get('users').values()];
        socket.to(data.roomId).broadcast.emit('ROOM:JOINED', users);
    })

    console.log('user connected', socket.id);
})

server.listen(1000, (err) => {
    if(err) {
        throw Error(err);
    } 
    console.log('Activate server');
});
