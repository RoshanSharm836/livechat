import React, { useState } from "react";
import { useEffect } from "react";

function Chat({ socket, name, room }) {
  const [meesage, setMessage] = useState("");
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    socket.on("receive", (newdata) => {
      setDataList((prev) => [...prev, newdata]);
    });
    console.log(dataList);
  }, [socket]);

  async function sendmessage() {
    if (meesage !== "") {
      const data = {
        room: room,
        name: name,
        playload: meesage,
        date:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      console.log(dataList);
      await socket.emit("send_message", data);
      setDataList((dataList) => [...dataList, data]);
      setMessage("");
    }
  }

  return (
    <div className="box">
      <h1>live chat</h1>

      <div className="container">
        <div className="left-box">
          <img src="background.svg" alt="" srcset="" />
        </div>
        <div className="right-box">
          <div className="message-block">
            {dataList?.map((el, i) => {
              return (
                <span
                  className={el.name === name ? "sender" : "recevier"}
                  key={i}
                >
                  <p>{el.playload}</p>
                  <h6>{el.name}</h6>
                  <h6>{el.date + "min"}</h6>
                </span>
              );
            })}
          </div>
          <div className="message_input">
            <input
              type="text"
              name=""
              id=""
              value={meesage}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button onClick={sendmessage}>&#9658;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
