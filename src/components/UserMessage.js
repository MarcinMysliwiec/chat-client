const UserMessage = ({msg, userData, nextMessage}) => {
  return <div className={`message user ${msg.author === userData.username ? "owner" : ""}`}>
    <div className="message">{msg.message}</div>
    {
      ((msg.author !== userData.username) && (msg.author !== nextMessage.author)) &&
      <div className="from-user">{msg.author}</div>
    }
  </div>
}

export default UserMessage;
