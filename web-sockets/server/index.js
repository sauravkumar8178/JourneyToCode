const { Socket } = require('dgram');
const {createServer} = require('http');
const {Server} = require('socket.io');

const httpServer = createServer();
const io = new Server(httpServer,{
  cors: {
    origin: "http://127.0.0.1:5500",
  }
});

io.on('connect', (sockets) => {
  console.log(sockets);

  socket.on('message', (message) => {
    console.log(message);
  })

  socket.emit('message', 'Hello from server');
});

httpServer.listen(3000, () => {
  console.log('Server is connect');
})