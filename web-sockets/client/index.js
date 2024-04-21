const socket = io("http://localhost:3000");

socket.on("Connection", () =>{
  console.log("response");
});

socket.on('message', (data) => {
  console.log(data);
  socket.emit('message', 'Hello from client')
});