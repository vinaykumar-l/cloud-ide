const http = require("http");
const express = require("express");
const { Server: sockerServer } = require("socket.io");

const app = express();

const Server = http.sockerServer(app);
const io = new SocketServer({
  cors: "*",
});

io.attach(server);

io.on("connection", (socket) =>
  console.log(`socket connected socket id: ${socket.id}`)
);

server.listen(9000, () => {
  console.log("Docker server is running on port 9000");
});
