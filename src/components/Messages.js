import { useEffect, useRef } from "react";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";

const Messages = ({ messages, userData }) => {
  const messageRef = useRef();

  useEffect(() => {
    if (messageRef && messageRef.current) {
      const { scrollHeight, clientHeight } = messageRef.current;
      messageRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight, behavior: "smooth" });
    }
    console.log('messages', messages)
  }, [messages]);

  return <div ref={messageRef} className="message-container">
    {messages.map((msg, index) => {
        return msg.author.is_bot
        ? <BotMessage msg={msg} key={index} />
        : <UserMessage msg={msg} key={index} userData={userData} />
      }
    )}
  </div>
}

export default Messages;
