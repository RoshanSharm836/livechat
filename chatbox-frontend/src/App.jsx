import { useState } from "react";
import "./App.css";
import io from "socket.io-client";
import Chat from "./Component/Chat";
import From from "./Component/From";
import { Routes, Route, useNavigate } from "react-router-dom";

const socket = io.connect("http://localhost:3001");
function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);

  function joinroom() {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setActive(true);
    } else {
      alert("fill all input's");
    }
  }
  console.log(username);
  return (
    <div className="App">
      {!active ? (
        <From
          fn={joinroom}
          setname={setUsername}
          setpassword={setPassword}
          setroom={setRoom}
        />
      ) : (
        <Chat socket={socket} name={username} room={room} />
      )}
    </div>
  );
}

export default App;
