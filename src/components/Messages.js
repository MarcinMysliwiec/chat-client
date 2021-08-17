import { useEffect, useRef } from "react";
import UserMessage from "./UserMessage";
import SysMessage from "./SysMessage";

const Messages = ({ messages }) => {
  const messageRef = useRef();

  useEffect(() => {
    if (messageRef && messageRef.current) {
      const { scrollHeight, clientHeight } = messageRef.current;
      messageRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight, behavior: "smooth" });
    }
  }, [messages]);

  return <div ref={messageRef} className="message-container">
    {messages.map((msg, index) =>
      // <div className='user-message'>
      //   <div className="message bg-primary">{msg.message}</div>
      //   <div className="from-user">{msg.user}</div>
      // </div>
      {
        return msg.type === "Message"
        ? <UserMessage msg={msg} key={index} />
        : <SysMessage msg={msg} key={index} />
      }

    )}
  </div>
}

export default Messages;
