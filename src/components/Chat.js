import SendMessageForm from "./SendMessageForm";
import Messages from "./Messages";
import { Button } from "react-bootstrap";
import ConnectedUsers from "./ConnectedUsers";

const Chat = ({ sendMessage, messages, users, closeConnection }) => <div>
  <div className="leave-room">
    <Button variant="danger" onClick={() => closeConnection()}>Leave Room</Button>
  </div>
  <ConnectedUsers users={users} />
  <div className="chat">
    <Messages messages={messages}/>
    <SendMessageForm sendMessage={sendMessage}/>
  </div>
</div>

export default Chat;
