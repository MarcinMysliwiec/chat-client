const UserMessage = ({msg, userData, nextMessage}) => {
  return <div className={`message user ${msg.author.name === userData.username ? "owner" : ""}`}>
    <div className="message">{msg.message}</div>
    {
      ((msg.author.name !== userData.username) && (msg.author.name !== nextMessage.author.name)) &&
      <div className="from-user">{msg.author.name}</div>
    }
  </div>
}

export default UserMessage;
