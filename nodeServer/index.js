const io = require('socket.io')(8000)
const users = {}

io.on('connection', (socket) => {
    socket.on('New-User-Join', name => {
        console.log('new user join', name)
        users[socket.id] = name
        socket.broadcast.emit('users-joined', name)
    })

    socket.on('send', message => {
        socket.broadcast.emit('recieve', { message: message, name: users[socket.id] })
    })
})
