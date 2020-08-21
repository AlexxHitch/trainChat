const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
})

app.post('/rooms', (req, res) => {
    console.log("hey");
})

io.on('connection', (socket) => {
    console.log('user connected', socket.id);
})

server.listen(1000, (err) => {
    if(err) {
        throw Error(err);
    } 
    console.log('Activate server');
});
