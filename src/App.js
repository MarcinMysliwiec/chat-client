import {useState} from "react";
import io from "socket.io-client";
import Lobby from "./components/Lobby";
import Chat from "./components/Chat";
import "bootstrap/dist/css/bootstrap.min.css";

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
      const socket = io.connect(`${process.env.REACT_APP_BACK_URL}:${process.env.REACT_APP_BACK_PORT}`);

      socket.on("receive_message", (msgObj) => {
        // console.log("receive_message", msgObj)
        pushMessage(msgObj);
      });

      socket.on("receive_bot_message", (msgObj) => {
        // console.log("receive_bot_message", msgObj)
        pushMessage(msgObj);
      });

      socket.on("users_in_room", (users) => {
        // console.log("users_in_room", users)
        setUsers(users);
      });

      socket.on("disconnect", () => {
        // console.log("disconnect")
        setSocket();
        setMessages([]);
        setUserData({});
        setUsers([]);
      });

      socket.emit("join_room", {username, room});
      setSocket(socket);
    } catch (e) {
      console.error(e);
    }
  }

  const sendMessage = async (message) => {
    try {
      const msgObj = {
        room: userData.room,
        type: 'text',
        is_bot: false,
        author: userData.username,
        message: message,
        time: new Date().toISOString()
      }
      socket.emit("send_message", msgObj);
      pushMessage(msgObj);
    } catch (e) {
      console.error(e);
    }
  }

  const closeConnection = async () => {
    try {
      socket.disconnect();
    } catch (e) {
      console.error(e);
    }
  }

  return <div className="app">
    <a href="https://chat.mysliw.pl"><h1>Czat</h1></a>
    <h2>Real time chat is a new feature on the web, and it can be a powerful tool for businesses and organizations. Find
      out how to make the most of it.</h2>
    <hr className="line"/>
    {!socket
      ? <Lobby joinRoom={joinRoom} setUserData={setUserData}/>
      : <Chat sendMessage={sendMessage} messages={messages} users={users} setUsers={setUsers}
              closeConnection={closeConnection}
              userData={userData}/>}
  </div>
}

export default App;
