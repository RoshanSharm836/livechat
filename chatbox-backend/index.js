const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET"],
  },
});

io.on("connection", (socket) => {
  console.log(`socket connect ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log("user with id", socket.id, "join room", data);
  });
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive", data);
    console.log("user data", data);
  });

  socket.on("disconnect", () => {
    console.log("disconnect", socket.id);
  });
});

server.listen(3001, () => {
  console.log("server running....");
});
