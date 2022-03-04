import SendMessageForm from "./SendMessageForm";
import Messages from "./Messages";
import {Button} from "react-bootstrap";
import ConnectedUsers from "./ConnectedUsers";
import {useEffect} from "react";

const URL = "http://localhost";
const PORT = 3001;

const Chat = ({sendMessage, messages, users, setUsers, closeConnection, userData}) => {
  useEffect(() => {
    if(!userData) return 0;

    fetch(`${URL}:${PORT}/users?` + new URLSearchParams({
      room: userData.room,
    }))
      .then(response => response.json())
      .then(data => {
        data.push({...userData, socketId: null})
        setUsers(data);
      });
  }, [userData]);

  return (
    <div>
      <div className="leave-room">
        <Button variant="danger" onClick={() => closeConnection()}>Opuść pokój</Button>
      </div>
      <ConnectedUsers users={users} setUsers={setUsers}/>
      <div className="chat">
        <Messages messages={messages} userData={userData}/>
        <SendMessageForm sendMessage={sendMessage}/>
      </div>
    </div>
  )
}

export default Chat;
