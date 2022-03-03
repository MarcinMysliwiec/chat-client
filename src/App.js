import { useState} from "react";
import io from "socket.io-client";
import Lobby from "./components/Lobby";
import Chat from "./components/Chat";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const URL = "http://localhost";
const PORT = 3001

const App = () => {
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState([]);
  const [userData, setUserData] = useState({});
  const [users, setUsers] = useState([]);

  const pushMessage = (msgObj) => {
    setMessages(messages => [...messages, msgObj]);
  }

  const joinRoom = async (username, room) => {
    try {
      const socket = io.connect(`${URL}:${PORT}`);

      socket.on("receive_message", (msgObj) => {
        console.log("receive_message", msgObj)
        pushMessage(msgObj);
      });

      socket.on("users_in_room", (users) => {
        console.log("users_in_room", users)
        setUsers(users);
      });

      socket.on("disconnect", () => {
        setSocket();
        setMessages([]);
        setUserData({});
        setUsers([]);
      });

      socket.emit("join_room", {username, room});
      setSocket(socket);
    } catch (e) {
      console.log(e);
    }
  }

  const sendMessage = async (message) => {
    try {
      const msgObj = {
        room: userData.room,
        author: {name: userData.username, is_bot: false},
        message: message,
        time: new Date().toISOString()
      }
      socket.emit("send_message", msgObj);
      pushMessage(msgObj);
    } catch (e) {
      console.log(e);
    }
  }

  const closeConnection = async () => {
    try {
      socket.disconnect();
    } catch (e) {
      console.log(e);
    }
  }

  return <div className="app">
    <h2>MyChat</h2>
    <hr className="line"/>
    {!socket
      ? <Lobby joinRoom={joinRoom} setUserData={setUserData}/>
      : <Chat sendMessage={sendMessage} messages={messages} users={users} setUsers={setUsers} closeConnection={closeConnection}
              userData={userData}/>}
  </div>
}

export default App;
