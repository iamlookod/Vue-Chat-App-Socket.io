const express = require('express')
const cors = require('cors')

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)


app.use(cors())

app.get('/', function (req, res) {
    res.send('NodeJS Socket.io')
})

io.on('connection', function (socket) {
    console.log('a user connected ', socket.id)

    socket.on('disconnect', function () {
        console.log('user disconnected ', socket.id)
    })

    socket.on('MESSAGE', function (msg) {
        console.log('socket by : ', socket.id, ' message: ' + msg)
        // ส่งข้อมูลกลับไปหาผู้ส่งมา
        io.emit('MESSAGE', msg)
    })
})

http.listen(3000, () => console.log('app start @ port 3000'));
